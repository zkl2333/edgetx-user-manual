# 工具

<figure><img src="//edgetx-static.zkl2333.com/tools.jpg" alt=""><figcaption><p>工具屏幕</p></figcaption></figure>

在无线电设置中的 **工具** 页面，您可以选择基于 Lua 脚本的工具进行执行。位于 SD 卡 **Tools** 文件夹中的 Lua 脚本将在此列出。选择一个工具将以全屏模式执行它。默认情况下，EdgeTX 包含几个工具。其他工具可以下载并添加到 SD 卡中。以下工具包含在默认的 EdgeTX SD 卡中。

#### 模型定位器（通过 RSSI）

<figure><img src="//edgetx-static.zkl2333.com/rssi.jpg" alt=""><figcaption><p>模型定位器工具</p></figcaption></figure>

模型定位器工具帮助根据 RSSI（如果仍然可用）找到丢失的模型。该小部件会产生一个音频表示（变音器风格）的丢失模型的 RSSI。小部件还将在一个可见的彩色条（0-100%）中显示 RSSI。

#### 频谱（INT）

<figure><img src="//edgetx-static.zkl2333.com/spectrum-int.jpg" alt=""><figcaption><p>频谱分析仪（INT）工具</p></figcaption></figure>

频谱分析仪工具将显示 2.4GHz 频段信号的强度。它使用内部 MULTI-Module 作为 2.4GHz 频谱分析仪。

显示屏显示 2.4GHz 频谱上的频率，从 2400MHz 到 2480MHz。X（水平）轴显示频率（MHz），Y（垂直）轴显示相对信号强度。

**T:** 图的中心频率（固定在 2440MHz）\
**S:** 图的带宽（固定在 80MHz）\
**T:** 光标的位置（垂直线）

按下 **ENT** 并向左或向右滚动可以更改 **T** 值，这将移动垂直线以突出显示特定频率。

#### 向导加载器

<div>

<figure><img src="//edgetx-static.zkl2333.com/wizard1.jpg" alt=""><figcaption><p>向导加载器工具</p></figcaption></figure>

 

<figure><img src="//edgetx-static.zkl2333.com/wizard2.jpg" alt=""><figcaption><p>飞机向导</p></figcaption></figure>

</div>

向导加载器工具通过为特定模型类型运行设置向导来帮助您设置新模型。一旦选择了模型类型，向导将引导您完成一系列提示，然后根据提供的信息配置您选择的模型。

_**注意：向导不会创建新模型，它只会配置当前选择的模型。您必须先手动创建一个新模型，然后运行向导。如果您在已配置的模型上运行此向导，它将覆盖您的模型设置！**_

{% hint style="info" %}
可以从以下网址下载其他 EdgeTX 兼容的 Lua 脚本：[https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts)
{% endhint %}