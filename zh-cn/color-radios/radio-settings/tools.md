## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface that is easy to navigate.
- **Customizable**: You can customize almost every aspect of your transmitter's settings to suit your preferences.
- **Cross-platform**: EdgeTX is compatible with multiple hardware platforms, giving you flexibility in choosing your hardware.
- **Open Source**: Being open-source, EdgeTX allows for community contributions and continuous improvement.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your transmitter model from the official website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings using the intuitive interface provided by EdgeTX.
4. **Calibration**: Calibrate your transmitter controls to ensure accurate operation.

### Support

For support and community interaction, visit the EdgeTX website and forums. Join the community to stay updated on the latest developments, share your experiences, and get help from other users.

### Conclusion

Enjoy using EdgeTX for your radio-controlled models and explore the endless possibilities it offers for customization and control.

# 工具

<figure><img src="/.gitbook/assets/tools.jpg" alt=""><figcaption><p>工具页面</p></figcaption></figure>

在无线电设置中的**工具**页面是您可以选择基于Lua脚本的工具进行执行的地方。位于SD卡上**工具**文件夹中的Lua脚本将在此处列出。选择一个工具将在全屏模式下执行它。默认情况下，EdgeTX 包含几个工具。其他工具也可以下载并添加到SD卡中。以下工具包含在默认的EdgeTX SD卡中。

#### 模型定位器（通过RSSI）

<figure><img src="/.gitbook/assets/rssi.jpg" alt=""><figcaption><p>模型定位器工具</p></figcaption></figure>

模型定位器工具可帮助根据RSSI（如果仍然可用）找到丢失的模型。该小部件会产生一个音频表示（变高仪样式）来自丢失模型的RSSI。该小部件还会显示可见的着色条形RSSI（0-100%）。

#### 频谱（INT）

<figure><img src="/.gitbook/assets/spectrum-int.jpg" alt=""><figcaption><p>频谱分析仪（INT）工具</p></figcaption></figure>

频谱分析仪工具将显示2.4GHz频段中信号的强度。它使用内部MULTI-Module作为2.4GHz频谱分析仪。

显示显示2.4GHz频谱上的频率，从2400MHz到2480MHz。X（水平）轴显示MHz中的频率，Y（垂直）轴显示相对信号强度。

**T:** 绘图中心的频率（固定在2440MHz）\
**S:** 绘图的带宽（固定在80MHz）\
**T:** 光标的位置（垂直线）

按下**ENT**并左右滚动允许更改**T**值，这将移动垂直线以突出显示特定频率。

#### 向导加载器

<div>

<figure><img src="/.gitbook/assets/wizard1.jpg" alt=""><figcaption><p>向导加载器工具</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/wizard2.jpg" alt=""><figcaption><p>飞机向导</p></figcaption></figure>

</div>

向导加载器工具通过运行特定模型类型的设置向导来帮助您设置新模型。选择模型类型后，向导将引导您完成一系列提示，然后根据提供的信息配置您选择的模型。

_**注意：该向导不会创建新模型，它只会配置当前选择的模型。您必须手动先创建一个新模型，然后运行该向导。如果您在已配置的模型上运行此向导，它将覆盖您的模型设置！**_

{% hint style="info" %}
可从以下链接下载其他EdgeTX兼容的Lua脚本：[https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts)
{% endhint %}