## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and flight modes to suit your preferences.
- **Telemetry Support**: Monitor real-time telemetry data from your model while in flight.
- **Cross-platform Compatibility**: EdgeTX is compatible with a wide range of RC transmitters, including those from popular brands like FrSky and Jumper.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your specific transmitter model from the official EdgeTX website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model setups using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter sticks and switches to ensure accurate control of your model.

### Conclusion

EdgeTX is a powerful firmware that offers flexibility and advanced features for your radio-controlled models. Explore the possibilities with EdgeTX and take your RC experience to the next level!

---
description: 通用模型设置
---

# 模型设置

<div align="center">

<figure><img src="/.gitbook/assets/modelsetup.png" alt=""><figcaption><p>模型设置选项卡下的模型设置</p></figcaption></figure>

</div>

**模型设置** 页面是模型设置的默认页面，也是您开始配置模型的地方。它包含以下设置：

#### 模型名称

输入模型的所需名称。字符数不得超过15个。

#### 标签

在此处，您可以从定义的标签列表中分配一个标签。默认情况下，模型标签将为**未标记**。有关创建标签的更多信息，请参阅[select-model.md](../../select-model.md)页面。

#### 模型图像

当选择文件夹图标时，将弹出一个窗口，允许您从SD卡上的图像文件夹中选择图像文件。

{% hint style="info" %}
为避免性能问题，模型图像大小不应超过192 x 114像素。有关模型图像要求的更多信息，请参阅[SD卡](../../radio-settings/sd-card.md)部分中的**图像**部分。
{% endhint %}

{% hint style="info" %}
[https://www.skyraccoon.com/](https://www.skyraccoon.com/)有一个大型的免费图像文件库，可与EdgeTX一起使用。
{% endhint %}

#### ADC 滤波器

为此模型启用/禁用ADC滤波器。_**全局**_选项将采用默认情况下为_on_的无线电设置中指定的值。

{% hint style="info" %}
ADC滤波器是用于比例通道（摇杆、旋钮、滑块）的滤波器，平滑系统电子设备中由于噪音而发生的较小快速运动。通常，对于带有飞行控制器的模型，此滤波器应为_禁用_。
{% endhint %}

{% hint style="info" %}
启用的计时器将在模型设置屏幕上显示为突出显示。
{% endhint %}