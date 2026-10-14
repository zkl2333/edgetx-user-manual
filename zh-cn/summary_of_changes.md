---
metaLinks:
  alternates:
    - https://app.gitbook.com/s/2n2y0XsJcrhXt3asceP0/summary_of_changes
---

# 自 v2.10 以来的更改摘要

以下是影响用户界面和/或 EdgeTX 功能的更改摘要。不包含所有的错误修复。有关_**完整**_的更改列表（包括错误修复），请阅读发布说明。

#### 总体变化

* 支持下一代遥控器（基于 H5/H7 微控制器），将带来更快的彩屏和黑白屏遥控器，具有更多的 RAM 和 flash 以支持新功能 ([#5228](https://github.com/EdgeTX/edgetx/pull/5228))
* 现在可以使用 `u-blox` 原生二进制协议（而不仅仅是 NMEA）为您的手持设备添加 GPS ([#4689](https://github.com/EdgeTX/edgetx/pull/4689))
* 编辑遥测传感器比率时，您还可以看到百分比值以帮助赋予该值意义 ([#4649](https://github.com/EdgeTX/edgetx/pull/4649))
* 更新到 Lua 5.3（以前是 5.2）- 这节省了一些 RAM，并且还允许与 Companion 二进制兼容（这意味着在 PC 上使用模拟器创建的 `.luac` 文件现在与手持设备兼容）([#4203](https://github.com/EdgeTX/edgetx/pull/4203))
* ELRSv4：Master/CRSF 教练选项，使用 ELRS 背包中继头部追踪器数据作为输入 ([#5724](https://github.com/EdgeTX/edgetx/pull/5724))
* ELRSv4：支持可选的解锁方法，释放 CH5 ([#5641](https://github.com/EdgeTX/edgetx/pull/5641))
* 对于具有可自定义开关的遥控器，您现在可以轻松创建虚拟 6POS 组，以及开关组 - GRx ([#5016](https://github.com/EdgeTX/edgetx/pull/5016))
* 现在可以禁用开机时的触觉反馈 ([#5017](https://github.com/EdgeTX/edgetx/pull/5017))
* 遥控器可以配置为在空闲时自动关机 ([#3414](https://github.com/EdgeTX/edgetx/pull/3414))
* 粘性逻辑开关状态可以配置为在重启后保持 ([#4978](https://github.com/EdgeTX/edgetx/pull/4978))
* USB 游戏手柄支持 Android 游戏手柄功能 ([#4626](https://github.com/EdgeTX/edgetx/pull/4626))
* 更短的开/关机延迟选项 - 0.5 秒 ([#5134](https://github.com/EdgeTX/edgetx/pull/5134))
* 混控延迟上升和下降的精度设置（除了在 2.10 中添加的"慢上/下"的精度）([#5314](https://github.com/EdgeTX/edgetx/pull/5314))

### **彩屏遥控器**

* 遥控器用户界面性能比 2.10 显著提升 ([#5031](https://github.com/EdgeTX/edgetx/pull/5031))
* 顶部栏小部件大小可以更改 ([#4846](https://github.com/EdgeTX/edgetx/pull/4846))
* 文件浏览器弹窗有过滤器让您可以跳过列表 ([#4946](https://github.com/EdgeTX/edgetx/pull/4946))
* 全屏 Lua 小部件"应用模式"，为小部件提供焦点以允许触摸和按键输入 ([#4655](https://github.com/EdgeTX/edgetx/pull/4655))
* Lua 脚本和小部件现在可以使用 LVGL 控件（按钮、滑块、输入字段）- 使制作与用户交互的_东西_更快更容易 ([#4887](https://github.com/EdgeTX/edgetx/pull/4887), [#5808](https://github.com/EdgeTX/edgetx/pull/5808))
* 可以使用 `PPM_US` 代替百分比值 ([#4987](https://github.com/EdgeTX/edgetx/pull/4987))
* 小部件现在可以有多达 10 个选项（以前是 5 个）([#5365](https://github.com/EdgeTX/edgetx/pull/5365))

### 单色屏幕遥控器

* 遥控器设置选项卡中的可折叠部分使其更短 ([#5529](https://github.com/EdgeTX/edgetx/pull/5529))
* '设置屏幕' 特殊功能让您切换到（已配置的）遥测屏幕 ([#5589](https://github.com/EdgeTX/edgetx/pull/5589))
* 在通道监视器中显示 PPM 值（除了 `0.0`/`0.00` 值）([#5781](https://github.com/EdgeTX/edgetx/pull/5781))
* 添加了反转显示颜色的选项 ([#4933](https://github.com/EdgeTX/edgetx/pull/4933))
