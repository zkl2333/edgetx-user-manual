## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX software and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and flight modes to suit your preferences.
- **Telemetry Support**: Monitor real-time telemetry data from your model while in flight.
- **Cross-platform Compatibility**: EdgeTX is compatible with a wide range of RC transmitters.
- **Open-source Community**: Join a vibrant community of developers and users to share knowledge and resources.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your RC transmitter model from the official website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model setups using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter sticks and switches to ensure accurate control of your model.
5. **Testing**: Perform a range check and flight test to ensure everything is working correctly.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 预启动检查

<figure><img src="/.gitbook/assets/prestart checks.png" alt=""><figcaption><p>预启动检查页面</p></figcaption></figure>

每当加载新模型时，EdgeTX 将根据在此页面上配置的检查进行预飞行检查。如果任何检查失败，EdgeTX 将向用户发出音频和视觉警告，必须在使用模型之前确认。以下是可配置的预飞行检查：

**显示清单** - 选择此选项时，模型注释文件将在加载模型时显示。有效的模型注释文件必须位于 SD 卡上的 **Models** 文件夹中。模型注释文件必须是 .txt 文件，并且必须与其所属模型具有完全相同的名称，例如：Mobula6.txt。文件中的文本由用户决定。

**交互式清单** - 此选项与 **显示清单** 选项一起使用。选择此选项时，清单文件中以 = 开头的任何文本行在显示清单时将显示为复选框。必须通过选择复选框来 **勾选** 所有显示的复选框，以便关闭清单。

**油门状态** - 选择此选项时，无线电将检查油门是否处于 [油门](throttle.md) 菜单中配置的油门源的最小范围值。

**自定义位置？** - 选择此选项时，将显示一个数字框，可配置用户定义的油门状态检查值。&#x20;

**开关** - 此部分显示在无线电上配置的所有开关，并允许您选择哪个位置是开关状态检查的正确位置。选择开关将循环显示可用的开关位置，或完全关闭开关的检查。黄色开关已激活开关位置检查。白色开关已停用。

**旋钮和滑块** - 激活此选项时，将检查旋钮和滑块的位置。有三个选项 - 关闭、开启和自动。从下拉菜单中选择开启或自动时，将显示可用旋钮和滑块的按钮。&#x20;

* **关闭** - 不检查旋钮和滑块位置。
* **开启** - 位置将与手动配置为激活（黄色）的旋钮和滑块位置进行比较。要手动设置检查位置，请从下拉菜单中选择开启，将旋钮和滑块放置在所需位置，并通过选择它们（黄色）激活它们。
* **自动** - 将检查已激活的旋钮和滑块的位置，并与关闭无线电或更改模型之前自动保存的最后位置进行比较。

**中心蜂鸣** - 允许您通过选择它们（黄色）为各个摇杆、旋钮和滑块打开 / 关闭中心蜂鸣功能。&#x20;