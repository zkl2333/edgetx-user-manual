## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and aims to provide a flexible and customizable platform for controlling your RC devices.

### Features

- **Customizable Interface**: EdgeTX allows you to customize the user interface to suit your preferences.
- **Advanced Functionality**: Take advantage of advanced features such as telemetry, Lua scripting, and more.
- **Cross-platform Support**: EdgeTX is compatible with a wide range of radio controllers.
- **Community-driven Development**: Join a vibrant community of developers and users to contribute to the project.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download the Firmware**: Visit the EdgeTX website to download the latest firmware for your radio controller.
2. **Flash the Firmware**: Use the appropriate tools to flash the firmware onto your radio controller.
3. **Configure Settings**: Customize the settings according to your preferences.
4. **Explore Advanced Features**: Take your time to explore and make use of the advanced features EdgeTX has to offer.

### Support

For support and assistance, visit the EdgeTX website or join the community forums to connect with other users and developers.

Thank you for choosing EdgeTX! Happy flying!

# 输出

**模型设置**中的**输出**屏幕是在最终将控制数据发送到射频模块之前进行的最终调整（包括子微调、曲线、端点和中心值）的地方。在这里设置通道中心、限制（以防止舵机绑定）和输出方向。

{% hint style="info" %}
**微调**是在操作中使用微调开关进行的临时调整飞行控制的操作。**子微调**是对飞行控制的半永久性调整，通常在输出设置中设置模型时配置。
{% endhint %}

<figure><img src="/.gitbook/assets/outputs.jpg" alt=""><figcaption><p>输出屏幕</p></figcaption></figure>

输出屏幕显示了所有配置的输出通道。对于每个输出行，它显示了最小和最大限制、子微调、中心点、子微调模式和通道监视的值。输出页面还提供以下两个选项：

* **将所有微调添加到子微调** - 选中后，将当前微调值添加到每个配置输出的子微调值中。然后将微调值重置为零。
* **扩展限制** - 启用后，将输出值的最小和最大范围增加到 -150 和 150。如果使用标准限制无法达到控制面的完整范围，则需要扩展限制。

选择一个输出行将给您以下选项：

* **编辑** - 打开输出配置屏幕。
* **重置** - 将子微调值重置为零。微调值不会更改。
* **将摇杆复制到子微调** - 将当前摇杆偏转值添加为子微调值。
* **将微调复制到子微调** - 将当前微调值添加到子微调值中。微调值不会更改。

<figure><img src="/.gitbook/assets/outputs2.jpg" alt=""><figcaption><p>输出配置页面</p></figcaption></figure>

输出配置屏幕具有以下配置选项：

* **名称** - 输出的名称，最多 6 个字符。
* **子微调** - 子微调值（最大 100）。也可以通过按下“GV”按钮然后从下拉菜单中选择所需的全局变量来设置为全局变量。
* **最小** - 最小输出限制。通常用于防止使用舵机控制面的模型发生舵机绑定。
* **最大** - 最大输出限制。通常用于防止使用舵机控制面的模型发生舵机绑定。
* **反转** - 如果要反转输出值，请选择此选项。
* **曲线** - 指定要为此输出使用的自定义曲线（如果有）。有关自定义定义曲线的更多信息，请参阅[曲线](../curves.md)。
* **PPM 中心** - 指定输出通道中心值的脉冲宽度值（介于 1000 - 2000 之间）。更改此值将移动整个输出范围，包括上限和下限。
* **子微调模式** - 定义子微调值如何影响最小/最大输出值。有两个选项：
  * **仅中心** - 只有中心值移动，上限和下限不会改变。摇杆的反应在中点的上半部和下半部之间有所不同。
  * **对称** - 上限和下限将根据中心值的移动而移动。摇杆在中点两侧的反应相同。