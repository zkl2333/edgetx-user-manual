## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware with additional features and improvements.

### Features

- Intuitive and user-friendly interface
- Support for a wide range of radio-controlled models
- Customizable themes and sound packs
- Advanced mixing and scripting capabilities

### Getting Started

To install EdgeTX on your radio transmitter, follow these steps:

1. Download the latest EdgeTX firmware from the official website.
2. Connect your radio transmitter to your computer using a USB cable.
3. Flash the EdgeTX firmware to your radio transmitter using a firmware flashing tool.

### Configuration

After installing EdgeTX, you can configure your radio transmitter settings using the built-in menu system. Customize your model setups, radio profiles, and system settings to suit your preferences.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 辅助训练

<figure><img src="/.gitbook/assets/trainer1.png" alt=""><figcaption><p>辅助训练屏幕</p></figcaption></figure>

**辅助训练** 屏幕是您可以配置 CPPM 透传模式和方法的地方。启用后，这允许从处于 _**从属**_ 模式的遥控器传递 CPPM 信号到另一个处于主模式的遥控器，然后再将信号传递给连接的模型。CPPM 透传可用于多种用例，例如：连接头部跟踪器、导师/学生训练模式以及控制需要比标准遥控器上可用的更多摇杆输入的复杂模型。

**主模式** - 这是将连接到模型的遥控器的模式。该遥控器还应配置特殊/全局功能（辅助训练）以激活透传模式。当透传模式被激活时，来自处于 _**从属模式**_ 的遥控器的 CPPM 信号将被发送到模型以进行控制。

**从属模式** - 这是将其 CPPM 值传递给 _**主模式**_ 的遥控器的模式，然后这些值将被发送到模型。

以下是可能的配置选项：

- **关闭** - 不使用辅助训练模式。
- **主模式 / 插孔** - 使用电缆连接的主模式。
- **从属模式 / 插孔** - 使用电缆连接的从属模式。
  - **通道范围** - 这是将发送到主模式遥控器的通道范围。推荐使用通道 10 作为最后一个通道。
  - **PPM 帧** - 第一个字段是 PPM 帧的长度。第二个字段是脉冲之间的停止长度/延迟。下拉菜单用于选择信号的极性。当传输的通道数量更改时，帧长度会自动调整到正确的值。但是，可以手动更改此自动分配的值。_**注意**：在大多数情况下，默认设置_ 不 _需要更改。_
- **主模式 / 蓝牙** - 使用蓝牙连接的主模式（如果遥控器中安装了蓝牙）。
- **从属模式 / 蓝牙** - 使用蓝牙连接的从属模式（如果遥控器中安装了蓝牙）。
- **主模式 / 多协议** - 使用额外安装的外部多协议模块进行连接的主模式。有关此设置的更多信息，请参阅[使用 MPM 设置无线辅助训练](../../../edgetx-how-to/set-up-wireless-trainer-with-mpm.md "mention")

{% hint style="info" %}
有关辅助训练模式的进一步配置设置，请查看遥控器设置下的 [trainer.md](../../radio-settings/trainer.md "mention")
{% endhint %}