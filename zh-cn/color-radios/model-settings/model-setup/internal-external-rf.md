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

1. **Download**: Download the latest EdgeTX firmware for your specific transmitter model from the official EdgeTX website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model setups using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter sticks and switches to ensure accurate control of your model.

### Support

For support and assistance with EdgeTX, visit the official EdgeTX website or join the EdgeTX community forums to connect with other users and developers.

Happy flying with EdgeTX!

# 内置/外置射频

内置和外置射频页面的配置设置方式相同。唯一的区别在于**内置射频**部分用于配置内置模块，而**外置射频**部分用于配置外部模块插槽中的射频模块。

当按钮为黄色时，模型的内置/外置射频模块处于“激活”状态，当按钮为白色时则为“非激活”状态。

<div>

<figure><img src="/.gitbook/assets/internalrf.png" alt=""><figcaption><p>选择多协议模块的内置射频</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/externalrf.png" alt=""><figcaption><p>选择CRSF的外置射频</p></figcaption></figure>

</div>

#### 接收器编号

接收器编号是发送到接收器的模型的用户分配编号。每个模型必须具有唯一的接收器编号。然而，使用不同协议的模型可以具有相同的接收器编号而不会出现问题。EdgeTX会通过编号字段上方的文本告知您接收器编号是唯一的还是已经在使用中。

{% hint style="warning" %}
如果使用游戏手柄模式，应关闭内置和外置射频模块。这将在通过USB连接到计算机时提高性能。&#x20;
{% endhint %}

#### 模式选项

* **关闭** - 不使用射频模块
* **PPM** - 脉冲位置调制，由许多通用JR兼容模块使用。
  * **遥测** - 没有遥测或MLink
  * **通道范围** - 将要使用的通道。
  * **PPM帧** – 帧长度、脉冲长度和PPM帧的极性。当传输的通道数量发生变化时，帧长度会自动调整到正确的值。但是，可以手动更改此自动分配的值。
* **XJT** -&#x20;
  * **协议**- D16、B8、LR2
  * **通道范围** - 将要使用的通道。
  * **失控保护模式** - 仅适用于D16协议。当未接收到发射机信号（信号丢失）时，接收器将使用此设置。
    * **未设置** - 未设置失控保护模式。&#x20;
    * **保持** – 接收器保持通道值为上次从发射机接收到的状态。
    * **无脉冲** – 不输出PWM脉冲。
    * **接收器** – 遵循接收器上配置的失控保护设置。请遵循随接收器附带的说明。
    * **自定义** – 接收器将通道值更改为自定义设置的值。
      * **自定义设置** – 每个通道可以具有自己的设置。选项为值、保持和无脉冲。
  * **接收器编号** - 发送到接收器的模型的用户分配编号
  * **绑定** - 这将使发射机进入绑定模式。在此模式下，发射机每2.5秒发出一声鸣叫声。
  * **范围** - 这将使发射机进入范围检查模式。在此模式下，RSSI值将显示，并且每5秒会发出一声声音。
* **DSM2**
  * **协议** - LP45、DSM2、DSMX
  * **通道范围** - 将要使用的通道。
  * **接收器编号** - 发送到接收器的模型的用户分配编号
  * **绑定** - 这将使发射机进入绑定模式。在此模式下，发射机每2.5秒发出一声鸣叫声。
  * **范围** - 这将使发射机进入范围检查模式。在此模式下，RSSI值将显示，并且每5秒会发出一声声音。
* **CRSF**
  * **波特率** - 发射机模块和无线电手持机通信的速度。
  * **状态** - 显示在发射机模块上配置的数据包无线电。
  * **通道范围** - 将要使用的通道。
  * **接收器编号** - 发送到接收器的模型的用户分配编号
