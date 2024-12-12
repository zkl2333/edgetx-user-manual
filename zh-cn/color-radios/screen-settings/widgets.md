## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and model configurations to suit your preferences.
- **Cross-platform Support**: EdgeTX is compatible with various radio transmitter hardware.
- **Open Source**: EdgeTX is open-source, allowing for community contributions and continuous improvement.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your specific radio transmitter model from the official EdgeTX website.
2. **Installation**: Follow the installation instructions provided on the website to flash the EdgeTX firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model configurations using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter controls and sensors to ensure accurate operation.

### Support

For support and assistance with EdgeTX, visit the official EdgeTX website or join the EdgeTX community forums to connect with other users and developers.

Thank you for choosing EdgeTX for your radio-controlled model needs!

# 小部件

{% hint style="info" %}
设置小部件后，长按小部件将显示两个菜单选项：**全屏**和**小部件**设置。对于某些小部件，全屏模式将提供额外功能。要退出全屏模式，请长按 RTN / 返回按钮。
{% endhint %}

以下是包含在 EdgeTX 中的小部件的描述和配置选项。

### 电池模拟

<figure><img src="/.gitbook/assets/wid_battanal.png" alt=""><figcaption><p>电池模拟小部件</p></figcaption></figure>

显示 Lipo/Li-ion 电池的充电水平的图形表示。它将自动检测电池的单体数量。它适用于仅接收总电池电压的遥测。可配置的选项包括：

* **传感器** - 用于电池电压的传感器。
* **颜色** - 打开颜色选择器以选择文本的颜色。
* **显示总电压** - 启用时显示总电池电压（而不是计算的单体电压）。
* **锂离子** - 启用时，将调整用于计算剩余电池百分比的最低电池电压从 3.0 调整到 2.8。

### 电池检查

<figure><img src="/.gitbook/assets/wid_battcheck.png" alt=""><figcaption><p>电池检查小部件</p></figcaption></figure>

显示 Lipo/Li-ion 电池的充电水平的图形表示。它适用于接收单体电压的遥测，例如 FLVSS 锂电压传感器。可配置的选项包括：

* **传感器** - 用于电池电压的传感器。
* **颜色** - 打开颜色选择器以选择文本的颜色。
* **阴影** - 启用时，向文本添加阴影。
* **最低单体** - 启用时，仅显示最低单体的电压（而不是显示所有单体电压）。
* **锂离子** - 启用时，将调整用于计算剩余电池百分比的最低电池电压从 3.0 调整到 2.8。

### 计数器

<figure><img src="/.gitbook/assets/wid_counter.png" alt=""><figcaption><p>计数器小部件</p></figcaption></figure>

逐渐计数的计数器。可配置的选项包括：

* **颜色** - 打开颜色选择器以选择文本的颜色。
* **阴影** - 启用时，向文本添加阴影。

### **事件演示**

<div>

<figure><img src="/.gitbook/assets/widgets5.jpg" alt=""><figcaption><p>计数器和事件演示小部件</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/widgets6.jpg" alt=""><figcaption><p>事件演示小部件全屏</p></figcaption></figure>

</div>

演示全屏模式下按键和触摸事件的处理。仅用于演示目的。可配置的选项包括：

* **大小** - 更改全屏模式中框的大小。

### **飞行次数**

<figure><img src="/.gitbook/assets/wid_flights.png" alt=""><figcaption><p>飞行次数小部件</p></figcaption></figure>

计算您的飞行次数。它会在飞行开始、结束以及模型的总飞行次数时给出语音提示。

可配置的选项包括：

* **开关** - 指定的武装/安全开关。
* **电机通道** - 电机的通道。
* **最短飞行持续时间** - 飞行被计数的最短飞行持续时间。
* **文本颜色** - 打开颜色选择器以选择文本的颜色。
* **调试** - 启用时，在小部件上显示状态信息。

_**关于此小部件的附加说明：**_

