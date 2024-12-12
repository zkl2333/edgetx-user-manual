# SD 卡

<figure><img src="//edgetx-static.zkl2333.com/sdcard.jpg" alt=""><figcaption><p>SD 卡屏幕</p></figcaption></figure>

**SD 卡** 屏幕显示 SD 卡的内容，允许您浏览文件夹并与文件夹中的文件进行交互。所有文件夹都包含一个 README.txt 文件，描述属于该文件夹的文件类型。在选择文件夹中的文件后，您将根据所选文件类型看到以下一些选项：

* **分配位图** - 将所选图像文件分配为当前选定模型的模型图像。
* **复制** - 复制所选文件。
* **删除** - 删除所选文件。
* **执行** - 执行 Lua 脚本。用于以 **.lua** 结尾的文件。
* **刷写 \[目标]** - 将所选固件文件刷写到选定的目标模块。例如：刷写引导加载程序，刷写内部多协议。
* **粘贴** - 粘贴复制的文件。
* **播放** - 播放所选声音文件。
* **重命名** - 重命名文件。
* **查看文本** - 查看所选的 **.txt**、**.csv** 和 **.lua** 文件。

SD 卡屏幕上列出的文件夹与将您的遥控器连接到计算机时看到的文件夹相同。以下是默认 EdgeTX SD 卡附带的所有文件夹的文件夹名称和说明。

### FIRMWARE

将您想要刷写的固件文件放在此文件夹中。此文件夹默认是空的（除了 readme.txt 文件）。选择 .bin 文件时，您将可以选择将固件刷写到特定模块。此外，只有此位置的固件文件才能从引导加载程序菜单中看到。选择 .frsk 文件将为您提供“通过内部 OTA 刷写接收机”的选项。

### IMAGES

将您的自定义模型或启动画面图像文件放在此文件夹中。此文件夹默认是空的（除了 readme.txt 文件）。选择图像文件将为您提供 **分配位图** 选项，将所选图像文件分配为当前选定模型的模型图像。

用于 **模型管理器** 屏幕缩略图的 _模型图像_ 的理想图像尺寸为 156x92 像素。如果您计划使用 _**模型信息**_ 小部件，您可能需要将图像尺寸增加到 192x114 像素，以在增大尺寸时获得更好的视觉质量。出于性能原因，不建议使用更高分辨率的图像。图片格式应为 .png。图像文件名不应超过 9 个字符。

