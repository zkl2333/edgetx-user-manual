#!/usr/bin/env python3
"""检查 zh-cn 目录：SUMMARY 链接、页面内相对链接与图片路径是否可解析，以及与英文结构是否 1:1。"""
import os, re, sys, urllib.parse
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))  # 仓库根
ZH = os.path.join(ROOT, 'zh-cn')
errs = []
def resolve(base_dir, target):
    target = urllib.parse.unquote(target.split('#')[0].split('?')[0].strip())
    if not target: return None
    if target.startswith('/'): return os.path.join(ROOT, target.lstrip('/'))
    return os.path.normpath(os.path.join(base_dir, target))
def exists(p):
    if os.path.isdir(p): return os.path.exists(os.path.join(p, 'README.md'))
    return os.path.exists(p)
# 1. SUMMARY
summary = open(os.path.join(ZH, 'SUMMARY.md'), encoding='utf-8').read()
slinks = re.findall(r'\]\(([^)]+)\)', summary)
for l in slinks:
    if not exists(resolve(ZH, l)): errs.append(f'SUMMARY: 链接不存在 {l}')
listed = {os.path.normpath(l) for l in slinks}
# 2. 所有页面的链接与图片
link_re = re.compile(r'(?<!!)\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)')
img_re = re.compile(r'<img[^>]*\bsrc="([^"]+)"|!\[[^\]]*\]\(([^)\s]+)\)|\{% file src="([^"]+)"')
nimg = nlink = 0
pages = []
for d, _, fs in os.walk(ZH):
    for f in fs:
        if not f.endswith('.md'): continue
        p = os.path.join(d, f); rel = os.path.relpath(p, ZH); pages.append(rel)
        txt = open(p, encoding='utf-8').read()
        txt = re.sub(r'```.*?```', '', txt, flags=re.S)
        for m in img_re.finditer(txt):
            t = next(g for g in m.groups() if g)
            if re.match(r'https?:|data:', t): continue
            nimg += 1
            if not exists(resolve(d, t)): errs.append(f'{rel}: 图片不存在 {t}')
        for t in link_re.findall(txt):
            if re.match(r'(https?|mailto):|#', t): continue
            nlink += 1
            if not exists(resolve(d, t)): errs.append(f'{rel}: 链接不存在 {t}')
# 3. 未列入 SUMMARY 的页面 & 与英文 1:1
for rel in pages:
    if rel in ('SUMMARY.md', 'GLOSSARY.md'): continue
    if os.path.normpath(rel) not in listed: print(f'提示: 未列入 SUMMARY 的页面 {rel}')
    if not os.path.exists(os.path.join(ROOT, rel)): errs.append(f'{rel}: 无对应英文页面')
for d, _, fs in os.walk(ROOT):
    if '/.git' in d or d.startswith(ZH) or '/.gitbook' in d: continue
    for f in fs:
        if f.endswith('.md'):
            rel = os.path.relpath(os.path.join(d, f), ROOT)
            if not os.path.exists(os.path.join(ZH, rel)): errs.append(f'缺少中文页面: {rel}')
print(f'SUMMARY 链接 {len(slinks)} 个，页面 {len(pages)} 个，检查图片 {nimg} 处、相对链接 {nlink} 处')
for e in errs: print('错误:', e)
print('通过' if not errs else f'共 {len(errs)} 个问题'); sys.exit(1 if errs else 0)
