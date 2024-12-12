## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX software and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Customizable Interface**: Personalize your transmitter's interface to suit your preferences.
- **Advanced Mixing**: Create complex control setups with ease.
- **Telemetry Support**: Monitor real-time data from your model.
- **Lua Scripting**: Customize your transmitter's behavior using Lua scripts.
- **Wireless Trainer**: Train with other pilots using the wireless trainer function.
- **Crossfire Integration**: Seamlessly integrate with TBS Crossfire systems.

### Getting Started

To get started with EdgeTX, follow these steps:

1. Download the latest EdgeTX firmware for your transmitter model from the official website.
2. Flash the firmware to your transmitter following the instructions provided.
3. Configure your transmitter settings to match your model and preferences.
4. Explore the various features and customization options available in EdgeTX.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 混合

**混合** 屏幕是模型设置中的一个地方，多个输入可以组合成一个“通道混合”。然后将这些混合分配给一个无线电通道进行输出。这也是将开关、旋钮或滑块分配给通道进行输出的地方。与输入部分类似，也可以为通道混合分配权重、偏移或曲线。

<figure><img src="/.gitbook/assets/Mixes.jpg" alt=""><figcaption><p>混合页面</p></figcaption></figure>

选择 **+** **按钮** 将创建一个新的混合并打开混合配置页面。选择现有的混合将给您以下选项：

- **编辑** - 打开该混合行的混合配置页面。
- **之前插入** - 在所选混合之前插入一个新的混合行。
- **之后插入** - 在所选混合之后插入一个新的混合行。
- **复制** - 复制所选的混合行。
- **移动** - 选择要移动的混合行；在选择新行后，使用其中一个粘贴命令移动混合（即剪切和粘贴）。
- **删除** - 删除所选的混合行。
- **之前粘贴** - 将复制或移动的混合行粘贴到所选混合行之前。
- **之后粘贴** - 将复制或移动的混合行粘贴到所选混合行之后。

<figure><img src="/.gitbook/assets/Mixes2.jpg" alt=""><figcaption><p>启用显示混合器监视器的混合</p></figcaption></figure>

**显示混合器监视器** - 选择此选项将在混合通道上显示一个条形图，显示该混合通道的当前值。

<figure><img src="/.gitbook/assets/mixes3.jpg" alt=""><figcaption><p>混合配置选项</p></figcaption></figure>

混合配置页面的右上部分包含所选混合行的通道监视器。它显示输出（顶部）和混合（底部）值。还提供以下配置选项：

- **名称** - 混合的名称（可选）。最多允许6个字符。
- **来源** - 混合的来源。除了输入外，还可以选择摇杆、旋钮、滑块、微调、物理和逻辑开关、直升机混合器输出、训练导入通道值和其他通道。
- **权重** - 使用源值的百分比。
- **偏移** - 源值要添加或减去的值。
- **开关** - 激活此混合行的物理开关（可选）。如果未选择任何开关，则混合将默认激活。
- **曲线** - 指定要使用的曲线类型。有关不同曲线类型的详细解释，请参阅[输入](inputs.md)页面上的**曲线**部分。

<figure><img src="/.gitbook/assets/Mixes4.png" alt=""><figcaption><p>其他混合设置</p></figcaption></figure>

- **多路复用** - 多路复用设置定义当前混合行如何与同一通道上的其他混合器行交互。**添加** 将其输出添加到它们，**乘以** 将乘以其上方行的结果，**替换** 将用其输出替换之前完成的任何操作。
- **模式** - 指定此混合激活的飞行模式。
- **微调** - 指定是否在此混合中包括微调值。要包括微调值，相关输入的微调字段也必须在**输入**屏幕上启用。
- **警告** - 选择时，当此混合激活时，无线电将发出哔哔声。您可以选择关闭（0）或哔哔声模式1、2、3。
- **延迟上升** - 在源值增加和输出之间创建秒级时间延迟。
- **延迟下降** - 在源值减少和输出之间创建秒级时间延迟。
- **慢上/下精度** - 在0.0和0.00之间更改慢上/下的精度。
- **慢上** - 调整源值增加的过渡速度。指定从-100%到+100%的过渡时间，单位为秒。您可以指定从0.00秒到25.00秒的范围。
- **慢下** - 调整源值减少的过渡速度。指定从-100%到+100%的过渡时间，单位为秒。您可以指定从0.0秒到25.0秒的范围。