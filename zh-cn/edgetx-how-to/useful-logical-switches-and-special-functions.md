# 配置低电量警报

本指南展示了如何配置低电压电池警报。假设我们有一个使用 2S Lipo 接收机电池的模型。我们希望在电池电压降至 7.4V 以下时配置警报。

在继续之前，请确保遥控器正在接收遥测数据，并且传感器已在 EdgeTX 中被发现。

**步骤 1：** 创建一个逻辑开关，当电池电压降至定义值以下时激活。

按 \[MDL] 按钮打开模型设置屏幕并导航到[逻辑开关](../color-radios/model-settings/logical-switches.md)选项卡。创建一个新的逻辑开关，配置如下：

<figure><img src="../.gitbook/assets/howto-batt-alert-screen1.png" alt=""><figcaption><p>为低电压警报创建逻辑开关 LS1</p></figcaption></figure>

* **功能** 使用 **a\<x**
* **V1** 是您要用于此警报的遥测传感器。在此示例中，我们使用 RxBt 遥测传感器
* **V2** 是您希望触发警报的电压值
* **延迟** 建议配置延迟，这样电池电压瞬降不会导致警报触发

当发射机电池低于 7.4V 并持续 10 秒时，此逻辑开关将激活。

<figure><img src="../.gitbook/assets/howto-batt-alert-screen2.png" alt=""><figcaption><p>低电压警报的逻辑开关</p></figcaption></figure>

**步骤 2：** 创建一个[特殊功能](../color-radios/model-settings/special-functions.md)，在逻辑开关激活后播报电池值。

按 \[MDL] 按钮打开模型设置屏幕并导航到[特殊功能](../color-radios/model-settings/special-functions.md)选项卡，创建一个新的特殊功能，配置如下。

* **开关**：这是您在上一步中配置的逻辑开关。在此示例中为 L01
* **功能**：从下拉列表中选择播放值功能，以便在触发时播报电池电压
* **值**：选择您在上一步中配置的遥测传感器。在此示例中为 RxBt
* **重复**：设置重复播报的频率。在此示例中为每 10 秒一次
* **启用**：启用特殊功能使其生效

<figure><img src="../.gitbook/assets/howto-batt-alert-screen3.png" alt=""><figcaption><p>每 10 秒播放一次低电压值的特殊功能</p></figcaption></figure>
