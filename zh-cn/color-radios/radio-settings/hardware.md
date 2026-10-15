---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/2n2y0XsJcrhXt3asceP0/color-radios/radio-settings/hardware
---

# 硬件

<figure><img src="/.gitbook/assets/hardware.png" alt=""><figcaption><p>硬件屏幕</p></figcaption></figure>

**硬件** 屏幕是配置遥控器硬件特定设置的地方。它包含以下配置选项：

**电池电量计范围** - 设置电池电量计的最大和最小电压。这应该根据您使用的电池类型进行设置。

**电池校准** - 设置此值以匹配遥控器电池电压。

**检查 RTC 电压** - 启用后，在启动时检查 RTC 电池，并在电池电压低时警告您。

{% hint style="info" %}
开关旁边显示的数值是 RTC 电池的当前电压。为了使读数更准确，测量时会给电池加上一个小负载，这可能导致每个测量周期的数值开始波动或“抖动”。如果抖动过大，可能表明电池电量即将耗尽。
{% endhint %}

**ADC 滤波器** - 启用或禁用 ADC 滤波器。此滤波器也可以在模型设置中按模型启用/禁用。

{% hint style="info" %}
ADC 滤波器是用于比例通道（摇杆、旋钮、滑块）的滤波器，平滑由于系统电子噪声引起的较小快速运动。通常，对于具有飞行控制器的模型，此滤波器应_禁用_。
{% endhint %}

**无声模式：-** 启用后，将遥控器置于静音模式，直到需要播放声音。这可以防止高功率 TX 模块的干扰噪声从遥控器扬声器中发出。

### **内部 RF 类型**

