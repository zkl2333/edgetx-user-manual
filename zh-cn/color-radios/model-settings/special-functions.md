## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware with additional features and improvements.

### Features

- **Customizable Interface**: EdgeTX allows users to customize the user interface to suit their preferences.
- **Advanced Flight Controller Support**: EdgeTX is compatible with a wide range of flight controllers, providing flexibility for various types of models.
- **Telemetry Integration**: Users can easily integrate telemetry systems to monitor real-time data during flights.
- **Voice Alerts**: EdgeTX supports voice alerts to provide audible notifications during flight.
- **Cross-platform Compatibility**: EdgeTX is compatible with multiple platforms, including Windows, macOS, and Linux.

### Getting Started

To get started with EdgeTX, follow these steps:

1. Download the latest EdgeTX firmware from the official website.
2. Install the firmware on your radio transmitter following the instructions provided.
3. Configure your radio transmitter settings according to your model and preferences.
4. Perform a range check and verify all controls before flying your model.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 特殊功能

**特殊功能** 部分位于模型设置中，正如其名称所示，您可以在这里配置包含在 EdgeTX 中的特殊功能。这些特殊功能增加了超出正常模型控制的附加功能，例如启用训练模式、播放声音、调整无线电背光、调整无线电音量等。在特殊功能屏幕上，您将看到所有已配置的特殊功能以及一些配置选项，如功能名称、激活开关、功能是否已启用以及其他配置选项。

<figure><img src="/.gitbook/assets/specialfunctions.png" alt=""><figcaption><p>特殊功能</p></figcaption></figure>

