---
description: 通用模型设置
---

# 模型设置

<div align="center">

<figure><img src="//edgetx-static.zkl2333.com/modelsetup.png" alt=""><figcaption><p>模型设置中的模型设置选项卡</p></figcaption></figure>

</div>

**模型设置**页面是模型设置的默认页面，也是您开始配置模型的地方。它包含以下设置：

#### 模型名称

输入所需的模型名称。最大字符数为15。

#### 标签

在这里，您可以从已定义的标签列表中分配一个标签。默认情况下，模型标签将为**未标记**。有关创建标签的更多信息，请参见[select-model.md](../../select-model.md "mention")页面。

#### 模型图像

当选择文件夹图标时，将弹出一个窗口，允许您从SD卡的图像文件夹中选择一个图像文件。

{% hint style="info" %}
为避免性能问题，模型图像大小不应超过192 x 114像素。有关模型图像要求的更多信息，请参见[SD卡](../../radio-settings/sd-card.md)部分的**图像**部分。
{% endhint %}

{% hint style="info" %}
[https://www.skyraccoon.com/](https://www.skyraccoon.com/) 拥有大量可用于EdgeTX的免费图像文件库。
{% endhint %}



#### ADC滤波器

启用/禁用此模型的ADC滤波器。_**全局**_选项将采用无线电设置中指定的值，默认情况下为_开启_。

{% hint style="info" %}
ADC滤波器是用于比例通道（摇杆、旋钮、滑块）的滤波器，平滑由于系统电子噪声引起的小而快速的运动。通常，对于带有飞行控制器的模型，此滤波器应_禁用_。
{% endhint %}

{% hint style="info" %}
启用的计时器将在模型设置屏幕上显示为高亮显示。
{% endhint %}