选择内部模块槽的模块类型。选项有：**Multi, XJT, ISRM, CRSF**。选择 **CRSF** 时，您还可以选择波特率。您可以在[这里](https://www.expresslrs.org/2.0/quick-start/transmitters/tx-prep/)阅读更多关于波特率的信息。

**Antenna（天线）**（部分遥控器）- 在可切换内置/外置天线的遥控器上，设置所使用的天线。选项有 **Internal**（内置）、**Ask**（启动时询问）、**Per model**（在每个模型的[内置 / 外接 RF](../model-settings/model-setup/internal-external-rf.md)页面中单独配置）、**Internal + External**（内置 + 外置）和 **External**（外置）。

### **外部 RF 采样模式**

选项为 Normal 和 OneBit。大多数用户应使用默认设置 **Normal**。只有 X9D+ 和 X7 遥控器的用户可能希望使用 **OneBit** 模式。

{% hint style="info" %}
X9D+ 和 X7 遥控器具有一个慢速逆变器，这会导致接收快速 UART 信号时出现问题，从而导致遥测警告和使用 CRSF 协议的 LUA 脚本问题。可以更换电路板上的一个 10k 电阻来解决问题，但这并不总是有效。EdgeTX 开发了 OneBit 模式，该模式改变了 UART 采样行为以忽略慢速前沿，从而允许 CRSF 协议在不对遥控器进行硬件修改的情况下以完整的 400k 波特率运行。
{% endhint %}

### **蓝牙**

{% hint style="info" %}
_**注意：** 此选项仅在启用了 **Bluetooth** 标志的自定义编译版本的 EdgeTX 中可见。_
{% endhint %}

**模式 - 蓝牙模块将使用的模式。选项有：**

* **---** - 关闭
* **Telemetry** - 用于通过蓝牙发送遥测数据。
* **Trainer** - 用于蓝牙训练模式

**名称 -** 蓝牙设备将显示的名称。

**设置齿轮图标** - 选择后将显示：

* **PIN 码** - 遥控器中蓝牙设备的 PIN 码（仅在 **Telemetry** 模式下可见）
* **本地地址 -** 遥控器中蓝牙设备的识别地址。
* **远程地址 -** 遥控器连接的蓝牙设备的识别地址。

### **串行端口**&#x20;

显示可配置和使用的可用辅助串行端口列表。列出的端口基于特定遥控器硬件中可用的端口。以下列出的端口仅为示例，可能在您的遥控器中不存在。

* **AUX1** - 第一个可用的辅助串行端口可以配置以下选项：
  * **关闭** - 关闭。
  * **遥测镜像** - 发送到外部模块槽的相同遥测数据也发送到串行端口。&#x20;
  * **遥测输入** - 通过串行端口接收遥测数据。
  * **SBUS 训练器** - 通过串行端口连接教练和学生遥控器。
  * **SBUS Trn Inv.**（部分遥控器）- 与 SBUS 教练相同，但信号极性反转，适用于需要反相信号的硬件。并非所有遥控器都提供。
  * **LUA** - 发送/接收数据到/从 Lua 脚本。
  * **GPS** - 通过串行端口接收 GPS 遥测数据。
  * **CLI** - 通过命令行向遥控器发送命令。&#x20;
  * **外部模块** - 这允许在运行时而不是通过编译选项配置外部访问模块。首先，配置硬件端口（仅在 `AUX1` 上可用，因为 `AUX2` 没有 TX DMA）\
      [![Screenshot 2022-10-15 at 20 46 59](https://user-images.githubusercontent.com/1050031/196003113-a1e4a38e-c007-4b49-b691-d806ff5e7600.png)](https://user-images.githubusercontent.com/1050031/196003113-a1e4a38e-c007-4b49-b691-d806ff5e7600.png)

      然后可以选择模块：\
      [![Screenshot 2022-10-15 at 20 47 42](https://user-images.githubusercontent.com/1050031/196003145-41fd9f94-22b6-4646-b77a-ade379d15965.png)](https://user-images.githubusercontent.com/1050031/196003145-41fd9f94-22b6-4646-b77a-ade379d15965.png)
  * **AUX2** - 第二个可用的辅助串行端口（取决于硬件），具有与 AUX1 相同的选项，除了外部模块&#x20;
  * **USB-VCP** - 虚拟 COM 端口。这是将遥控器连接到大多数遥控器的 PC 时提供的选项之一。通常设置为 'CLI' 以便对具有内部 ExpressLRS RF 模块的遥控器进行固件更新。

{% hint style="warning" %}
AUX 串行端口的 TX/RX 引脚电压请勿超过 3.3V——硬件屏幕上每个 AUX 端口（USB-VCP 除外）下方都会显示此警告。
{% endhint %}

* **端口电源** - 启用或禁用某些遥控器上串行端口旁边的电源引脚的电源输出（目前只有 TX16S 具有此功能）。

### 输入

**校准** - 用于校准您的物理遥控器控制（摇杆、旋钮、滑块和6位开关）。遥控器将提示您完成校准步骤。

{% hint style="info" %}
对于您的云台/轴校准，使用从左到右和从上到下的运动，而不是圆周运动！此外，在端点使用正常的压力。过大的端点压力会导致云台/轴校准错误。
{% endhint %}

{% hint style="info" %}
如果您的遥控器有6位开关（不要与可自定义开关混淆 - 这些不需要校准），校准此开关的步骤是：在提示校准摇杆/轴、旋钮和滑块等模拟输入时，从左到右依次按下每个按钮，每次按下之间暂停一秒钟。
{% endhint %}

#### 轴、旋钮和开关按钮

<div><figure><img src="/.gitbook/assets/Axis.png" alt=""><figcaption></figcaption></figure> <figure><img src="/.gitbook/assets/color_radio_hardware_pots.png" alt=""><figcaption></figcaption></figure> <figure><img src="/.gitbook/assets/Switches.png" alt=""><figcaption></figcaption></figure></div>

选择轴、旋钮或开关按钮之一将打开配置屏幕。在这些屏幕上，您将看到 EdgeTX 预定义的所有物理遥控器控制。在这里，您可以为控制添加一个 3 个字符的标签，并根据需要更改控制类型。此外，列在旋钮屏幕下的控制也可以配置为反转。

**可自定义开关**（部分遥控器）- 打开适用于整个遥控器的可自定义开关配置屏幕，类似于按模型配置的[可自定义开关](../model-settings/model-setup/customizable-switches.md)页面。仅在具有可自定义开关硬件的遥控器上显示。

### 调试

<div><figure><img src="/.gitbook/assets/hardware4.png" alt=""><figcaption><p>模拟调试屏幕</p></figcaption></figure> <figure><img src="/.gitbook/assets/hardware5.jpg" alt=""><figcaption><p>开关测试屏幕</p></figcaption></figure></div>

调试部分允许测试和调试模拟控制和按键。

**模拟** - 这些屏幕将显示您的模拟控制（摇杆、滑块、旋钮、6 位开关）和遥控器上的触摸屏的数据。有四种视图 - 校准的模拟、带偏差的过滤原始模拟、未过滤的原始模拟，以及最小最大和范围。&#x20;

**按键** - 此屏幕将显示您的按键、开关、微调和旋转编码器（滚轮）的数字数据。

**可自定义开关**（部分遥控器）- 显示可自定义开关的物理和逻辑状态，以及 LED 状态或颜色（如果手持设备支持 RGB 可自定义开关）。仅在具有可自定义开关硬件的遥控器上显示。