选择 **+** 按钮将允许您选择一个未使用的特殊功能进行配置，然后将出现特殊功能配置窗口。有关配置新特殊功能的信息，请参见下面的 [配置特殊功能](special-functions.md#configuring-special-functions)。

选择已配置的特殊功能将为您提供以下选项：

- **编辑** - 打开特殊功能配置页面
- **复制** - 复制所选特殊功能
- **粘贴** - 将复制的特殊功能粘贴到所选特殊功能。注意：这将用复制的特殊功能覆盖所选特殊功能的值。
- **插入** - 在所选特殊功能上方插入一个空白特殊功能
- **清除** - 清除所选特殊功能的所有配置选项。
- **删除** - 删除所选特殊功能。
- **启用** - 启用特殊功能
- **禁用** - 禁用特殊功能；

### 配置特殊功能

所有特殊功能都具有以下配置选项。根据所选功能，可能会添加其他选项。有关这些附加选项，请参见下面的 **功能** 部分。

- **触发器** - 使特殊功能激活的开关。
- **功能** - 将要使用的功能。有关功能描述，请参见下面的功能描述。
- **启用** - 切换开 / 关以启用功能。要通过开关激活特殊功能，必须启用它。禁用的特殊功能将不会起作用，无论配置的开关位置如何。

### 功能

以下是 EdgeTX 中所有可用功能，它们的作用，以及专门为该功能存在的其他配置选项。

**覆盖**（通道覆盖）- 使用指定值覆盖定义的通道。

- **CH** - 要覆盖的通道
- **值** - 替换正常通道值的值。 （范围 -100 到 +100）

**训练者** - 启用训练模式。

- **值** - 指定将授予学生的控件。选项包括 **Sticks**（所有摇杆）、**Rud**（方向舵）、**Ele**（升降舵）、**Thr**（油门）、**Ail**（副翼）和 **Chans**（所有通道）。；

**Inst. Trim**（即时微调）- 将所有微调设置为各自摇杆当前值。

**重置**（重置计时器）- 将值中指定的计时器或遥测重置为其初始值。

- **重置** - 选项为 **计时器 1、计时器 2、计时器 3、飞行** 和 **遥测**。有关每个选项重置的数据，请参见 [**重置遥测**](../reset-telemetry.md)。

**设置**（设置计时器）- 将指定计时器设置为指定值。

- **计时器** - 选项为 **计时器 1、计时器 2、计时器 3**
- **值** - 范围为 00:00:00 到 08:59:59；

**调整**（调整全局变量）- 更改指定全局变量的值。

- **全局变量** - 选择要调整的全局变量。
- **模式** - 选择要更改全局变量的模式。选项为：**常量、混音源、全局变量、增加/减少**
  - **常量** - 将指定的全局变量设置为定义的常量值。
  - **混音源** - 将指定的全局变量设置为定义的混音源值。
  - **全局变量** - 将指定的全局变量设置为定义的全局变量值。
  - **增加/减少** - 将指定的全局变量增加/减少指定数量。

**音量** - 更改无线电音量。更改源在音量下拉菜单中指定。

**设置失控保护** - 将选定模块（内部/外部）的自定义失控保护值设置为激活时当前摇杆位置。要使此选项起作用，RF 模块的失控保护模式必须设置为 **custom**。

**播放声音** - 激活时播放值字段中选择的声音。

- **值** - 要播放的声音。可能的值为 **Beep1/2/3、Warn1/2、Cheep、Ratata、Tick、Siren、Ring、SciFi、Robot、Chirp、Tada、Crickt、AlmClk**。_注意：不需要 SD 卡声音包。_
- **重复** - 重复声音的频率。选项为 **!1x**（即使开关激活，也不要在启动时播放）、**1x**（播放一次）、**1s** 到 **60s**（每 xx 秒播放一次）。

**播放轨道** - 激活时播放值字段中选择的 .wav 声音文件。

- **值** - 要从 SD 卡播放的 .wav 声音文件。
- **重复** - 重复轨道的频率。选项为 **!1x**（即使开关激活，也不要在启动时播放）、**1x**（播放一次）、**1s** 到 **60s**（每 xx 秒播放一次）。

**播放值** - 在值字段中选择的元素的值。

- **值** - 要宣布值的来源。它可以是输入、摇杆、旋钮、滑块、微调、物理和逻辑开关、训练导入通道值、全局变量、遥测传感器或通道。
- **重复** - 重复宣布的频率。选项为 **!1x**（即使开关激活，也不要在启动时宣布）、**1x**（宣布一次）、**1s** 到 **60s**（每 xx 秒宣布一次）。

**Lua 脚本** - 执行值字段中定义的 Lua 脚本。Lua 脚本必须位于 SD 卡上的 /SCRIPTS/FUNCTIONS/ 文件夹中。无法使用此特殊功能执行在屏幕上显示信息的 Lua 脚本。

- **值** - 从 SD 卡播放的 LUA 脚本文件。
- **重复** - 重复 Lua 脚本的频率。选项为：**ON**（只要开关激活，就无限重复）或 **1x**（一次）

**背景音乐** - 在启用时循环播放值字段中选择的 .wav 文件。文件必须位于 SD 卡上的 SOUNDS/(language)/ 文件夹中。

**背景音乐 II** - 暂时暂停在 **背景音乐** 中指定的 .wav 文件的播放。

**Vario** - 启用模型上升和下降的变速器哔哔声。

**触觉反馈** - 启用时使无线电振动（触觉反馈）。

- **值** - 振动模式的类型。选项为：0 - 4。
- **重复** - 重复振动模式的频率。选项为 **!1x**（即使开关激活，也不要在启动时振动）、**1x**（振动一次）、**1s** 到 **60s**（每 xx 秒振动一次）。

**SD 日志** - 在 SD 卡的 LOGS 文件夹中创建无线电和遥测值的日志 .csv 文件。无线电将根据 **间隔** 设置的频率为日志文件创建新条目。值选项为 **0.1s** - **25.5s.** 每次激活该功能时，只要至少激活了与值设置相同的时间，无线电就会创建一个新的日志文件。**注意：**如果 SD 卡剩余空间少于 50mb，则不会开始记录。；

**背光** - 根据值下拉菜单中定义的源调整无线电屏幕的亮度。亮度受限于在 **无线电设置 -> 背光屏幕** 中配置的开 / 关值。

**截图** - 在 SD 卡的 SCREENSHOT 文件夹中创建 .bmp 文件的截图。

**竞速模式** - 为 FrSky Archer RS 接收器启用竞速模式（低延迟）。还必须在外部 RF 模块设置中启用竞速模式。

**无触摸** - 禁用触摸屏幕启用的无线电的触摸界面。

**设置主屏幕** - 将当前可见屏幕更改为定义的屏幕号码。

- **值** - 如 [屏幕设置](../screen-settings/) 中定义的屏幕号码。
- **重复** - 当开关保持激活时，重复值确定特殊功能将多久将屏幕更改为定义的屏幕。选项为 **!1x**（即使开关激活，也不要在启动时更改）、**1x**（更改一次）、**1s** 到 **60s**（每 xx 秒更改一次）。这很有用，因为一旦开关被激活，用户仍然可以手动切换屏幕，然后在定义的持续时间后将其更改回定义的屏幕。

**音频放大器关闭** - 禁用音频放大器，使扬声器不发出声音，包括恼人的反馈或干扰。此选项仅适用于部分无线电。