如果在 30 秒后引擎超过 25%、遥测激活（表示模型已连接）且安全开关打开，则飞行被视为成功。如果电池断开连接 8 秒后（通过无遥测检测），则飞行被视为结束 -- 警告：如果模型使用 GV9（GV9 FM0 是存储飞行次数的地方），请勿使用此小部件！

该小部件假定以下情况：模型有一个电机，电机在通道 3 上激活（可以在设置中配置），有一个带有以下之一的遥测 \[RSSI|RxBt|A1|A2|1RSS|2RSS|RQly]，有一个安全开关（武装开关），全局变量 GV9 是空闲的（即未使用）。

### 计量表

<figure><img src="/.gitbook/assets/wid_gauge (1).png" alt=""><figcaption><p>计量表小部件</p></figcaption></figure>

显示源值的条形图。可配置的选项包括：

* **源** - 计量表的来源。
* **最小** - 计量表的最小值。此值将为 0%。
* **最大** - 计量表的最大值。此值将为 100%。
* **颜色** - 打开颜色选择器以选择计量表文本和条的颜色。

### **旋转计量表**

<figure><img src="/.gitbook/assets/wid_gaugerotary.png" alt=""><figcaption><p>旋转计量表小部件</p></figcaption></figure>

可配置的模拟样式计量表，带有指针。还显示了计量表读取的最小和最大值，绿色和红色指针。可配置的选项包括：

* **源** - 计量表的来源。
* **最小** - 计量表的最小值。
* **最大** - 计量表的最大值。
* **高值为绿色** - 对于高值为好的传感器启用。对于低值为好的传感器禁用。
* **精度** - 要在小数点后显示的数字值的精度。

### **幽灵**

<figure><img src="/.gitbook/assets/wid_ghost.jpg" alt=""><figcaption><p>幽灵小部件普通模式和 VTX 模式</p></figcaption></figure>

幽灵小部件将根据配置的模式显示 RF 接收器或视频发射器的遥测数据。

在普通模式下，小部件提供 RF 模式（RFMD）、帧速率（FRATE）、链路质量（RQLY）和发送功率（TPWR）

在视频模式下，小部件提供视频频段（VBAN）、视频频率（VFRQ）、视频通道（VCHAN）和视频功率（VPWR）

### **LibGUI 演示**

<figure><img src="/.gitbook/assets/wid_libgui.jpg" alt=""><figcaption><p>LibGUI 演示小部件</p></figcaption></figure>

此小部件是 LibGUI 库的演示。该库通常不会单独运行。相反，它为使用它的其他 Lua 脚本提供交互功能。必须在全屏模式下运行小部件以演示库的功能。

### **模型信息**

<figure><img src="/.gitbook/assets/wid_modelinfo (1).png" alt=""><figcaption><p>模型信息小部件</p></figcaption></figure>

显示所选模型的名称和图片（如果在模型设置中配置）。可配置的选项包括：

* **颜色** - 打开颜色选择器以选择名称文本的颜色。
* **大小** - 名称文本的大小。选项为 STD（默认）、BOLD、XXS、XS、L、XL、XXL
* **填充背景？** - 启用时，向小部件添加实心背景颜色
* **背景颜色** - 打开颜色选择器以选择背景的颜色。
* **使用主题颜色** - 启用时，将文本颜色覆盖为配置的主题文本颜色。

### **输出**

<figure><img src="/.gitbook/assets/wid_outputs.png" alt=""><figcaption><p>输出小部件</p></figcaption></figure>

以条形图显示通道输出值。显示的通道数量取决于小部件的大小。可配置的选项包括：

* **第一个通道** - 选择要在小部件中显示的第一个通道。
* **填充背景** - 启用时，向小部件添加实心背景颜色
* **背景颜色** - 打开颜色选择器以选择背景的颜色。
* **文本颜色** - 打开颜色选择器以选择文本的颜色。
* **颜色** - 打开颜色选择器以选择输出条的颜色。

