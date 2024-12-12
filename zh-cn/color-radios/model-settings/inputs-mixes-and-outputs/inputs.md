## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware with additional features and improvements.

### Features

- **Customizable Interface**: EdgeTX allows users to customize the user interface to suit their preferences.
- **Advanced Mixing**: Users can create complex control mixes for their models.
- **Lua Scripting**: Lua scripts can be used to add custom functionality to the system.
- **Wireless Trainer**: EdgeTX supports wireless trainer functionality.
- **Crossfire Integration**: Integration with TBS Crossfire systems for long-range control.

### Getting Started

To get started with EdgeTX, follow these steps:

1. Download the latest EdgeTX firmware from the official website.
2. Flash the firmware to your radio transmitter following the instructions provided.
3. Configure your radio settings and model setups using the intuitive interface.
4. Explore the advanced features and customization options available in EdgeTX.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 输入

**输入** 屏幕是模型设置中的一个部分，您可以在这里将您的物理无线电控制（例如：摇杆、滑块和旋钮）映射到软件输入，以便无线电使用。在映射控制之后，您可以对输入应用修改器，如权重、偏移或曲线，这些修改器将应用于使用该输入的任何地方。虽然也可以将开关分配为输入，但通常不需要，因为开关输出很少需要通过权重、偏移或曲线进行修改。默认情况下，EdgeTX 将根据[无线电设置](../../radio-settings/radio-setup/)中定义的默认通道顺序自动将您的控制摇杆映射到副翼、升降舵、油门、方向舵。

{% hint style="info" %}
根据[无线电设置](../../radio-settings/radio-setup/)中定义的设置，您的输入通道可能会默认为不同的顺序。
{% endhint %}

{% hint style="info" %}
输入部分通常也被称为“**双速率**”，因为在早期的 OpenTX 版本中曾这样称呼它。
{% endhint %}

<figure><img src="/.gitbook/assets/inputs.jpg" alt=""><figcaption><p>模型设置中的输入屏幕</p></figcaption></figure>

选择 **+** **按钮** 将显示可配置的可用输入列表。选择一个输入后，将打开该输入的输入配置页面。选择现有输入将为您提供以下选项：

- **编辑** - 打开该输入行的输入配置页面。
- **之前插入** - 在所选输入之前插入新的输入行。
- **之后插入** - 在所选输入之后插入新的输入行。
- **复制** - 复制所选输入行。
- **移动** - 选择要移动的输入行。在选择新行后，使用其中一个粘贴命令移动输入（即剪切和粘贴）。
- **删除** - 删除所选输入行。
- **粘贴之前** - 在所选输入行之前粘贴复制或移动的输入行。
- **粘贴之后** - 在所选输入行之前粘贴复制或移动的输入行。

<figure><img src="/.gitbook/assets/inputs2.jpg" alt=""><figcaption><p>输入配置页面</p></figcaption></figure>

### 输入配置页面

输入配置页面允许您编辑输入配置参数。在配置参数的右侧，您可以看到一个实时图表，显示您的配置选项将如何影响输入的斜率。

- **输入名称** - 输入的名称。可以使用四个字符。
- **行名称** - 输入中单独行的名称。通过在输入下添加额外的输入行，可以将多个物理输入映射到一个输入中。

<figure><img src="/.gitbook/assets/multiple_input_lines.jpg" alt=""><figcaption><p>一个输入下多个输入行的示例</p></figcaption></figure>

- **来源** - 用于输入的物理控制。除了物理控制，还可以指定 MAX（始终返回 100）、MIN（始终返回 -100）、循环、微调开关、通道值等。在选择来源后移动物理控制将自动将其映射到该输入。
- **权重** - 使用的摇杆行程的百分比值（通常称为“速率”）。
- **偏移** - 添加到输入来源的值或从中减去的值。
- **开关** - 激活输入行的开关。如果未定义开关，则始终处于活动状态。
- **曲线** - 指定要使用的曲线类型。存在以下曲线选项：
  - **Diff** - 仅将中间（0）以上或以下的范围乘以指定的 %。
  - **Expo** - 输入值呈指数变化。增加 % 将导致中间（0）附近的平缓斜坡。减少 % 将导致中间（0）附近的陡峭斜坡。当 % 为 0 时，斜坡将是线性的。
  - **Func** -

      <table><thead><tr><th width="116">功能</th><th width="575">斜率行为</th></tr></thead><tbody><tr><td>---</td><td>斜率将是线性的。</td></tr><tr><td>X>0</td><td>中间（0）以下的范围始终为 0。在中间（0）以上，斜率是线性的。</td></tr><tr><td>X<0</td><td>中间（0）以上的范围始终为 0。在中间（0）以下，斜率是线性的。</td></tr><tr><td>|X|</td><td>中间（0）以上的范围，反应是线性的。在中间（0）以下，符号被反转。曲线绘制 V 形图形。</td></tr><tr><td>f>0</td><td>中间（0）以上的范围始终为 +100。中间（0）以下的范围始终为 0。输出值将始终为 0 或 +100。</td></tr><tr><td>f<0</td><td>中间（0）以上的范围始终为 0。中间（0）以下的范围始终为 -100。输出值将始终为 0 或 -100。</td></tr><tr><td>|f|</td><td>中间（0）以上的范围始终为 +100。中间（0）以下的范围始终为 -100。输出值将始终为 +100 或 -100。</td></tr></tbody></table>
  - **Cstm** - 分配自定义定义的曲线。有关自定义定义曲线的更多信息，请参阅[曲线](../curves.md)。

{% hint style="info" %}
权重、偏移和曲线 % 的值也可以由配置的全局值定义。选择 **GV** 按钮将显示可供选择的配置全局值列表。
{% endhint %}

在屏幕底部选择齿轮按钮时，将显示以下选项窗口。

<figure><img src="/.gitbook/assets/inputs3.jpg" alt=""><figcaption></figcaption></figure>

**侧面** - 指定此行设置有效的输入范围。如果选择 **---**，它将在来源值的整个范围内有效。如果选择 **x>0**，它将在来源值的上半部分有效。如果选择 **x<0**，它将在来源值的下半部分有效。

**微调** - 指定是否在此输入中包含微调值。此外，您可以选择不同的微调值用于此输入。

**模式** - 指定此输入适用于哪些飞行模式。