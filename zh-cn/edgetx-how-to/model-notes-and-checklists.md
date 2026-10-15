# 模型备注与检查表

<div><figure><img src="/.gitbook/assets/screenshot_tx16s_25-12-28_08-50-01.png" alt=""><figcaption></figcaption></figure> <figure><img src="/.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure></div>

当您开始使用更复杂的模型，或者让某些模型“退役”、只是偶尔才飞时，要记住各个开关和控件是如何配置的，或者某架飞行器在启动或设置上的特殊之处，可能会成为一个挑战。这时模型备注（Model Notes）就能派上用场。\
\
模型备注有三种常规使用方式：

1. 按需查看的备注（即需要查看时由您自行调出）
2. 每次切换到该模型时显示（即作为检查表）
3. 作为交互式检查表（要求您逐项勾选后才能开始使用该模型）

{% hint style="info" %}
将模型备注用作检查表或交互式检查表，并不妨碍您同时按需查看它们。您可以根据需要将其作为检查表和附加备注的组合来使用。
{% endhint %}

要开始使用模型备注，您需要在遥控器 SD 卡/存储驱动器的 `\MODELS` 文件夹中创建一个文本文件。其名称应与您要使用它的模型名称完全相同，文件扩展名应为 `.txt`。模型名称中的空格应替换为下划线。例如，模型名称 "Crux3 NLR" 对应的文件名为 `Crux3_NLR.txt`。

{% hint style="warning" %}
由于这些文件的长度原因，您无法在遥控器上创建或编辑它们，只能查看。由于它们是普通文本文件，可以在任何电脑上使用标准文本编辑器创建和编辑，也可以通过 EdgeTX Companion 进行编辑。
{% endhint %}

## 格式

模型备注文件只是普通的文本文件，查看或编辑它们不需要特殊的格式或软件。不过，您可以使用一些特殊序列来显示开关箭头、EdgeTX 中使用的其他特殊图标，以及将某些行指定为检查表项目。

{% hint style="danger" %}
需要注意的一个彩屏与单色屏遥控器之间的差异是对长行的处理方式。彩屏会对长行自动“换行”，因此不会被截断；单色屏则会截断长行。因此您需要手动限制每行的长度，以免内容超出屏幕而无法阅读。
{% endhint %}

### 开关符号

在编写备注时，您可能需要引用开关位置。可以使用一些特殊的文本序列来显示箭头，例如开关的向上和向下箭头。

* `\up` 显示开关向上箭头
* `\dn` 显示开关向下箭头

\
这样就可以写出如下内容：

```
SC\up = Self-Level
SC --  = Horizon
SC\dn = Air
```

在发射机屏幕上将显示为：

<figure><img src="/.gitbook/assets/2025-12-28_08-27.png" alt=""><figcaption><p>彩屏显示示例</p></figcaption></figure>

{% hint style="warning" %}
彩屏和单色屏上的字符对齐方式不同……在单色屏上，`\up` 和 `\dn` 符号只占一个字符宽度，因此 `-` 与箭头的宽度相同。
{% endhint %}

对应的单色屏格式为：

```
SC\up = Self-Level
SC- = Horizon
SC\dn = Air
```

<figure><img src="/.gitbook/assets/image (1).png" alt=""><figcaption><p>单色屏显示示例</p></figcaption></figure>

### 交互式检查表项目

使用交互式检查表时，要将某一行指定为检查表项目（从而显示一个需要勾选的复选框），只需以等号开头即可。

```
This line will not be a checklist item
=Props secure
=Battery fully charged
=GPS lock before takeoff 
```

<div><figure><img src="/.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure> <figure><img src="/.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure></div>

### 其他符号

您还可以使用 `\` 转义字符加上 200 到 255 之间的数字，来使用其他符号，例如表示输入、混控、特殊功能、全局变量等的符号。\
\
例如，模型备注中的以下代码在彩屏上将显示为下图所示的效果：

```
200\200
201\201

210\210
211\211
212\212
213\213
214\214
215\215
```

<figure><img src="/.gitbook/assets/image (2).png" alt=""><figcaption><p>彩屏上的显示效果。行首数字仅供参考。</p></figcaption></figure>

## 使用方法

如开头所述，共有以下三种常规使用方式。

### 按需查看模型备注

检测到模型备注后，在彩屏遥控器上可以通过快捷菜单/主菜单选择它；在单色屏遥控器上则通过弹出菜单选择（长按 Enter 键显示该菜单）。\
<br>

<figure><img src="/.gitbook/assets/screenshot_tx16s_25-12-28_08-33-15.png" alt=""><figcaption><p>彩屏快捷菜单中的模型备注入口</p></figcaption></figure>

<figure><img src="/.gitbook/assets/image (3).png" alt=""><figcaption><p>单色屏上的模型备注入口</p></figcaption></figure>

### 检查表

在预启动检查中启用检查表选项后（[彩屏](../color-radios/model-settings/model-setup/preflight-checks.md)、[单色屏](../bw-radios/model-select/setup.md#启动前检查)），每当您选择该模型时（无论是切换到该模型还是开机时），都会显示备注，您可以滚动查看，准备好后即可关闭。与交互式检查表不同，您无需勾选检查表项目（它们也不会显示为可勾选的项目）。可以将其视为“启动时显示模型备注”选项。

### 交互式检查表

在预启动检查中同时启用交互式选项后（[彩屏](../color-radios/model-settings/model-setup/preflight-checks.md)、[单色屏](../bw-radios/model-select/setup.md#启动前检查)），如果模型备注文件格式正确，将显示模型备注，并且您必须勾选所有检查表项目后才能继续使用该模型。屏幕会根据需要自动滚动，跳转到下一个需要勾选的项目，因此您可以将说明性备注与检查表项目混合编写。所有项目完成后，会跳转到检查表底部，此时即可退出。\
<br>

<figure><img src="/.gitbook/assets/screenshot_tx16s_25-12-28_09-18-12.png" alt=""><figcaption><p>彩屏上的交互式检查表</p></figcaption></figure>

<figure><img src="/.gitbook/assets/image (6).png" alt=""><figcaption><p>单色屏上的交互式检查表</p></figcaption></figure>
