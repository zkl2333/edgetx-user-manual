# 模型备注和检查清单

<div><figure><img src="/.gitbook/assets/screenshot_tx16s_25-12-28_08-50-01.png" alt=""><figcaption></figcaption></figure> <figure><img src="/.gitbook/assets/image (5).png" alt=""><figcaption></figcaption></figure></div>

当您开始使用更复杂的模型，或者将某些模型退役为仅偶尔飞行时，记住各种开关和控件的配置方式，或者飞机启动或设置的某些特殊性可能会开始成为一个挑战。这正是模型备注派上用场的地方。

模型备注有三种常规操作模式：

1. 按需查看备注（意味着您需要在需要时手动调出查看）
2. 每次切换到模型时显示（即作为检查清单）
3. 作为交互式检查清单（要求您在开始使用模型之前勾选每一项）

{% hint style="info" %}
将模型备注用作检查清单或交互式检查清单并不妨碍您同时按需显示它们。您可以根据需要将它们组合使用——既作为检查清单，又作为附加备注。
{% endhint %}

要开始使用模型备注，您需要在遥控器 SD 卡/存储盘的 `\MODELS` 文件夹中创建一个文本文件。文件名必须与您要使用的模型名称完全相同，文件名/扩展名必须以 `.txt` 结尾。模型名称中的空格应替换为下划线。例如，模型名称 "Crux3 NLR" 将变为 `Crux3_NLR.txt`。

{% hint style="warning" %}
由于这些文件的长度原因，您无法在遥控器上创建或编辑它们，只能查看。由于它们是基本文本文件，可以在任何计算机上使用标准文本编辑器创建和编辑，也可以通过 EdgeTX Companion 进行编辑。
{% endhint %}

## 格式化

模型备注文件就是简单的文本文件，查看或编辑它们不需要特殊的格式或软件。但是，您可以使用一些特殊序列来显示开关箭头、EdgeTX 中使用的其他特殊图标，以及将某些行标记为检查清单项目。

{% hint style="danger" %}
彩屏和黑白屏遥控器之间需要注意的一个区别是长行的处理方式。彩屏会"换行"长行，使其不会被截断。黑白屏则会截断长行。因此，您需要确保手动限制行的长度，以免内容"跑到屏幕外"而无法阅读。
{% endhint %}

### 开关符号

在编写备注时，您可能希望引用开关位置，可以使用一些特殊文本序列来显示箭头，例如开关向上和向下箭头。

* `\up` 将显示开关向上箭头
* `\dn` 将显示开关向下箭头

因此，您可以这样写：

```
SC\up = Self-Level
SC --  = Horizon
SC\dn = Air
```

这在遥控器显示屏上将显示为：

<figure><img src="/.gitbook/assets/2025-12-28_08-27.png" alt=""><figcaption><p>彩屏显示示例</p></figcaption></figure>

{% hint style="warning" %}
彩屏和黑白屏上的字符对齐方式不同……`\up` 和 `\dn` 符号在黑白屏上只占一个字符宽度，因此 `-` 的大小与箭头相同。
{% endhint %}

因此，黑白屏对应的格式化写法为：

```
SC\up = Self-Level
SC- = Horizon
SC\dn = Air
```

<figure><img src="/.gitbook/assets/image (1).png" alt=""><figcaption><p>黑白屏显示示例</p></figcaption></figure>

### 交互式检查清单项目

使用交互式检查清单时，要将某行标记为检查清单项目（从而显示复选框并要求勾选），只需在该行开头加上等号。

```
这一行不会成为检查清单项目
=桨叶已固定
=电池已充满电
=起飞前已获得 GPS 锁定
```

<div><figure><img src="/.gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure> <figure><img src="/.gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure></div>

### 其他符号

您还可以访问其他符号，例如用于指示输入、混控、特殊功能、全局变量等的符号，方法是使用 `\` 转义字符加上 200 到 255 之间的数字。

例如，模型备注中的以下代码将在彩屏上产生如下输出：

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

<figure><img src="/.gitbook/assets/image (2).png" alt=""><figcaption><p>彩屏上的显示效果。前导数字仅供参考。</p></figcaption></figure>

## 使用方法

如开头所述，有三种常规操作模式，如下所示。

### 按需查看模型备注

检测到后，在彩屏遥控器上可以通过快捷菜单/主菜单选择模型备注，在黑白屏遥控器上则通过弹出菜单选择（长按 ENTER 键显示）。

<br>

<figure><img src="/.gitbook/assets/screenshot_tx16s_25-12-28_08-33-15.png" alt=""><figcaption><p>彩屏快捷菜单中的模型备注入口</p></figcaption></figure>

<figure><img src="/.gitbook/assets/image (3).png" alt=""><figcaption><p>黑白屏上的模型备注入口</p></figcaption></figure>

### 检查清单

在预启动检查下启用"检查清单"项后（[彩屏](../color-radios/model-settings/model-setup/preflight-checks.md)、[黑白屏](../bw-radios/model-select/setup.md#pre-start-checks)），每当您选择该模型（切换模型或开机时），备注将被显示，您可以滚动查看，并在准备好继续后关闭。与交互式检查清单不同，您不需要勾选检查清单项目（它们也不会显示为可勾选的项目）。可以将其视为"启动时显示模型备注"选项。

### 交互式检查清单

在预启动检查下同时启用"交互式"选项后（[彩屏](../color-radios/model-settings/model-setup/preflight-checks.md)、[黑白屏](../bw-radios/model-select/setup.md#pre-start-checks)），当您有格式正确的模型备注文件时，备注将被显示，您需要勾选所有检查清单项目后才能继续使用模型。屏幕会根据需要自动滚动，跳转到下一个需要勾选的项目，这样您可以混合使用说明性备注和检查清单项目。所有项目完成后，将跳转到检查清单底部，此时您可以退出。

<br>

<figure><img src="/.gitbook/assets/screenshot_tx16s_25-12-28_09-18-12.png" alt=""><figcaption><p>彩屏上的交互式检查清单</p></figcaption></figure>

<figure><img src="/.gitbook/assets/image (6).png" alt=""><figcaption><p>黑白屏上的交互式检查清单</p></figcaption></figure>
