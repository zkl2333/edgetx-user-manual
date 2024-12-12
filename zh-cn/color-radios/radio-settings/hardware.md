## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware with additional features and improvements.

### Features

- Intuitive user interface
- Support for a wide range of radio-controlled models
- Customizable themes and sound packs
- Advanced flight controller system integration

### Getting Started

To install EdgeTX on your radio transmitter, follow these steps:

1. Download the latest EdgeTX firmware from the official website.
2. Connect your radio transmitter to your computer using a USB cable.
3. Flash the EdgeTX firmware to your radio transmitter using a firmware flashing tool.

### Configuration

After installing EdgeTX, you can configure your radio transmitter settings using the built-in menu system. Customize your model setups, flight modes, and other preferences to suit your needs.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 硬件

<figure><img src="/.gitbook/assets/hardware.png" alt=""><figcaption><p>硬件屏幕</p></figcaption></figure>

**硬件** 屏幕是您配置无线电硬件特定设置的地方。它包含以下配置选项：

**电池仪表范围** - 设置电池仪表的最大和最小电压。这应根据您使用的电池类型进行设置。

**电池校准** - 将此值设置为与发射机电池电压相匹配。

**检查RTC电压** - 启用时，在启动时检查RTC电池并在电池电压过低时发出警告。

**ADC滤波器** - 启用或禁用ADC滤波器。此滤波器也可以在模型设置中针对每个模型启用/禁用。

{% hint style="info" %}
ADC滤波器是用于比例通道（摇杆、旋钮、滑块）的滤波器，平滑系统电子设备中由于噪声而产生的较小快速运动。通常，对于带有飞行控制器的模型，此滤波器应该被禁用。
{% endhint %}

**无声时静音：-** 启用后，将发射机置于静音模式，直到需要播放声音。这可以防止高功率TX模块的干扰噪音从发射机扬声器中传出。

### **内部RF类型**

选择内部模块插槽的模块类型。选项包括：**Multi, XJT, ISRM, CRSF**。选择 **CRSF** 后，还可以选择波特率。您可以在[此处](https://www.expresslrs.org/2.0/quick-start/transmitters/tx-prep/)了解有关波特率的更多信息。

### **外部RF采样模式**

选项为Normal和OneBit。大多数用户应使用默认设置的 **Normal**。只有X9D+和X7无线电的用户可能希望使用 **OneBit** 模式。

{% hint style="info" %}
X9D+和X7无线电具有慢反相器，导致接收快速UART信号时出现问题，导致遥测警告和使用CRSF协议的LUA脚本出现问题。电路板上的10k电阻可能被更换以修复问题，但这并不总是有效。EdgeTX开发了OneBit模式，它改变了UART采样行为以忽略慢上升沿，允许CRSF协议以完整的400k波特率运行，而无需对无线电进行硬件修改。
{% endhint %}

### **蓝牙**

{% hint style="info" %}
_**注意：**此选项仅在启用了**蓝牙**标志的EdgeTX自定义编译版本中可见。_
{% endhint %}

**模式 - 蓝牙模块将使用的模式。选项包括：**

* **---** - 关闭
* **遥测** - 用于通过蓝牙发送遥测数据。
* **训练器** - 用于蓝牙训练模式

**名称 -** 蓝牙设备将显示为的名称。

**设置齿轮图标** - 选择后将显示：

* **PIN码** - 无线电中蓝牙设备的PIN码（仅在**遥测**模式下可见）
* **本地地址 -** 无线电中蓝牙设备的标识地址。
* **远程地址 -** 无线电连接到的蓝牙设备的标识地址。

### **串口**

显示可配置和使用的可用辅助串口列表。所列端口基于特定无线电硬件中可用的端口。下面列出的端口仅为示例，可能不会出现在您的无线电中。

* **AUX1** - 可配置的第一个可用辅助串口，可使用以下选项配置：
  * **关闭** - 关闭。
  * **遥测镜像** - 发送到外部模块插槽的相同遥测数据通过串口发送。
  * **遥测输入** - 通过串口接收遥测数据。
  * **SBUS训练器** - 通过串口连接教练机和学生机。
  * **LUA** - 与Lua脚本发送/接收数据。
  * **GPS** - 通过串口接收GPS遥测数据。
  * **CLI** - 通过命令行向无线电发送命令。
  * **外部模块** - 这允许在运行时配置外部访问模块，而不是通过编译选项。首先配置硬件端口（仅在`AUX1`上可用，因为`AUX2`没有TX DMA）\
      [![Screenshot 2022-10-15 at 20 46 59](https://user-images.githubusercontent.com/1050031/196003113-a1e4a38e-c007-4b49-b691-d806ff5e7600.png)](https://user-images.githubusercontent.com/1050031/196003113-a1e4a38e-c007-4b49-b691-d806ff5e7600.png)

      然后可以选择模块：\
      [![Screenshot 2022-10-15 at 20 47 42](https://user-images.githubusercontent.com/1050031/196003145-41fd9f94-22b6-4646-b77a-ade379d15965.png)](https://user-images.githubusercontent.com/1050031/196003145-41fd9f94-22b6-4646-b77a-ade379d15965.png)
  * **AUX2** - 第二个可用的辅助串口（取决于硬件），具有与AUX1相同的选项，但不包括外部模块。
  * **USB-VCP** - 虚拟COM端口。连接大多数无线电到PC时显示的选项之一。通常对于带有内部ExpressLRS RF模块的无线电设置为“CLI”，以进行固件更新。
* **端口电源** - 启用或禁用一些无线电上可用的串口旁边的电源输出引脚上的电源输出（目前只有TX16S具有此功能）。

### 输入

**校准** - 用于校准您的物理无线电控件（摇杆、旋钮、滑块和6位开关）。无线电将引导您完成校准步骤。

{% hint style="info" %}
对于您的万向节校准，请使用左右和上下移动进行校准，而不是进行圆形运动！此外，使用端点处的正常压力。过大的端点压力会导致万向节校准错误。还不要忘记校准您的6位开关！
{% endhint %}

#### 轴、旋钮和开关按钮

<div>

<figure><img src="/.gitbook/assets/Axis.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="/.gitbook/assets/Pots.png" alt=""><figcaption></figcaption></figure>

 

<figure><img src="/.gitbook/assets/Switches.png" alt=""><figcaption></figcaption></figure>

</div>

选择轴、旋钮或开关按钮之一将打开配置屏幕。在这些屏幕上，您将看到EdgeTX预定义的所有物理无线电控件。在这里，您可以为控件添加一个3字符标签，并根据需要更改控件类型。此外，在旋钮屏幕下列出的控件也可以配置为反转。

### 调试

<div>

<figure><img src="/.gitbook/assets/hardware4.png" alt=""><figcaption><p>模拟调试屏幕</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/hardware5 (1).jpg" alt=""><figcaption><p>开关测试屏幕</p></figcaption></figure>

</div>

调试部分允许测试和调试模拟控件和按键。

**模拟**  - 这些屏幕将显示您的模拟控件（摇杆、滑块、旋钮、6位开关）和无线电触摸屏的数据。有四个视图 - 校准的模拟、带偏差的滤波原始模拟、未经滤波的原始模拟和最小值、最大值和范围。 

**按键** - 此屏幕将显示您的按键、开关、微调和旋转编码器（滚轮）的数字数据。