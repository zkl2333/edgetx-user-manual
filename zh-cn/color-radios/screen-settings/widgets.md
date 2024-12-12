# 小组件

{% hint style="info" %}
设置小组件后，长按小组件将显示两个菜单选项：**全屏**和**小组件**设置。对于某些小组件，全屏模式将提供额外的功能。要退出全屏模式，长按 RTN / 返回按钮。
{% endhint %}

以下是 EdgeTX 附带的小组件的描述和配置选项。

### BattAnalog

<figure><img src="//edgetx-static.zkl2333.com/wid_battanal.png" alt=""><figcaption><p>BattAnalog 小组件</p></figcaption></figure>

显示 Lipo/Li-ion 电池电量的图形表示。它将自动检测电池的电芯数量。适用于仅接收总电池电压的遥测。可配置选项包括：

* **传感器** - 用于电池电压的传感器。
* **颜色** - 打开颜色选择器以选择文本的颜色。
* **显示总电压** - 启用时显示总电池电压（而不是计算的电芯电压）。
* **锂离子** - 启用时，将用于计算剩余电池百分比的最低电池电压从 3.0 调整为 2.8。

### BattCheck

<figure><img src="//edgetx-static.zkl2333.com/wid_battcheck.png" alt=""><figcaption><p>BattCheck 小组件</p></figcaption></figure>

显示 Lipo/Li-ion 电池电量的图形表示。适用于接收单个电芯电压的遥测，例如 FLVSS LiPo 电压传感器。可配置选项包括：

* **传感器** - 用于电池电压的传感器。
* **颜色** - 打开颜色选择器以选择文本的颜色。
* **阴影** - 启用时，为文本添加阴影。
* **最低电芯** - 启用时，仅显示最低电芯的电压（与显示所有电芯电压相比）。
* **锂离子** - 启用时，将用于计算剩余电池百分比的最低电池电压从 3.0 调整为 2.8。

### 计数器

<figure><img src="//edgetx-static.zkl2333.com/wid_counter.png" alt=""><figcaption><p>计数器小组件</p></figcaption></figure>

一个递增计数的计数器。可配置选项包括：

* **颜色** - 打开颜色选择器以选择文本的颜色。
* **阴影** - 启用时，为文本添加阴影。

### **事件演示**

<div>

<figure><img src="//edgetx-static.zkl2333.com/widgets5.jpg" alt=""><figcaption><p>计数器和事件演示小组件</p></figcaption></figure>

 

<figure><img src="//edgetx-static.zkl2333.com/widgets6.jpg" alt=""><figcaption><p>事件演示小组件全屏</p></figcaption></figure>

</div>

演示全屏模式下的按键和触摸事件处理。仅用于演示目的。可配置选项包括：

* **大小** - 更改全屏模式下框的大小。

### **飞行次数**&#x20;

<figure><img src="//edgetx-static.zkl2333.com/wid_flights.png" alt=""><figcaption><p>飞行次数小组件</p></figcaption></figure>

计算您的飞行次数。它将在飞行开始、结束以及模型的总飞行次数时给出语音提示。&#x20;

可配置选项包括：

* **开关** - 指定的 Arm/Safe 开关。
* **电机通道** - 电机的通道。
* **最小飞行时间** - 计入飞行次数的最小飞行时间。
* **文本颜色** - 打开颜色选择器以选择文本的颜色。
* **调试** - 启用时，在小组件上显示状态信息。

_**关于此小组件的附加说明：**_

如果在 30 秒后引擎超过 25%，遥测处于活动状态（表示模型已连接），并且安全开关开启，则认为飞行成功。在电池断开 8 秒后（通过无遥测检测）认为飞行结束——警告：如果模型使用 GV9，请勿使用此小组件（GV9 FM0 是存储飞行次数的地方）！

