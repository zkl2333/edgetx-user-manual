# SD 卡

<figure><img src="/.gitbook/assets/bwsdcard1.png" alt=""><figcaption><p>SD 卡屏幕</p></figcaption></figure>

**SD 卡**屏幕显示 SD 卡的内容，允许您浏览文件夹并与其中的文件交互。每个文件夹都包含一个 README.txt 文件，说明该文件夹中适合存放哪种类型的文件。在文件夹中选择一个文件后，根据所选文件的类型，您可以执行以下操作：

* **分配位图** - 将所选图像文件分配为当前选定模型的模型图片。
* **复制** - 复制所选文件。
* **删除** - 删除所选文件。
* **执行** - 执行 Lua 脚本，适用于以 **.lua** 结尾的文件。
* **刷写 \[目标]** - 将所选固件文件刷写到指定目标模块，例如刷写引导加载器或内部多协议模块。
* **粘贴** - 粘贴已复制的文件。
* **播放** - 播放所选声音文件。
* **重命名** - 重命名文件。
* **查看文本** - 查看所选的 **.txt**、**.csv** 和 **.lua** 文件。

SD 卡屏幕上显示的文件夹与将遥控器连接到电脑时看到的文件夹一致。以下是 EdgeTX 默认 SD 卡中文件夹的名称和说明：

### BACKUP

存储从 EEPROM 备份的模型文件。仅适用于将模型文件存储在 EEPROM 中的遥控器。

### FIRMWARE

存放需要刷写的固件文件。默认情况下此文件夹为空（除 README.txt 文件外）。选择 .bin 文件时，您可以选择将固件刷写到特定模块。引导加载器菜单中仅会显示此文件夹中的固件文件。

### IMAGES

_注意：此文件夹仅适用于 212x64 显示屏的遥控器。_

存放自定义模型图像文件。默认情况下此文件夹为空（除 README.txt 文件外）。选择一个图像文件后，您可以选择 **分配位图**，将所选图像文件分配为当前选定模型的模型图片。

模型图片的理想尺寸为 64x32 像素，格式应为 .bmp。文件名不应超过 9 个字符，图像格式应为 4 位索引色模式。

{% hint style="info" %}
[https://www.skyraccoon.com/](https://www.skyraccoon.com/) 提供了一个免费的图像资源库，可用于 EdgeTX。
{% endhint %}

### LOGS

存放通过 [特殊功能](../model-select/special-functions.md) **SD 日志** 配置的日志文件。可以通过 **查看文本** 选项查看这些文件。默认情况下此文件夹为空（除 README.txt 文件外）。

### MODELS

存储模型文件、标签信息和预启动检查表。每个模型都有一个 **model[#].yml** 文件，包含所有配置选项。

通过遥控器删除的模型将被移动到此文件夹中包含的 **DELETED** 文件夹。其余模型文件会显示在 **模型选择** 屏幕上。

如果您在模型设置中配置了 **显示检查表** 选项，模型备注文件将存放在此文件夹中。模型备注文件必须是 .txt 文件，并且文件名必须与模型名称完全相同，例如：Mobula6.txt。文件内容由用户自行决定。

### RADIO

此文件夹包含 **radio.yml** 文件，该文件存储所有遥控器配置数据。如果此文件损坏或丢失，遥控器会进入 **紧急模式** 并创建一个带有默认设置的新 radio.yml 文件。

{% hint style="info" %}
如果手动编辑了 radio.yml 文件，必须将 **manuallyEdited:** 标记设置为 **1**，否则遥控器会认为该文件已损坏，进入 **紧急模式** 并创建一个新文件。原始 .yml 文件会保存在文件夹中。
{% endhint %}

### SCREENSHOTS

存放通过 [特殊功能](../model-select/special-functions.md) **截图** 配置的截图图像文件。默认情况下此文件夹为空（除 README.txt 文件外）。

### SCRIPTS

此文件夹及其子文件夹存放 Lua 脚本。默认包含以下子文件夹。您可以从 [https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts) 下载其他 Lua 脚本。

* **Functions** - 存放可以通过 [特殊功能](../../color-radios/model-settings/special-functions.md) **Lua 脚本** 激活的函数 Lua 脚本。默认情况下此文件夹为空（除 README.txt 文件外）。更多关于函数 Lua 脚本的信息，请参考：[Function Scripts](https://luadoc.edgetx.org/part\_i\_-\_script\_type\_overview/function\_scripts)。
* **Mixes** - 存放 Lua 混控脚本。默认情况下此文件夹为空（除 README.txt 文件外）。更多关于混控 Lua 脚本的信息，请参考：[Custom Mixer Scripts](https://luadoc.edgetx.org/part\_i\_-\_script\_type\_overview/mix)。
* **RGBLED** - 存放控制 RGB LED 的 Lua 脚本（如果硬件支持）。
* **Tools** - 存放在 [工具](../../color-radios/radio-settings/tools.md) 屏幕中可用的 Lua 脚本。
* **Wizards** - 存放在 [工具](../../color-radios/radio-settings/tools.md) 屏幕中可用的向导 Lua 脚本。

### SOUNDS

存放适用于遥控器的 EdgeTX 声音包。声音包与 **遥控器设置** 中的 **语音语言** 选项相关联。选择此文件夹中的声音文件后，您可以选择 **播放**，以播放所选声音文件。

声音包可从以下地址手动下载：[https://github.com/EdgeTX/edgetx-sdcard-sounds/releases](https://github.com/EdgeTX/edgetx-sdcard-sounds/releases)。您还可以创建自定义声音以供 EdgeTX 使用。确保您的自定义声音符合以下要求：

* 文件名：123456.wav（最多 6 个字符加 .wav 后缀）
* 采样率：32 kHz（或 16 kHz、8 kHz）
* 位深度：16 位（或 8 位）
* 声道：单声道
* 编解码器：PCM

{% hint style="info" %}
观看以下视频以了解如何制作自定义声音：[https://www.youtube.com/watch?v=DqF7HUsFrnE](https://www.youtube.com/watch?v=DqF7HUsFrnE)
{% endhint %}

按下 **\[PAGE>]** 按钮将进入 **遥控器设置** 屏幕。
