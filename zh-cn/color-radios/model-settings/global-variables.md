## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and flight modes to suit your preferences.
- **Telemetry Support**: Monitor real-time telemetry data from your model while in flight.
- **Cross-platform Compatibility**: EdgeTX is compatible with a wide range of RC transmitters, including those from FrSky, Jumper, and RadioMaster.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download EdgeTX**: Visit the EdgeTX website to download the latest firmware for your transmitter model.
2. **Install Firmware**: Follow the instructions on the website to install EdgeTX on your transmitter.
3. **Configure Settings**: Use the intuitive interface to configure your transmitter settings and flight modes.
4. **Calibrate Sensors**: Calibrate your transmitter sensors to ensure accurate flight controls.
5. **Enjoy Flying**: Once everything is set up, enjoy flying your model with EdgeTX!

### Support

For support and troubleshooting, visit the EdgeTX website or join the community forums to connect with other users and developers.

Happy flying with EdgeTX!

# 全局变量

全局变量是其值在模型的所有配置屏幕中共享的变量。它们的值可以用于权重、偏移、差分、曲线设置、输出以及逻辑开关比较。**全局变量**屏幕在模型设置中显示每个飞行模式的每个全局变量的值。

<figure><img src="/.gitbook/assets/globalvariables1.png" alt=""><figcaption><p>全局变量屏幕</p></figcaption></figure>

从全局变量屏幕中选择一个全局变量将给您以下选项：

- **编辑** - 打开所选全局变量的全局变量配置屏幕。
- **清除** - 清除所选全局变量的所有飞行模式的全局变量值。

<figure><img src="/.gitbook/assets/GVE.png" alt=""><figcaption><p>全局变量配置屏幕。</p></figcaption></figure>

全局变量配置屏幕是您为全局变量分配值和其他配置选项的地方。此外，您可以选择全局变量的值如何为每个飞行模式定义 - 要么值是手动定义的，要么从另一个选定的飞行模式继承。它包含以下配置选项：

- **名称** - 全局变量的名称。允许三个字符。如果留空，将使用默认的GV#作为名称。
- **单位** - （可选）允许您在选择时向显示的值添加**%**标签。它不会影响值的计算方式。
- **精度** - 允许您选择数字精度选项整数（**0.-**）和小数（**0.0**）。默认值为**0.-**
- **最小** - 定义全局变量允许的最小值。
- **最大** - 定义全局变量允许的最大值。
- **弹出窗口 -** 启用时，当GV的值发生变化时，将显示一个弹出消息，显示新的GV值（见下图）。
- **FM0** - 飞行模式0上的全局变量值。
- **FM1 -> FM8** - 当切换开关启用或禁用时，以下内容适用：
  - 切换开关禁用 - 所选飞行模式的全局变量值从下拉列表中定义的飞行模式继承。
  - 切换开关启用（高亮显示） - 所选飞行模式的全局变量值在文本字段中手动定义。

<figure><img src="/.gitbook/assets/GVE2.png" alt=""><figcaption><p>全局变量更改的弹出消息</p></figcaption></figure>