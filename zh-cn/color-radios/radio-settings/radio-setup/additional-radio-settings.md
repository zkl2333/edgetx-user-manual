# EdgeTX User Manual

## Introduction

Welcome to the EdgeTX User Manual. This manual will guide you through the setup and configuration of your radio-controlled models using EdgeTX flight controller system.

## Features

- Intuitive user interface
- Support for a wide range of radio-controlled models
- Customizable themes and layouts
- Open-source software for flexibility and customization

## Getting Started

To get started with EdgeTX, follow these steps:

1. Download the latest EdgeTX firmware from the official website.
2. Flash the firmware to your radio transmitter following the instructions provided.
3. Configure your radio-controlled model settings using the intuitive user interface.
4. Customize themes and layouts to suit your preferences.
5. Start flying your model with EdgeTX!

For more information and updates, visit the [EdgeTX website](https://edgetx.org/).

# 附加无线电设置

在**无线电设置**屏幕上选择其中一个6个按钮将带您进入以下其中一个附加设置屏幕。

这里的许多附加设置都是不言自明的。只有那些需要澄清的设置将在下面提到。

### 声音

<figure><img src="/.gitbook/assets/Sound.png" alt=""><figcaption><p>声音选项</p></figcaption></figure>

**模式** - 配置何时播放声音。

* **全部 -** 按下按钮时发出蜂鸣声，当有警报或警告时播放声音。
* **无按键 -** 按下按钮或滚轮时不发出蜂鸣声，但在有警报或警告时会播放声音。还会播放由特殊功能触发的声音。
* **警报 -** 仅播放警报或警告声音。还会播放由特殊功能触发的声音。
* **静音 -** 不发出蜂鸣声或声音。&#x20;

**音量**

无线电的主音量。

**Wav 音量**

警报和警告的音量以及与**播放曲目**特殊功能一起播放的声音。

**背景音量**

背景.wav文件（音乐）的音量，与**BGMusic**特殊功能一起播放。&#x20;

### 高度计

<figure><img src="/.gitbook/assets/variometer.png" alt=""><figcaption><p>高度计选项</p></figcaption></figure>

**重复零点**

在毫秒内重复音调之前的时间。

{% hint style="info" %}
注意：为了使高度计正常工作，必须通过**Vario**特殊或全局功能打开它。有关如何配置此功能的更多信息，请参阅[特殊功能](../../model-settings/special-functions.md)。
{% endhint %}

### 触觉反馈

<figure><img src="/.gitbook/assets/haptic.png" alt=""><figcaption><p>触觉（振动）选项</p></figcaption></figure>

**模式** - 配置无线电何时振动。

* **全部 -** 按下按钮时振动，当有警报或警告时也会振动。
* **无按键 -** 按下按钮或滚轮时不振动，但在有警报或警告时会振动。&#x20;
* **警报 -** 仅对警报或警告声音振动。
* **静音 -** 不会振动。

### 警报

<figure><img src="/.gitbook/assets/alarms.png" alt=""><figcaption><p>警报选项</p></figcaption></figure>

#### 关闭声音

如果声音模式设置为静音，则在打开发射机时会显示“警报已禁用”的视觉警告。

#### 关闭关于关机时的RSSI

在尝试关闭时检查接收机是否仍连接到无线电。如果检测到一个接收机，则会发出音频和视觉警报。&#x20;

### 背光

<figure><img src="/.gitbook/assets/backlight.png" alt=""><figcaption><p>背光选项</p></figcaption></figure>

**模式**

* **关闭** – 始终关闭。
* **按键** – 按下按钮时打开。
* **控制** – 使用摇杆、开关和旋钮时打开。
* **全部** – 使用按钮、摇杆、开关和旋钮时打开。
* **开启** – 始终打开。

#### 时间&#x20;

背光打开的时间长度（秒）。最小值为5秒。最大值为600秒。

#### 警报

当有警报或警告时，背光会打开。

### GPS

<figure><img src="/.gitbook/assets/gps.png" alt=""><figcaption><p>GPS选项</p></figcaption></figure>

{% hint style="info" %}
GPS配置设置仅适用于在无线电上安装了GPS，而不是模型的GPS。
{% endhint %}

#### 时区：

无线电使用的与UTC的时间偏移量。可以按15分钟的增量进行配置。

#### 调整RTC

调整发射机的实时时钟以匹配GPS确定的时间。

#### 坐标格式

将显示的GPS坐标格式。

### 已启用功能

<figure><img src="/.gitbook/assets/EnabledFeatures.png" alt=""><figcaption><p>已启用功能</p></figcaption></figure>

**已启用功能**部分的无线电设置允许您配置EdgeTX的无线电设置和模型设置区域中可见的_**全局**_ _**设置**_。活动模型的配置设置将显示在切换开关的右侧。模型配置将覆盖全局配置。

{% hint style="info" %}
_**注意：**_ 关闭选项卡只会隐藏该选项卡，不会更改已在该选项卡中配置的项目。

**例外：**关闭全局/特殊功能选项卡将禁用该模型的配置的全局/特殊功能。
{% endhint %}

### 管理模型

<figure><img src="/.gitbook/assets/RSManageModels.png" alt=""><figcaption><p>管理模型设置</p></figcaption></figure>

**模型快速选择** - 影响管理模型屏幕。两个选项都要求您首先使用滚轮或短按选择所需的模型。

* 当关闭时：对所选模型进行短/长按（短/长按ENTER）将显示菜单，您可以在菜单中“选择模型”以将其设置为活动模型。
* 当打开时：对所选模型进行短按（短按ENTER）将立即将其设置为活动模型。要激活菜单，请长按或长按ENTER。

**标签选择** - '**多选**' 或 '**单选**'（多选是默认设置）。如果选择单选，则只能选择一个标签。

**标签匹配** - '**匹配所有**' 或 '**匹配任意**'（匹配所有是默认设置）。匹配所有是当前逻辑 - 仅显示具有所有选定标签的模型。匹配任意将显示具有任何选定标签的模型。

**收藏夹匹配** - 仅在标签匹配选择为 '**匹配任意**' 时可用。选项为 '**必须匹配**' 和 '**可选匹配**'（必须匹配是默认设置）。仅当'收藏夹'在所选标签中时才适用。如果选择了'必须匹配'，则仅显示具有收藏夹和其他选择的模型。如果选择了'可选匹配'，则显示与收藏夹匹配或任何其他标签的模型。