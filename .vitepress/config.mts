import { defineConfig } from 'vitepress'
import AutoNav from "vite-plugin-vitepress-auto-nav";
import markdownItContainer from 'markdown-it-container'

function markdownItGitbookHint(md) {
  // 定义一个块级规则
  md.block.ruler.before('paragraph', 'gitbook_hint', (state, startLine, endLine, silent) => {
    const startPos = state.bMarks[startLine] + state.tShift[startLine]
    const src = state.src.slice(startPos)

    // 使用正则匹配 {% hint style="info" %} 的起始标记行
    const startMatch = src.match(/^\{% hint style="(tip|info|warning|danger)" %\}/)
    if (!startMatch) return false

    const hintType = startMatch[1] // 获取hint类型
    let nextLine = startLine + 1
    let contentLines: string[] = []

    // 往下找 {% endhint %} 行
    for (; nextLine < endLine; nextLine++) {
      const lineStart = state.bMarks[nextLine] + state.tShift[nextLine]
      const lineEnd = state.eMarks[nextLine]
      const lineStr = state.src.slice(lineStart, lineEnd)
      if (lineStr.match(/^\{% endhint %\}$/)) {
        break
      }
      contentLines.push(lineStr)
    }

    // 如果没找到结束标记，就不处理
    if (nextLine >= endLine) return false

    // 到这里说明成功匹配到一个完整的 hint 块
    if (!silent) {
      // 清除该块在源文中的行
      state.line = nextLine + 1

      // 创建开闭 token 模拟容器语法
      const openToken = state.push(`container_${hintType}_open`, 'div', 1)
      openToken.markup = `{% hint style="${hintType}" %}`
      openToken.block = true
      openToken.info = hintType
      openToken.map = [startLine, nextLine]

      const textToken = state.push('inline', '', 0)
      textToken.content = contentLines.join('\n')
      textToken.children = []

      const closeToken = state.push(`container_${hintType}_close`, 'div', -1)
      closeToken.markup = '{% endhint %}'
      closeToken.block = true
    }

    return true
  })
}

function markdownItGitbookEmbed(md) {
  md.block.ruler.before('paragraph', 'gitbook_embed', (state, startLine, endLine, silent) => {
    const startPos = state.bMarks[startLine] + state.tShift[startLine]
    const src = state.src.slice(startPos)
    const startMatch = src.match(/^\{% embed url="([^"]+)" %\}/)

    if (!startMatch) return false
    const embedUrl = startMatch[1]

    let nextLine = startLine + 1
    const contentLines: string[] = []

    let foundEnd = false

    // 向下搜索 {% endembed %}，如果找不到就视为单行 embed
    for (; nextLine < endLine; nextLine++) {
      const lineStart = state.bMarks[nextLine] + state.tShift[nextLine]
      const lineEnd = state.eMarks[nextLine]
      const lineStr = state.src.slice(lineStart, lineEnd)

      if (lineStr.match(/^\{% endembed %\}$/)) {
        foundEnd = true
        break
      }
      contentLines.push(lineStr)
    }

    // 解析结果：
    // 如果 foundEnd = true, 则 nextLine 为 endembed 行的下标
    // 如果 foundEnd = false, 则没有找到 endembed，这个是单行 embed

    if (!silent) {
      if (foundEnd) {
        // 多行情况
        state.line = nextLine + 1
      } else {
        // 单行情况
        // 没找到 endembed，说明 embed 块只在一行里
        // 单行 embed 没有额外内容行
        contentLines.length = 0
        state.line = startLine + 1
      }

      const token = state.push('html_block', '', 0)

      // 将 contentLines 作为多行内容处理
      const contentHtml = contentLines.map(line => `<p>${md.utils.escapeHtml(line)}</p>`).join('\n')

      // 生成最终 HTML
      token.content = `
<div class="embed-block">
  <div class="embed-header">
    <a href="${md.utils.escapeHtml(embedUrl)}" target="_blank" rel="noopener noreferrer">
      ${md.utils.escapeHtml(embedUrl)}
    </a>
  </div>
  ${contentHtml ? `<div class="embed-content">${contentHtml}</div>` : ''}
</div>
`
      token.map = [startLine, state.line]
    }

    return true
  })
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-cn',
  title: "EdgeTX 中文用户手册",
  description: "本用户手册解释了 EdgeTX 中可用的所有配置选项，以及一些关于 EdgeTX 使用和模型控制的高层次理论信息。内容分为几个部分——一个部分覆盖 [彩屏遥控器](color-radios/)，另一个部分覆盖 [单色屏幕遥控器](bw-radios/) 的界面。",
  srcDir: './zh-cn',
  vue: {
    exclude: './zh-cn',
  },
  vite: {
    plugins: [
      AutoNav({
        summary: { target: "./zh-cn/SUMMARY.md" }
      }) as any,
    ],
  },
  themeConfig: {
    editLink: {
      pattern: 'https://github.com/zkl2333/edgetx-user-manual/edit/main/docs/:path'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/zkl2333/edgetx-user-manual' }
    ],
    search: {
      provider: 'local'
    }
  },
  markdown: {
    config: (md) => {
      // 使用自定义插件先处理 GitBook Hints 语法
      md.use(markdownItGitbookHint)

      md.use(markdownItGitbookEmbed)

      // 再使用 markdown-it-container 来渲染相应类型的块
      md.use(markdownItContainer, 'info', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          if (token.nesting === 1) {
            return '<div class="custom-block info">\n<p class="custom-block-title">INFO</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })

      md.use(markdownItContainer, 'tip', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          if (token.nesting === 1) {
            return '<div class="custom-block tip">\n<p class="custom-block-title">TIP</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })

      md.use(markdownItContainer, 'warning', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          if (token.nesting === 1) {
            return '<div class="custom-block warning">\n<p class="custom-block-title">WARNING</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })

      md.use(markdownItContainer, 'danger', {
        render: (tokens, idx) => {
          const token = tokens[idx]
          if (token.nesting === 1) {
            return '<div class="custom-block danger">\n<p class="custom-block-title">DANGER</p>\n'
          } else {
            return '</div>\n'
          }
        }
      })
    }
  }
})