### 串行电源端口演示

<figure><img src="/.gitbook/assets/wid_serialpower.png" alt=""><figcaption><p>串行电源端口演示小部件</p></figcaption></figure>

演示小部件，显示电源端口的使用方式。必须在全屏模式下运行。

### **SOARETX**

<figure><img src="/.gitbook/assets/wid_soaretx.jpg" alt=""><figcaption><p>SoarETX 小部件</p></figcaption></figure>

EdgeTX 版本的 SoarOTX 工具。这是 EdgeTX 发射机的滑翔机模型包。它提供了用于计时和记分、日志数据图形化（例如高度图）和模型配置的 Lua 脚本。

有关此小部件的配置和使用的更多信息，请参阅 [https://github.com/jfrickmann/SoarOTX/wiki/SoarETX-for-color-radios](https://github.com/jfrickmann/SoarOTX/wiki/SoarETX-for-color-radios)。

可以在此处观看此工具的演示：[https://www.youtube.com/watch?v=5NSvxUNKM\_c](https://www.youtube.com/watch?v=5NSvxUNKM\_c)

### **文本**

<figure><img src="/.gitbook/assets/wid_text.png" alt=""><figcaption><p>文本小部件</p></figcaption></figure>

显示用户可自定义的文本字段。可配置的选项包括：

* **文本** - 要显示的文本
* **颜色** - 打开颜色选择器以选择文本的颜色。
* **大小** - 文本的大小。选项为 STD（默认）、BOLD、XXS、XS、L、XL、XXL
* **阴影** - 启用时，向文本添加阴影。
* **对齐** - 文本框中文本的对齐方式。选项为：左、中、右

### **计时器**

<figure><img src="/.gitbook/assets/wid_timer.png" alt=""><figcaption><p>计时器小部件</p></figcaption></figure>

显示所选计时器。除了选择计时器之外，没有其他可配置选项。

### **计时器2**

<figure><img src="/.gitbook/assets/wid_timer2.png" alt=""><figcaption><p>计时器2 小部件</p></figcaption></figure>

显示所选计时器，计时器文本根据所选小部件网格的大小进行缩放，并具有以下配置选项：

* **文本颜色** - 打开颜色选择器以选择文本的颜色。
* **计时器** - 要显示的计时器。
* **使用天数** - 启用时，当时间值超过 24 小时时显示天数。

### **TxGPStest**

<figure><img src="/.gitbook/assets/wid_gpstest.png" alt=""><figcaption><p>TxGPSTest 小部件</p></figcaption></figure>

以文本格式显示 GPS 信息。没有可配置选项。

### **数值**

<figure><img src="/.gitbook/assets/wid_value.png" alt=""><figcaption><p>数值小部件</p></figcaption></figure>

以文本形式显示定义的源值的数值。可配置的选项包括：

* **源** - 要显示的文本的来源
* **颜色** - 打开颜色选择器以选择文本的颜色。用户可以在 RGB 和 HSV 颜色模型之间选择颜色。还可以选择配置的主题系统颜色之一。
* **阴影** - 启用时，向文本添加阴影。
* **对齐标签** - 对齐标签文本。选项包括：**左**、**中**、**右**
* **对齐数值** - 对齐值文本。选项包括：**左**、**中**、**右**

### 数值2

<figure><img src="/.gitbook/assets/wid_value2.png" alt=""><figcaption><p>数值2 小部件</p></figcaption></figure>

以文本形式显示定义的遥测源的数值。文本将根据所选小部件网格的大小进行缩放。小部件将检测飞行结束（不再接收遥测）后，将显示配置的遥测传感器的最小值和最大值。

可配置的选项包括：

* **源** - 要显示的文本的遥测源
* **颜色** - 打开颜色选择器以选择文本的颜色。用户可以在 RGB 和 HSV 颜色模型之间选择颜色。还可以选择配置的主题系统颜色之一。
* **后缀** - 在配置的遥测名称标签后附加文本标签。