* **Multi** - 多协议模块。每个选择的协议都具有独特的配置选项。有关多协议模块的配置选项，请参阅此处：[https://www.multi-module.org/using-the-module/protocol-options](https://www.multi-module.org/using-the-module/protocol-options)
* **R9M**
  * **模式**- FCC、EU、868MHz、915 MHZ
  * **失控保护模式** - 当未接收到发射机信号（信号丢失）时，接收器将使用此设置。
    * **未设置** - 未设置失控保护模式。&#x20;
    * **保持** – 接收器保持通道值为上次从发射机接收到的状态。
    * **无脉冲** – 不输出PWM脉冲。
    * **接收器** – 遵循接收器上配置的失控保护设置。请遵循随接收器附带的说明。
    * **自定义** – 接收器将通道值更改为自定义设置的值。
      * **自定义设置** – 每个通道可以具有自己的设置。选项为值、保持和无脉冲。
  * **接收器编号** - 发送到接收器的模型的用户分配编号
  * **绑定** - 这将使发射机进入绑定模式。在此模式下，发射机每2.5秒发出一声鸣叫声。
  * **范围** - 这将使发射机进入范围检查模式。在此模式下，RSSI值将显示，并且每5秒会发出一声声音。
  * **射频功率** - 发射机模块的输出功率。选项会根据所选模式而改变。
* **R9M Access    注意：**为了使**R9M ACCESS**模式在模式下拉菜单中可见**，必须在[硬件](../../radio-settings/hardware.md)页面上将AUX1或AUX2串口配置为**外部模块**。&#x20;
  * **通道范围** - 将要使用的通道。
  * **失控保护模式** - 当未接收到发射机信号（信号丢失）时，接收器将使用此设置。
    * **未设置** - 未设置失控保护模式。&#x20;
      * **保持** – 接收器保持通道值为上次从发射机接收到的状态。
      * **无脉冲** – 不输出PWM脉冲。
      * **接收器** – 遵循接收器上配置的失控保护设置。请遵循随接收器附带的说明。
      * **自定义** – 接收器将通道值更改为自定义设置的值。
        * **自定义设置** – 每个通道可以具有自己的设置。选项为值、保持和无脉冲
  * **模块 -** _有关这些配置设置，请参阅FrSky文档_
    * 注册
      * 范围
      * 选项
  * **接收器编号** - 发送到接收器的模型的用户分配编号
  * **绑定** - 这将使发射机进入绑定模式。在此模式下，发射机每2.5秒发出一声鸣叫声。
* **GHST** - ImmersionRC Ghost
  * **通道范围** - 将要使用的通道。
  * **原始12位** - 启用12位模式
* **SBUS**&#x20;
  * **通道范围** - 将要使用的通道。
  * **刷新率** - 刷新速率（毫秒）
    * **反转** - 正常、非反转
* **FLYSKY**&#x20;
  * **协议** - AFHDS3、AFHDS2A
  * **模块状态** - 模块状态
  * **类型** - _有关这些配置设置，请参阅FLYSKY文档_
    * **模块选项**- _有关这些配置设置，请参阅FLYSKY文档_
  * **通道范围** - 将要使用的通道。
  * **失控保护模式** - 当未接收到发射机信号（信号丢失）时，接收器将使用此设置。
    * **未设置** - 未设置失控保护模式。&#x20;
    * **保持** – 接收器保持通道值为上次从发射机接收到的状态。
    * **无脉冲** – 不输出PWM脉冲。
    * **接收器** – 遵循接收器上配置的失控保护设置。请遵循随接收器附带的说明。
    * **自定义** – 接收器将通道值更改为自定义设置的值。
      * **自定义设置** – 每个通道可以具有自己的设置。选项为值、保持和无脉冲。
  * **接收器（编号）** - 发送到接收器的模型的用户分配编号
  * **绑定** - 这将使发射机进入绑定模式。在此模式下，发射机每2.5秒发出一声鸣叫声。
* **LemonRx DSMP**
  * **通道范围** - 将要使用的通道。
  * **绑定** - 这将使发射机进入绑定模式。在此模式下，发射机每2.5秒发出一声鸣叫声。