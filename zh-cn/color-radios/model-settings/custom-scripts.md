# 自定义脚本

<figure><img src="../../.gitbook/assets/color_model_custom-lua.png" alt=""><figcaption><p>自定义混控脚本</p></figcaption></figure>

自定义（混控）脚本将一个或多个值作为输入，在 Lua 代码中进行一些处理，然后输出一个或多个值。每个模型可以有多个与之关联的混控脚本，这些脚本会定期运行。它们的行为类似于标准的 EdgeTX 混控器，但同时它们提供了更灵活和强大的工具。

典型用例：

* 替代对模型功能_不重要_的复杂混控
* 对输入进行复杂处理并对其当前状态和/或历史记录做出反应
* 遥测值过滤

{% hint style="warning" %}
如果脚本输出用作`混控源`，并且**脚本因任何原因被终止**，那么_整个**混控行都将被禁用**！在将它们用于主要控制时要谨慎。建议设置一个后备混控行，以便在混控脚本因任何原因终止时使用。
{% endhint %}

<figure><img src="../../.gitbook/assets/color_model_custom-lua_edit.png" alt=""><figcaption><p>混控脚本的输入和输出</p></figcaption></figure>

这是一个混控脚本示例，它接受一个源和常量值，并有两个输出，这些输出可在混控器中作为源选择。
