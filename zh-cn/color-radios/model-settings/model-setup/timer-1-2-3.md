## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX software and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Customizable Interface**: Personalize your transmitter's interface to suit your preferences.
- **Advanced Mixing**: Create complex control setups with ease.
- **Telemetry Support**: Monitor real-time data from your model.
- **Lua Scripting**: Customize your transmitter's behavior using Lua scripts.
- **Wireless Trainer**: Train with other pilots using the wireless trainer function.
- **Crossfire Integration**: Seamlessly integrate with TBS Crossfire systems.

### Getting Started

To get started with EdgeTX, follow these steps:

1. Download the latest EdgeTX firmware for your transmitter model from the official website.
2. Flash the firmware to your transmitter following the instructions provided.
3. Configure your transmitter settings to match your model and preferences.
4. Explore the various features and customization options available in EdgeTX.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 计时器 1/2/3

<figure><img src="/.gitbook/assets/timers.png" alt=""><figcaption><p>计时器配置页面</p></figcaption></figure>

EdgeTX提供3个可以自定义编程的计时器。以下是配置选项。

**名称：** 计时器的名称

**模式：**

* **关闭** - 不使用计时器
* **开启** - 计时器一直运行
* **启动** - 一旦配置的开关被激活，计时器开始计时。计时器启动后，将忽略开关位置。
* **油门** - 一旦油门升高并且配置的开关被激活，计时器开始计时。如果油门位置降至最小值或配置的开关停止激活，计时器将停止计时。
* **油门百分比** - 计时器按照油门比例计时。在全油门时实时计时，在50%油门时以一半速度计时。
* **油门启动** - 一旦油门升高并且配置的开关被激活，计时器开始计时。启动后，计时器将忽略油门位置并持续计时，直到开关停止激活。

{% hint style="info" %}
**油门**、**油门百分比**和**油门启动**可以由开关、旋钮或另一个通道的值触发，而不仅仅是油门。这在**模型设置**中的[throttle.md](throttle.md "mention")部分的**来源**字段中指定。
{% endhint %}

**开关-** 选择触发计时器启动的开关。如果未选择任何开关，则计时器将根据配置的模式触发。除了开关，还可以选择修剪、遥测源（从该源接收到遥测数据时触发）、或物理活动（摇杆移动或按钮按下）（标记为**ACT**）。

{% hint style="info" %}
在触发名称前带有“!”标记的项目表示条件被反转。例如，“!SA-”表示“当SA开关不在中间/中心位置时（=向上或向下）”。
{% endhint %}

**启动-** 用于计时器高级功能的时间。默认值为00:00，如果保持不变，则计时器将像秒表一样运行，向上计时直到停止。如果在此框中输入不同的时间，则将出现额外的**方向**下拉菜单选项。

**方向** - 如果设置为**显示剩余**，计数器将像倒计时计时器一样运行 - 从指定时间开始倒计时到零，然后提醒用户。如果设置为**显示经过的时间**，计时器将像警报一样运行，从零开始计时直到指定时间，然后提醒用户。

**分钟通知** - 如果选择，您将在每经过一分钟时得到通知，如**倒计时**选项中描述的那样。

**倒计时：**

* **静音** - 直到计时器达到零时不会发出通知。当计时器达到零时，您将听到一声蜂鸣声。
* **蜂鸣声** - 无论从指定时间开始，收音机都会每秒响一次蜂鸣声。
* **语音** - 无论从指定时间开始，收音机都会每秒倒计时。
* **触觉反馈** - 无论从指定时间开始，收音机都会每秒震动一次。
* **蜂鸣声和触觉反馈** - 无论从指定时间开始，收音机都会每秒响蜂鸣声和震动一次。
* **语音和触觉反馈** - 无论从指定时间开始，收音机都会每秒倒计时并震动一次。

**持久性：**

* **关闭** - 在切换模型或关闭/打开收音机时重置计时器值。
* **飞行** - 在切换模型或关闭/打开收音机时不重置计时器值。只有在[重置遥测](../../reset-telemetry.md)菜单中选择**重置飞行**选项时，计时器值才会重置。
* **手动重置** - 仅当单独选择重置（例如：重置计时器1）时，计时器值才会重置在[重置遥测](../../reset-telemetry.md)菜单中。

{% hint style="info" %}
**飞行**持久性设置可以应用于多个计时器，然后这些计时器可以通过**重置飞行**选项同时重置。
{% endhint %}