---
description: 截至 2024年5月31日 (v2.10.1)，合并的所有 PR 的最新信息。
---

# 自 v2.9 以来的更改摘要

以下是影响用户界面和/或 EdgeTX 功能的更改摘要。不包含所有的错误修复。完整的更改列表（包括错误修复）请阅读发布说明。

### **彩屏遥控器**

* 新硬件支持
  * Flysky PL18
  * Flysky PL18 EV
  * Jumper T15
* 常规更改
  * 混控在 USB 游戏手柄模式下运行频率提升至 1000Hz（适用于 F.Sim 竞赛选手），统计/调试屏幕中显示混控运行时间。
  * 许多页面进行了小幅 UI 改进，以提升外观与一致性。
  * 移除引导加载器背景以提高文字可读性。
  * 默认启动画面更新为新 EdgeTX Logo 和版本信息。
  * **Source** 选择菜单优化，更易触屏操作并支持排序。
  * **Source** 选择菜单现在会显示全局变量编号和名称。
  * 为 PL18 和 PL18 EV 添加充电 LED 动画。
* [用户界面页面](color-radios/user-interface/)
  * **系统\[SYS]** 和 **模型\[MDL] 按钮**根据所在页面拥有不同的[功能](color-radios/user-interface/#additional-system-and-model-button-functionalities)。
  * NV14 和 EL18 的 [微调拨杆](color-radios/user-interface/trim-navigation.md) 现在可用于导航菜单。
  * 添加了[硬件快捷键用于虚拟文本和数字键盘](color-radios/user-interface/virtual-keyboards.md)。
* [模型管理页面](color-radios/select-model.md)
  * 增加了 3 种额外的模型列表布局。
  * 更新了模型图片框的大小和形状，现在模型名称显示在图片顶部，不再裁剪图片。
  * 将 **新标签** 和 **新模型** 按钮合并为单个 **新建** 按钮，可选择 **模型** 或 **标签**。
  * 用简单的文本下拉菜单取代了困惑的模型排序图标。
  * 增加单选标签功能以及标签的 AND/OR 筛选逻辑（可在 [遥控器设置](color-radios/radio-settings/radio-setup/additional-radio-settings.md) 中配置）。
* [模型设置](color-radios/model-settings/model-setup/)
  * 在 **模型设置** 页面中，已启用的计时器将高亮显示。
  * 添加了 **MIN** 作为源选项，选择后始终返回 -100。
  * 在 **预启动检查** 部分添加了 **交互式检查表** 选项，允许用户为显示的检查表添加交互式复选框。
* [飞行模式](color-radios/model-settings/flight-modes.md)
  * 未使用的微调开关现在可配置为 3 挡临时开关。
* [混控](color-radios/model-settings/inputs-mixes-and-outputs/mixes.md)
  * 为 **慢上/下** 添加了可配置精度，可设置为 10ms 或 100ms。
* [全局变量](color-radios/model-settings/global-variables.md)
  * 添加了 **弹窗** 选项，当启用时，当 GV 值更改时会显示弹窗消息并显示新值。
* [特殊功能](color-radios/model-settings/special-functions.md)
  * 所有特殊功能现在都有 **启用** 复选框。
  * 可在不打开编辑菜单的情况下启用/禁用特殊功能。
  * 添加了虚拟教练开关（**Tnr**），可作为激活特殊功能的开关。教练链接激活时开关为 ON。
  * **背光** 特殊功能的亮度受 **遥控器设置 -> 背光屏幕** 中的开/关值限制。
* [遥测](color-radios/model-settings/telemetry/)
  * 在飞行中首次连接遥测时，EdgeTX 会播放 “Telemetry connected”。
* [SD 卡](color-radios/radio-settings/sd-card.md)
  * 用户可以通过在 **IMAGES** 文件夹中添加自定义 `shutdown.png` 配置自定义关机图片。
  * 现在 .lua 文件支持 **查看文本** 选项。
* [遥控器设置](color-radios/radio-settings/radio-setup/)
  * 在 **GPS 设置** 中，更新了 **时区** 选项，允许以 15 分钟间隔进行配置。
  * 添加了 **启动画面** 选项，可设置启动画面的显示时长。
  * 添加了 **启动声音** 选项，可切换是否启用启动声音。
  * 添加了 **PPM 单位** 选项——以前是构建选项。
  * 在 **启用功能** 部分，增加了活动模型的当前配置设置，显示在切换开关右侧。
* [硬件](color-radios/radio-settings/hardware.md)
  * 模拟输入（如旋钮和滑块）现在可以配置为 **开关**、**X 轴** 或 **Y 轴**，此外还可以配置为 _**反转**_。
  * EdgeTX 现在可在运行时检测串口是否可用，以允许外部模块槽的 SBUS 教练功能。如果可用，将提供配置选项。
* [屏幕设置](color-radios/screen-settings/)
  * 顶部栏中的遥控器信息、日期/时间和内置 GPS 现在可作为小部件配置，支持 6 个小部件槽位。
  * 选择空的小部件时将不再显示“选择小部件”选项，而是直接跳转到小部件选择菜单。
* [小部件](color-radios/screen-settings/widgets.md)
  * 为 **文本** 小部件添加了对齐选项，可将文本对齐到 **左**、**中** 或 **右**。
* 警报
  * 如果尝试在教练连接仍激活的情况下关闭遥控器，将显示警告。

### 单色屏幕遥控器

* 新硬件支持
  * Jumper T-Pro V2
  * Jumper T-14
  * Jumper T-20
  * Flysky 云台支持 Jumper T-20
  * Flysky 云台支持 Frsky X9D+2019
  * RadioMaster Pocket
  * RadioMaster MT12
* 常规更改
  * 混控在 USB 游戏手柄模式下运行频率提升至 1000Hz（适用于 F.Sim 竞赛选手），统计/调试屏幕中显示混控运行时间。
  * 启动画面更新为新的 EdgeTX Logo。
  * 带有未使用灵活串口的遥控器现在会自动定义为 **AUX 串口**（如 MT12）。
* [主视图](bw-radios/main-view/)
  * 为地面遥控器添加了新的视图，显示油门和方向，而非摇杆。
* [模型设置](bw-radios/model-select/)
  * 在 **预启动检查** 部分添加了 **交互式检查表** 选项，允许用户添加交互式复选框。
  * 在地面遥控器（例如 MT-12）上，油门微调不再影响反向油门范围。
* [飞行模式](bw-radios/model-select/flight-modes.md)
  * 未使用的微调开关现在可配置为 3 挡临时开关。
* [混控](bw-radios/model-select/inputs-mixes-and-outputs/mixes.md)
  * 为 **慢上/下** 添加了可配置精度，可设置为 10ms 或 100ms。
* [遥测](bw-radios/model-select/telemetry/)
  * 在飞行中首次连接遥测时，EdgeTX 会播放 “Telemetry connected”。
  * 折叠传感器列表时，会在括号中显示已配置的传感器数量。
* [特殊功能](bw-radios/model-select/special-functions.md)
  * 所有特殊功能现在都有 **启用** 复选框。
  * OLED 屏幕亮度可通过 **背光** 特殊功能控制。
  * 添加了虚拟教练开关（**Tnr**），可作为激活特殊功能的开关。教练链接激活时开关为 ON。
  * 添加了 RGB LED 特殊功能以启用并更改 LED 行为。
* [遥控器设置](bw-radios/radio-settings/radio-setup.md)
  * 在 **GPS 设置** 中，更新了 **时区** 选项，允许以 15 分钟间隔进行配置。
  * 添加了 **启动声音** 选项，可切换是否启用启动声音。
  * 添加了 **PPM 单位** 选项——以前是构建选项。
  * 在 **启用功能** 部分，增加了活动模型的当前配置设置，显示在复选框右侧。
  * 添加了 **旋转编码器模式** - **V-N E-I** = 垂直正常，编辑反转（编辑文本时反转）。
* [硬件](bw-radios/radio-settings/hardware.md)
  * 模拟输入（如旋钮和滑块）现在可以配置为 **开关**、**X 轴** 或 **Y 轴**，此外还可以配置为反转。
  * EdgeTX 现在可在运行时检测串口是否可用，以允许外部模块槽的 SBUS 教练功能。如果可用，将提供配置选项。
* 警报
  * 如果尝试在教练连接仍激活的情况下关闭遥控器，将显示警告。
