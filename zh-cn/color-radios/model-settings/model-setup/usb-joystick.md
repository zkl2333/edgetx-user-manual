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

Thank you for choosing EdgeTX! Happy flying!

# USB手柄

USB手柄有两种可能的模式，**经典**和**高级**。

<figure><img src="/.gitbook/assets/usbjoystick1.png" alt=""><figcaption><p>USB手柄经典模式</p></figcaption></figure>

在**经典模式**下，无线电配置的输出通道将按照数字顺序发送到目标设备，并映射到设备预配置的USB控制器轴和按钮。以下是Microsoft Windows的默认通道映射。

{% hint style="info" %}
如果将无线电用作USB手柄，则内部和外部射频模块都应该关闭。当配置为此时，混频器在手柄模式下运行时会以1000Hz运行（这对于F.Sim竞争者是必需的）。此外，它还会在统计/调试屏幕中显示混频器运行时间。这将导致连接到计算机时性能提高。
{% endhint %}

* Ch1 - X轴
* Ch2 - Y轴
* Ch3 - Z轴
* Ch4 - X旋转
* Ch5 - Y旋转
* Ch6 - Z旋转
* Ch7 - 拨号
* Ch8 - 滑块
* CH9 - CH32 - 按钮1 - 24

<figure><img src="/.gitbook/assets/usbjoystick.png" alt=""><figcaption><p>USB手柄高级模式</p></figcaption></figure>

在**高级模式**下，您可以配置以下选项：

**接口模式：** 这指示目标设备（您将无线电连接到的设备）您正在连接的设备类型。选项有**手柄**，**游戏手柄**，**多轴**。

{% hint style="info" %}
**注意：** 目前在MS Windows中存在一个限制，可能会限制您的无线电只能被检测为手柄，无论在此选项中选择了什么。在MacOS、Linux和Android中，此功能正常。
{% endhint %}

**圆形切割**：对于轴对（X-Y，Z-rX）：默认情况下，轴对的范围是一个矩形区域。使用此选项，轴将被限制在一个圆形区域内（就像游戏手柄控制器通常是的）。选项有：**无** 或 **X-Y，Z-rX** 或 **X-Y，rX-rY** 或 **X-Y，Z-rZ**

**输出通道1-32**

**模式：** 对于每个输出通道，您可以选择要为该通道使用的模式。可用选项为**无**，**按钮**，**轴**，**模拟**。

**无** - 通道未使用

<figure><img src="/.gitbook/assets/usbjoystick2.png" alt=""><figcaption><p>所选通道的按钮模式选项</p></figcaption></figure>

**按钮** - 通道用于模拟按钮。配置选项包括：

* **反转** - 反转输出通道信号。选项为：**开** / **关**
* **按钮模式** -
  * **正常** - 多位置开关的每个位置都由一个按钮表示。当前开关状态由连续按钮按压表示。
  * **脉冲** - 类似于“正常”模式。但是，与连续按钮按压不同，它由短暂按钮按压表示。
  * **SWEmu** - 切换开关模拟按键。第一次按下打开虚拟按钮，第二次按下关闭它。
  * **Delta** - 输出通道的变化由2个按钮表示。当输出值减少时，按下第一个按钮。当输出值增加时，按下第二个按钮。如果没有变化，则不会按下任何按钮。
  * **Companion** - 在使用您的无线电控制EdgeTX Companion模拟器时应选择此选项。它允许多位置开关在模拟器中正常工作。
* **位置** - 将模拟的按钮类型。
  * **按压** - 仅映射到一个按钮
  * **2POS - 8 POS** - 将映射到开关具有的按钮数量（例如：3POS将映射到3个按钮）。
* **按钮编号：** 输出将映射到并发送到目标设备的按钮编号。

<figure><img src="/.gitbook/assets/usbjoystick3.png" alt=""><figcaption><p>所选通道的轴模式选项</p></figcaption></figure>

**轴 -** 通道用于模拟轴，并将映射到目标设备的默认轴之一。

* 轴选项为：X，Y，Z，rotX（旋转X），rotY，rotZ

<figure><img src="/.gitbook/assets/usbjoystick4.png" alt=""><figcaption><p>所选通道的模拟模式选项</p></figcaption></figure>

**模拟 -** 通道用于模拟常见的模拟轴，并将在目标设备上列出为所选选项（例如：Thr）

* 模拟轴选项为：**Ail**，**Ele**，**Rud**，**Thr**，**Acc**，**Brk**，**Steer**，**Dpad**