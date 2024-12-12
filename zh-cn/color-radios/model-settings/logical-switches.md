## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and flight modes to suit your preferences.
- **Telemetry Support**: Monitor real-time telemetry data from your model while in flight.
- **Cross-platform Compatibility**: EdgeTX is compatible with a wide range of RC transmitters.
- **Open-source Community**: Join a vibrant community of developers and users to share knowledge and resources.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your RC transmitter model from the official website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model setups using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter sticks and switches to ensure accurate control of your model.
5. **Testing**: Perform a range check and flight test to ensure everything is working correctly.

### Conclusion

EdgeTX is a powerful firmware that offers flexibility and control for your radio-controlled models. Join the EdgeTX community today and take your RC experience to the next level!

# 逻辑开关

逻辑开关是虚拟的两位置开关，其值（ON/OFF或+100/-100）基于定义的逻辑表达式的评估（真/假）。一旦配置，逻辑开关可以在 EdgeTX 中的任何定义物理开关的地方使用。

**逻辑开关** 页面在模型设置中显示了所有配置的逻辑开关以及它们配置选项的概述。

<figure><img src="/.gitbook/assets/logicalswitches1.png" alt=""><figcaption><p>逻辑开关屏幕</p></figcaption></figure>

选择 **+** 按钮将允许您选择一个未使用的逻辑开关进行配置。

选择已配置的逻辑开关将给您以下选项：

- **编辑** - 打开所选逻辑开关的逻辑开关配置页面。
- **复制** - 复制所选逻辑开关。
- **粘贴** - 将复制的逻辑开关粘贴到所选逻辑开关上。注意：它将覆盖所选逻辑开关。
- **清除** - 删除所选逻辑开关的所有配置选项。

<figure><img src="/.gitbook/assets/logicalswitches2.png" alt=""><figcaption><p>逻辑开关配置屏幕</p></figcaption></figure>

选择编辑逻辑开关后，您将有以下配置选项：

- **Func** - 您要使用的逻辑功能。有关您可以使用的可能函数的描述，请参阅[逻辑开关函数](logical-switches.md#logical\_switches\_judgment\_conditions\_and\_logical\_expressions)。
- **V1** - 要评估的表达式中的第一个变量。
- **V2** - 要评估的表达式中的第二个变量。
- **AND 开关** - 必须处于活动状态才能允许对逻辑开关进行激活的开关。
- **持续时间** - 逻辑开关在满足激活条件后保持活动（真实）的持续时间。如果设置为 0.0，则逻辑开关将保持活动（真实）。
- **延迟** - 满足逻辑开关的激活条件后以及逻辑开关变为激活状态（真实）之间的延迟。

### 逻辑开关函数 <a href="#logical_switches_judgment_conditions_and_logical_expressions" id="logical_switches_judgment_conditions_and_logical_expressions"></a>

在表达式中，a 和 b 代表来源（摇杆、开关等），x 代表要比较的常量（值）。

<table><thead><tr><th width="137">表达式</th><th width="606">描述</th></tr></thead><tbody><tr><td>a=x</td><td>当来源 V1 与常量 V2 完全相同时为真。</td></tr><tr><td>a~x</td><td>当来源 V1 与常量 V2 大致相同时为真。</td></tr><tr><td>a>x</td><td>当来源 V1 大于常量 V2 时为真。</td></tr><tr><td>a&#x3C;x</td><td>当来源 V1 小于常量 V2 时为真。</td></tr><tr><td>|a|>x</td><td>当来源 V1 的绝对值大于常量 V2 时为真。</td></tr><tr><td>|a|&#x3C;x</td><td>当来源 V1 的绝对值小于常量 V2 时为真。</td></tr><tr><td>AND</td><td>当来源 V1 和 V2 都为 TRUE 时为真。</td></tr><tr><td>OR</td><td>当来源 V1 或 V2 任一为 TRUE 时为真。</td></tr><tr><td>XOR</td><td>当来源 V1 和 V2 的位置不匹配时为真。</td></tr><tr><td>Edge</td><td>当来源 V1 活跃了定义的时间段然后停止活跃时瞬间为真。V1 下的第一个时间字段（T1）是需要激活逻辑开关的最短活跃持续时间。第二个时间（T2）是允许来源 V1 活跃的最长时间。当 T2 设置为 -- 时，逻辑开关将始终为真，无论 V1 活跃了多长时间。当 T2 设置为 3 时，如果 V1 活跃超过 3 秒，当来源停止活跃时逻辑开关将不会被设置为真。当 T2 设置为 &#x3C;&#x3C; 时，当 T1 中的时间条件满足而来源 V1 未停止活跃时，逻辑开关将为真。</td></tr><tr><td>a=b</td><td>当来源 V1 与来源 V2 相同时为真。</td></tr><tr><td>a>b</td><td>如果来源 V1 大于来源 V2 则为真。</td></tr><tr><td>a&#x3C;b</td><td>如果来源 V1 小于来源 V2 则为真。</td></tr><tr><td>△>x</td><td>每当来源 V1 变化超过常量 V2 指示的数量时瞬间为真。</td></tr><tr><td>|△|>x</td><td>每当来源 V1 的绝对值变化超过常量 V2 指示的数量时瞬间为真。</td></tr><tr><td>计时器</td><td>每 xxx 秒瞬间为真。参数 V1 是逻辑开关保持为真（活跃）的持续时间。参数 V2 是逻辑开关激活之间的时间。只要定义的开关处于活跃状态，重复计时器循环。</td></tr><tr><td>Stky (Sticky)</td><td>在开关 V1 活跃（真实）后保持为真，无论 V1 位置如何，直到开关 V2 被激活（真实）并“解除粘性”或停止活跃（假）逻辑开关。</td></tr></tbody></table>