小组件假设以下情况：模型有一个电机，电机在通道 3 上激活（可以在设置中配置），有一个以上的遥测\[RSSI|RxBt|A1|A2|1RSS|2RSS|RQly]，有一个安全开关（臂开关），并且全局变量 GV9 是空闲的（即未使用）。

### 仪表

<figure><img src="//edgetx-static.zkl2333.com/wid_gauge (1).png" alt=""><figcaption><p>仪表小组件</p></figcaption></figure>

显示源值的条形图。可配置选项包括：

* **源** - 仪表的源。
* **最小值** - 仪表的最小值。此值将为 0%&#x20;
* **最大值** - 仪表的最大值。此值将为 100%&#x20;
* **颜色** - 打开颜色选择器以选择仪表文本和条形的颜色。

### **旋转仪表**

<figure><img src="//edgetx-static.zkl2333.com/wid_gaugerotary.png" alt=""><figcaption><p>旋转仪表小组件</p></figcaption></figure>

&#x20;一个可配置的模拟样式仪表，带有指针。还显示仪表读取的最小值和最大值，分别用绿色和红色指针表示。可配置选项包括：

* **源** - 仪表的源。
* **最小值** - 最小（最低）仪表值。
* **最大值** - 最大（最高）仪表值。
* **高为绿** - 对于高值好的传感器，启用。对于低值好的传感器，禁用。
* **精度** - 显示小数的数值精度。&#x20;

### **幽灵**

<figure><img src="//edgetx-static.zkl2333.com/wid_ghost.jpg" alt=""><figcaption><p>幽灵小组件正常模式和 VTX 模式</p></figcaption></figure>

幽灵小组件将根据配置的模式显示 RF 接收器或视频发射机的遥测数据。&#x20;

在正常模式下，小组件提供 RF 模式（RFMD）、帧率（FRATE）、链路质量（RQLY）和发射功率（TPWR）&#x20;

在视频模式下，小组件提供视频频段（VBAN）、视频频率（VFRQ）、视频通道（VCHAN）和视频功率（VPWR）

### **LibGUI 演示**

<figure><img src="//edgetx-static.zkl2333.com/wid_libgui.jpg" alt=""><figcaption><p>LibGUI 演示小组件</p></figcaption></figure>

此小组件是 LibGUI 库的演示。此库通常不单独运行。相反，它为使用它的其他 Lua 脚本提供交互功能。小组件必须在全屏模式下运行以演示库的功能。

### **模型信息**

<figure><img src="//edgetx-static.zkl2333.com/wid_modelinfo (1).png" alt=""><figcaption><p>模型信息小组件</p></figcaption></figure>

显示所选模型的名称和图片（如果在模型设置中配置）。可配置选项包括：

* **颜色** - 打开颜色选择器以选择名称文本的颜色。
* **大小** - 名称文本的大小。选项有 STD（默认）、BOLD、XXS、XS、L、XL、XXL
* **填充背景？** - 启用时，为小组件添加实心背景色
* **背景颜色** - 打开颜色选择器以选择背景的颜色。
* **使用主题颜色** - 启用时，使用配置主题的文本颜色覆盖文本颜色。

### **输出**&#x20;

<figure><img src="//edgetx-static.zkl2333.com/wid_outputs.png" alt=""><figcaption><p>输出小组件</p></figcaption></figure>

以条形图显示通道输出值。显示的通道数量取决于小组件的大小。可配置选项包括：

* **第一个通道** - 选择要在小组件中显示的第一个通道。
* **填充背景** - 启用时，为小组件添加实心背景色
* **背景颜色** - 打开颜色选择器以选择背景的颜色。
* **文本颜色** - 打开颜色选择器以选择文本的颜色。
* **颜色** - 打开颜色选择器以选择输出条的颜色。

### 串行电源端口演示

<figure><img src="//edgetx-static.zkl2333.com/wid_serialpower.png" alt=""><figcaption><p>串行电源端口演示小组件</p></figcaption></figure>

