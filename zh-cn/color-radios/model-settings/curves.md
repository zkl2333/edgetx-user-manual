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

1. **Download**: Download the latest EdgeTX firmware for your RC transmitter model from the official EdgeTX website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model setups using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter sticks and switches to ensure accurate control of your model.

### Support

For support and troubleshooting, visit the EdgeTX website or join the EdgeTX community forums to connect with other users and developers.

### Happy Flying with EdgeTX!

# 曲线

**曲线** 屏幕位于模型设置中，允许您定义自定义曲线以在输入、混合或输出屏幕中使用。曲线屏幕将显示所有配置的自定义曲线，包括每条曲线的图形表示、点数和曲线类型。 &#x20;

<figure><img src="/.gitbook/assets/curve1.png" alt=""><figcaption><p>曲线屏幕</p></figcaption></figure>

选择现有的自定义曲线将显示以下选项：

- **编辑** - 打开曲线配置页面。
- **预设** - 允许您将曲线设置为预设的斜率值之一（-45 到 45 度，每 15 度增量）。 曲线将有 5 个点，并且默认情况下未启用平滑。
- **镜像** - 镜像所选曲线。
- **清除** - 清除所选曲线的所有曲线值。

选择加号按钮以创建新曲线将给出以下选项：

- **编辑** - 打开曲线配置页面。
- **预设** - 允许您将曲线设置为预设的斜率值之一（-45 到 45 度，每 15 度增量）。 曲线将有 5 个点，并且默认情况下未启用平滑。

<figure><img src="/.gitbook/assets/curves2.png" alt=""><figcaption><p>曲线配置屏幕</p></figcaption></figure>

选择**编辑**以配置或未配置的曲线将打开曲线配置屏幕，并显示以下选项：

- **名称** - 曲线名称。仅支持 3 个字符。
- **类型** - 曲线类型：选项为**标准**和**自定义**
  - **标准** - 水平轴点是基于点数的固定值。垂直轴点可调。
  - **自定义** - 水平和垂直轴均可调。
- **点数** - 曲线中的点数
- **平滑** - 启用时，使用曲线连接点而不是直线连接点
- **垂直点值** - 调整点值以制作所需的曲线。

{% hint style="info" %}
黄色显示在曲线上的摇杆位置。移动控制摇杆将实时更新曲线上的摇杆位置。
{% endhint %}