_启动画面图像_ 的理想图像尺寸为实际的遥控器屏幕尺寸（大多数彩色屏幕遥控器为 480x272 像素）。图片格式应为 .png。图像文件名必须为 splash.png。支持的彩色屏幕遥控器的屏幕尺寸可以在 [这里](https://github.com/EdgeTX/edgetx-sdcard) 找到。

用户可以通过在 **IMAGES** 文件夹中添加自定义 `shutdown.png` 来配置在遥控器关机期间显示的自定义图像。

{% hint style="info" %}
注意：虽然较大的图像尺寸可以使用，因为它们会被缩放，但它们占用更多内存，并会导致用户界面性能下降。
{% endhint %}

{% hint style="info" %}
注意：EdgeTX 在图像选择下拉菜单中可以正确显示的最大图像文件数为 799。因此，此文件夹中的文件最大数量不应超过 799。
{% endhint %}

{% hint style="info" %}
[https://www.skyraccoon.com/](https://www.skyraccoon.com/) 有一个可以与 EdgeTX 一起使用的大量免费图像文件库。
{% endhint %}

### LOGS

这是配置在 [特殊功能](../model-settings/special-functions.md) **SD 日志** 中的日志文件的写入位置。这些文件可以通过 **查看文本** 选项查看。此文件夹默认是空的（除了 readme.txt 文件）。

### MODELS

这是存储模型文件、标签信息和飞行前检查清单的地方。每个模型将有一个 **model\[#].yml** 文件，其中包含所有配置的选项。此外，还有一个 **labels.yml** 文件，其中包含您模型的所有标签信息。

通过遥控器删除的模型将被移动到此文件夹中包含的 **DELETED** 文件夹中。剩余的模型文件将在 **模型选择** 屏幕上可见。

在此文件夹中找到的任何未在 **Models.yml** 文件（如果使用）中列出的模型文件将被移动到 **UNUSED** 文件夹中。

如果您在模型设置中配置了 **显示检查清单** 选项，模型备注文件将放在此文件夹中。模型备注文件必须是 .txt 文件，并且必须与其对应的模型具有完全相同的名称，例如：Mobula6.txt。文件中的文本由用户决定。

### RADIO

此文件夹包含 **radio.yml** 文件。此文件包含所有的遥控器配置数据。如果此文件损坏或丢失，遥控器将进入 **紧急模式** 并创建一个具有默认设置的新 radio.yml 文件。

{% hint style="info" %}
如果手动编辑了 radio.yml 文件，则必须在 radio.yml 文件中将 **manuallyEdited:** 标签设置为 **1**，否则遥控器将认为它已损坏，进入 **紧急模式** 并创建一个具有默认设置的新 radio.yml 文件。原始 .yml 文件将保存在文件夹中。
{% endhint %}

### SCREENSHOTS

这是配置在 [特殊功能](../model-settings/special-functions.md) **截图** 中的截图图像文件的写入位置。此文件夹默认是空的（除了 readme.txt 文件）。

### SCRIPTS

此文件夹及其子文件夹是放置 Lua 脚本的地方。默认情况下，它包含以下子文件夹。您可以从 [https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts) 下载其他 Lua 脚本。

* **Functions** - 这是放置可以通过 [特殊功能](../model-settings/special-functions.md) **Lua 脚本** 激活的功能 Lua 脚本的文件夹。此文件夹默认是空的（除了 readme.txt 文件）。有关功能 Lua 脚本的更多信息，请参见：[功能脚本](https://luadoc.edgetx.org/part\_i\_-\_script\_type\_overview/function\_scripts)。
* **Mixes** - 这是放置 Lua 混合器脚本的文件夹。此文件夹默认是空的（除了 readme.txt 文件）。有关混合器 Lua 脚本的更多信息，请参见：[自定义混合器脚本](https://luadoc.edgetx.org/part\_i\_-\_script\_type\_overview/mix)。
* **Tools** - 包含在 [工具](tools.md) 屏幕中可用的 Lua 脚本。
* **Wizards** - 包含在 [工具](tools.md) 屏幕中可用的向导 Lua 脚本。

### SOUNDS

这是放置 EdgeTX 声音包的文件夹。声音包是特定于语言的，并与 **遥控器设置** 中的 **语音语言** 选项相关。选择此文件夹中的声音文件将为您提供 **播放** 选项，播放所选声音文件。

声音包可在以下网址手动下载：[https://github.com/EdgeTX/edgetx-sdcard-sounds/releases](https://github.com/EdgeTX/edgetx-sdcard-sounds/releases)。也可以创建自定义声音以在 EdgeTX 中使用。要使您的自定义声音可被 EdgeTX 播放，请确保它们符合以下标准：

* 文件名：123456.wav（最多 6 个字符加 .wav）
* 采样率：32 kHz（或 16 kHz，8 kHz）
* 位/样本：16（或 8）
* 声道：1，单声道
* 压缩编码：PCM

{% hint style="info" %}
注意：EdgeTX 在声音选择下拉菜单中可以正确显示的最大声音文件数为 799。因此，此文件夹中的文件最大数量不应超过 799。
{% endhint %}

{% hint style="info" %}
有关如何制作可与 EdgeTX 一起使用的自定义声音的演示视频，请查看：[https://www.youtube.com/watch?v=DqF7HUsFrnE](https://www.youtube.com/watch?v=DqF7HUsFrnE)
{% endhint %}

### TEMPLATES

这是存储模型模板文件的地方。默认情况下，它将具有以下子文件夹：

* PERSONAL - 如果您将模型保存为模板，则它们将存储在此处。
* SoarETX - 由 Jesper Frickmann 提供的一组滑翔机模板。
* Wizard - 使用 Lua 向导脚本配置模型的简单模型模板。

### THEMES

此文件夹包含 EdgeTX 的主题包。EdgeTX SD 卡附带几个自动安装的主题包。

<figure><img src="//edgetx-static.zkl2333.com/themes4.jpg" alt=""><figcaption><p>EdgeTX 已安装的主题包</p></figcaption></figure>

您可以从以下网址下载并添加其他主题：[https://github.com/EdgeTX/themes](https://github.com/EdgeTX/themes)。

### WIDGETS

这是存储小部件文件的地方。您可以将其他小部件添加到此文件夹中以与 EdgeTX 一起使用。有关 EdgeTX 预安装的小部件的更多信息，请参见 [小部件](../screen-settings/widgets.md)。您可以从 [https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts) 下载其他小部件。