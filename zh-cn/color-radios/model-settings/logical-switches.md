# 逻辑开关

逻辑开关是虚拟的两位开关，其值（开/关或 +100/-100）基于定义的逻辑表达式的评估（真/假）。一旦配置，逻辑开关可以在 EdgeTX 中任何可以定义物理开关的地方使用。

模型设置中的 **逻辑开关** 页面显示了所有配置的逻辑开关及其配置选项的概览。

<figure><img src="/.gitbook/assets/logicalswitches1.png" alt=""><figcaption><p>逻辑开关屏幕</p></figcaption></figure>

选择 **+** 按钮将允许您选择一个未使用的逻辑开关进行配置。

选择一个已配置的逻辑开关将为您提供以下选项：

* **编辑** - 打开所选逻辑开关的逻辑开关配置页面。
* **复制** - 复制所选逻辑开关。
* **粘贴** - 将复制的逻辑开关粘贴到所选逻辑开关上。注意：这将覆盖所选逻辑开关。
* **清除** - 删除所选逻辑开关的所有配置选项。

<figure><img src="/.gitbook/assets/logicalswitches2.png" alt=""><figcaption><p>逻辑开关配置屏幕</p></figcaption></figure>

选择编辑逻辑开关后，您将有以下配置选项：

* **Func** - 您想要使用的逻辑功能。请参阅下面的 [逻辑开关功能](logical-switches.md#logical\_switches\_judgment\_conditions\_and\_logical\_expressions) 以了解您可以使用的可能功能的描述。
* **V1** - 要评估的表达式中的第一个变量。
* **V2** - 要评估的表达式中的第二个变量。
* **AND 开关** - 必须激活的开关，以允许逻辑开关被评估为激活。
* **持续时间** - 逻辑开关在满足激活条件后保持激活（真）的持续时间。如果设置为 0.0，则逻辑开关将保持激活（真）。
* **延迟** - 逻辑开关的激活条件满足后到逻辑开关变为激活状态（真）之间的延迟。

### 逻辑开关功能 <a href="#logical_switches_judgment_conditions_and_logical_expressions" id="logical_switches_judgment_conditions_and_logical_expressions"></a>

在表达式中，a 和 b 代表来源（摇杆、开关等），x 代表要比较的常量（值）。

<table><thead><tr><th width="137">表达式</th><th width="606">描述</th></tr></thead><tbody><tr><td>a=x</td><td>当来源 V1 与常量 V2 完全相同时为真。</td></tr><tr><td>a~x</td><td>当来源 V1 与常量 V2 大致相同时为真。</td></tr><tr><td>a>x</td><td>当来源 V1 大于常量 V2 时为真。</td></tr><tr><td>a&#x3C;x</td><td>当来源 V1 小于常量 V2 时为真。</td></tr><tr><td>|a|>x</td><td>当来源 V1 的绝对值大于常量 V2 时为真。</td></tr><tr><td>|a|&#x3C;x</td><td>当来源 V1 的绝对值小于常量 V2 时为真。</td></tr><tr><td>AND</td><td>当来源 V1 和 V2 都为真时为真。</td></tr><tr><td>OR</td><td>当来源 V1 或 V2 为真时为真。</td></tr><tr><td>XOR</td><td>当来源 V1 和 V2 的位置不匹配时为真。</td></tr><tr><td>Edge</td><td>当来源 V1 在定义的时间段内激活然后停用时瞬时为真。V1 下的第一个时间字段 (T1) 是来源 V1 激活逻辑开关所需的最小激活持续时间。第二个时间 (T2) 是来源 V1 激活逻辑开关所允许的最大时间。当 T2 设置为 -- 时，无论 V1 激活多长时间，逻辑开关都将为真。当 T2 设置为 3 时，如果 V1 激活超过 3 秒，则当来源停用时，逻辑开关将不会设置为真。当 T2 设置为 &#x3C;&#x3C; 时，当 T1 中的时间条件满足而不需要来源 V1 停用时，逻辑开关将为真。</td></tr><tr><td>a=b</td><td>当来源 V1 与来源 V2 相同时为真。</td></tr><tr><td>a>b</td><td>如果来源 V1 大于来源 V2，则为真。</td></tr><tr><td>a&#x3C;b</td><td>如果来源 V1 小于来源 V2，则为真。</td></tr><tr><td>△>x</td><td>每当来源 V1 变化超过常量 V2 指示的量时瞬时为真。</td></tr><tr><td>|△|>x</td><td>每当来源 V1 的绝对值变化超过常量 V2 指示的量时瞬时为真。</td></tr><tr><td>Timer</td><td>每 xxx 秒瞬时为真。参数 V1 是逻辑开关为真（激活）的持续时间。参数 V2 是逻辑开关激活之间的时间。只要定义的开关处于激活状态，就重复计时器周期。</td></tr><tr><td>Stky (Sticky)</td><td>在开关 V1 激活（真）后“粘住”为真，并且无论 V1 位置如何都保持激活（真），直到开关 V2 激活（真）并“解粘”或停用（假）逻辑开关。</td></tr></tbody></table>