一个演示小组件，向您展示如何使用电源端口。必须在全屏模式下运行。

### **SOARETX**

<figure><img src="//edgetx-static.zkl2333.com/wid_soaretx.jpg" alt=""><figcaption><p>SoarETX 小组件</p></figcaption></figure>

EdgeTX 版本的 SoarOTX 工具。它是 EdgeTX 发射机的滑翔机模型包。它提供用于计时和记分的 Lua 脚本、日志数据的图形化（例如高度图）和模型配置。

有关此小组件的配置和使用的更多信息，请参见 [https://github.com/jfrickmann/SoarOTX/wiki/SoarETX-for-color-radios](https://github.com/jfrickmann/SoarOTX/wiki/SoarETX-for-color-radios)。

此工具的演示可以在这里看到：[https://www.youtube.com/watch?v=5NSvxUNKM\_c](https://www.youtube.com/watch?v=5NSvxUNKM\_c)

### **文本**

<figure><img src="//edgetx-static.zkl2333.com/wid_text.png" alt=""><figcaption><p>文本小组件</p></figcaption></figure>

显示用户可自定义的文本字段。可配置选项包括：

* **文本** - 要显示的文本
* **颜色** - 打开颜色选择器以选择文本的颜色。&#x20;
* **大小** - 文本的大小。选项有 STD（默认）、BOLD、XXS、XS、L、XL、XXL
* **阴影** - 启用时，为文本添加阴影。
* **对齐** - 文本框中文本的对齐方式。选项有：左对齐、居中、右对齐

### **计时器**

<figure><img src="//edgetx-static.zkl2333.com/wid_timer.png" alt=""><figcaption><p>计时器小组件</p></figcaption></figure>

显示所选的计时器。除了计时器选择外没有其他可配置选项。

### **计时器2**&#x20;

<figure><img src="//edgetx-static.zkl2333.com/wid_timer2.png" alt=""><figcaption><p>计时器2 小组件</p></figcaption></figure>

显示所选计时器，计时器文本根据选择的小组件大小进行缩放，并具有以下配置选项：

* **文本颜色** - 打开颜色选择器以选择文本的颜色。
* **计时器** - 要显示的计时器。
* **使用天数** - 启用时，当时间值超过 24 小时时显示天数。

### **TxGPStest**&#x20;

<figure><img src="//edgetx-static.zkl2333.com/wid_gpstest.png" alt=""><figcaption><p>TxGPSTest 小组件</p></figcaption></figure>

以文本格式显示 GPS 信息。没有可配置选项。

### **值**

<figure><img src="//edgetx-static.zkl2333.com/wid_value.png" alt=""><figcaption><p>值小组件</p></figcaption></figure>

以文本形式显示定义源的数值。可配置选项包括：

* **源** - 要显示的文本的源
* **颜色** - 打开颜色选择器以选择文本的颜色。用户可以在 RGB 和 HSV 颜色模型之间选择颜色。您还可以选择一个配置的主题系统颜色。
* **阴影** - 启用时，为文本添加阴影。
* **对齐标签** - 对齐标签文本。选项包括：**左对齐**、**居中**、**右对齐**
* **对齐值** - 对齐值文本。选项包括：**左对齐**、**居中**、**右对齐**

### 值2

<figure><img src="//edgetx-static.zkl2333.com/wid_value2.png" alt=""><figcaption><p>值2 小组件</p></figcaption></figure>

以文本形式显示定义的遥测源的数值。文本将根据选择的小组件网格的大小进行缩放。小组件将检测飞行结束（通过不再接收遥测），然后显示配置的遥测传感器的最小值和最大值。

可配置选项包括：

* **源** - 要显示的文本的遥测源
* **颜色** - 打开颜色选择器以选择文本的颜色。用户可以在 RGB 和 HSV 颜色模型之间选择颜色。您还可以选择一个配置的主题系统颜色。
* **后缀** - 在配置的遥测名称标签后附加一个文本标签。