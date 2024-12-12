# SD卡

<figure><img src="/.gitbook/assets/bwsdcard1.png" alt=""><figcaption><p>SD卡屏幕</p></figcaption></figure>

**SD卡**屏幕显示SD卡的内容，允许您浏览文件夹并与文件夹中的文件进行交互。所有文件夹都包含一个README.txt文件，描述了该文件夹中应包含的文件类型。在选择文件夹中的文件后，您将根据所选文件类型看到以下一些选项：

* **分配位图** - 将所选图像文件分配为当前选定模型的模型图像。
* **复制** - 复制所选文件。
* **删除** - 删除所选文件。
* **执行** - 执行Lua脚本。用于以**.lua**结尾的文件。
* **刷写\[目标]** - 将所选固件文件刷写到选定的目标模块。例如：刷写引导加载程序，刷写内部多协议。
* **粘贴** - 粘贴复制的文件。
* **播放** - 播放所选的声音文件。
* **重命名** - 重命名文件。
* **查看文本** - 查看所选的**.txt**、**.csv**和**.lua**文件。

SD卡屏幕上列出的文件夹与将您的电台连接到计算机时看到的文件夹相同。以下是默认EdgeTX SD卡附带的所有文件夹的名称和说明。

### BACKUP

备份文件夹包含从EEPROM备份的模型文件。此文件夹仅在将模型文件存储在EEPROM中的电台上存在。

### FIRMWARE

将您想要刷写的固件文件放在此文件夹中。此文件夹默认是空的（除了readme.txt文件）。选择.bin文件时，您将有机会将固件刷写到特定模块。此外，只有此位置的固件文件在引导加载程序菜单中可见。

### IMAGES

_注意：此文件夹仅用于212x64显示屏的电台。_

将您的自定义模型图像文件放在此文件夹中。此文件夹默认是空的（除了readme.txt文件）。选择图像文件将为您提供**分配位图**选项，将所选图像文件分配为当前选定模型的模型图像。

_模型图像_的理想图像尺寸为64x32像素。图片格式应为.bmp，图像文件名不应超过9个字符，图像格式应为4位索引彩色模式。

{% hint style="info" %}
[https://www.skyraccoon.com/](https://www.skyraccoon.com/) 有一个可以与EdgeTX一起使用的大量免费图像文件库。
{% endhint %}

### LOGS

这是配置在[特殊功能](../model-select/special-functions.md) **SD日志**中写入的日志文件所在的位置。这些文件可以通过**查看文本**选项查看。此文件夹默认是空的（除了readme.txt文件）。

### MODELS

这是存储模型文件、标签信息和飞行前检查表的地方。每个模型将有一个**model\[#].yml**文件，其中包含所有配置选项。

通过电台删除的模型将被移动到此文件夹中包含的**DELETED**文件夹中。剩余的模型文件将在**模型选择**屏幕上可见。

如果您在模型设置中配置了**显示检查表**选项，模型备注文件将放在此文件夹中。模型备注文件必须是.txt文件，并且必须与其对应的模型名称完全相同，例如：Mobula6.txt。文件中的文本由用户决定。

### RADIO

此文件夹包含**radio.yml**文件。此文件包含所有电台配置数据。如果此文件损坏或丢失，电台将进入**紧急模式**并创建一个具有默认设置的新radio.yml文件。

{% hint style="info" %}
如果手动编辑radio.yml文件，必须在radio.yml文件中将**manuallyEdited:**标签设置为**1**，否则电台将认为其已损坏，进入**紧急模式**并创建一个具有默认设置的新radio.yml文件。原始.yml文件将保存在文件夹中。
{% endhint %}

### SCREENSHOTS

这是配置在[特殊功能](../model-select/special-functions.md) **截图**中写入的截图图像文件所在的位置。此文件夹默认是空的（除了readme.txt文件）。

### SCRIPTS

此文件夹及其子文件夹是放置Lua脚本的地方。默认情况下，它包含以下子文件夹。您可以从[https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts)下载其他Lua脚本。

* **Functions** - 此文件夹是放置可以通过[特殊功能](../../color-radios/model-settings/special-functions.md) **Lua脚本**激活的函数Lua脚本的地方。此文件夹默认是空的（除了readme.txt文件）。有关函数Lua脚本的更多信息，请参见：[函数脚本](https://luadoc.edgetx.org/part\_i\_-\_script\_type\_overview/function\_scripts)。
* **Mixes** - 此文件夹是放置Lua混合器脚本的地方。此文件夹默认是空的（除了readme.txt文件）。有关混合器Lua脚本的更多信息，请参见：[自定义混合器脚本](https://luadoc.edgetx.org/part\_i\_-\_script\_type\_overview/mix)。
* **RGBLED** - 此文件夹是存储控制RGB LED（如果硬件可用）的Lua脚本的地方。
* **Tools** - 包含在[工具](../../color-radios/radio-settings/tools.md)屏幕中可用的Lua脚本。
* **Wizards** - 包含在[工具](../../color-radios/radio-settings/tools.md)屏幕中可用的向导Lua脚本。

### SOUNDS

此文件夹是放置您的电台的EdgeTX声音包的地方。声音包是特定语言的，并与**电台设置**中的**语音语言**选项相关。选择此文件夹中的声音文件将为您提供**播放**选项，播放所选的声音文件。

声音包可在以下网址手动下载：[https://github.com/EdgeTX/edgetx-sdcard-sounds/releases](https://github.com/EdgeTX/edgetx-sdcard-sounds/releases)。也可以创建自定义声音以在EdgeTX中使用。为了使您的自定义声音可被EdgeTX播放，请确保它们符合以下标准：

* 文件名：123456.wav（最多6个字符加.wav）
* 采样率：32 kHz（或16 Khz，8Khz）
* 位/样本：16（或8）
* 轨道：1，单声道
* 压缩编码：PCM

{% hint style="info" %}
有关如何制作可与EdgeTX一起使用的自定义声音的演示视频，请查看：[https://www.youtube.com/watch?v=DqF7HUsFrnE](https://www.youtube.com/watch?v=DqF7HUsFrnE)
{% endhint %}

按下**\[PAGE>]**按钮将带您进入**电台设置**屏幕。