## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface that is easy to navigate.
- **Customizable**: You can customize almost every aspect of your transmitter's settings to suit your preferences.
- **Cross-platform**: EdgeTX supports multiple hardware platforms, giving you flexibility in choosing your RC equipment.
- **Open Source**: Being open-source, EdgeTX allows for community contributions and continuous improvement.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your transmitter model from the official website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Once installed, configure your transmitter settings according to your model and preferences.
4. **Calibration**: Calibrate your transmitter controls to ensure accurate operation.

### Support

For support and community interaction, visit the EdgeTX website and forums. Join the community to stay updated on the latest developments, share your experiences, and get help from other users.

### Conclusion

Enjoy using EdgeTX for your radio-controlled models and explore the endless possibilities it offers for customization and control.

# 飞行模式

<figure><img src="/.gitbook/assets/FM1.png" alt=""><figcaption><p>飞行模式页面</p></figcaption></figure>

飞行模式允许您为每个飞行模式设置不同的微调设置。一旦配置了多个飞行模式，您可以在每个飞行模式中调整微调设置，而不会影响其他飞行模式中的微调设置（除非它们被配置为这样做）。有9种可能的飞行模式可供使用，其中飞行模式0是默认飞行模式。

**飞行模式**屏幕显示了每个飞行模式的概述。高亮显示的飞行模式指示当前活动的飞行模式。选择一个飞行模式将带您进入该飞行模式的配置页面。

**检查FM微调：** 当按下检查FM微调按钮时，当前飞行模式的微调将被临时禁用。这用于测试当前飞行模式微调对输出的影响。

<figure><img src="/.gitbook/assets/FM2.png" alt=""><figcaption><p>飞行模式配置页面</p></figcaption></figure>

飞行模式配置屏幕具有以下选项：

**名称：** 飞行模式的自定义名称。如果配置了名称，该名称将显示在主屏幕的下方中心位置，位于微调之间。

**开关：** 启用该飞行模式的触发器。可以是开关、旋钮、遥测、微调或逻辑开关。

**淡入：** 当启用此飞行模式时逐渐更改微调值。指定时间（0.0 - 25.0）直到值更改完成。

**淡出：** 当禁用此飞行模式时逐渐更改微调值。指定时间（0.0 - 25.0）直到值更改完成。

**微调：** 要配置微调，请选择要配置的微调，确保它已打开（黄色）。然后从下拉菜单中选择提供初始微调值的飞行模式（0-8）和修饰符（**=**或**+**）。当选择**3P**而不是飞行模式（0-8）时，微调将作为3位置瞬时开关。

修饰符 - 有两种可能的值修饰符**=**和**+**。**=**修饰符直接使用所选飞行模式的微调值。**+**修饰符使用所选飞行模式的微调值，然后加上您正在配置的飞行模式的微调值。

_示例1：_ 如果您正在配置FM1并将值设置为=0，则FM1将具有与FM0相同微调的当前值。在这种情况下，在FM1中对微调的更改也会影响FM0中的微调，反之亦然。

_示例2：_ 如果您正在配置FM1并将值设置为+0，则FM1将具有与FM0相同微调的值，再加上在FM1中进行的任何微调更改。在这种情况下，在FM1中对微调的更改不会影响FM0中的微调。但是，对FM0中的微调值的更改将影响FM1中的微调值。

{% hint style="info" %}
如果在微调设置页面上关闭（白色）微调，则您将无法在主屏幕上进行任何调整。
{% endhint %}