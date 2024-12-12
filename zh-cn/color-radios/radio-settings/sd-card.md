## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and flight modes to suit your preferences.
- **Telemetry Support**: Monitor real-time telemetry data from your model while in flight.
- **Cross-platform Compatibility**: EdgeTX is compatible with a wide range of RC transmitters, including those from popular brands like FrSky and Jumper.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your specific transmitter model from the official EdgeTX website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings and model setups using the intuitive EdgeTX interface.
4. **Calibration**: Calibrate your transmitter controls and sensors to ensure accurate flight performance.
5. **Testing**: Perform a test flight in a safe environment to ensure everything is working correctly.

### Conclusion

EdgeTX is a powerful firmware that offers a high level of customization and control for your radio-controlled models. Whether you are a beginner or an experienced pilot, EdgeTX has the features you need to take your flying experience to the next level.

# SD 卡

<figure><img src="/.gitbook/assets/sdcard.jpg" alt=""><figcaption><p>SD 卡屏幕</p></figcaption></figure>

**SD 卡** 屏幕显示您的 SD 卡内容，允许您浏览文件夹并与文件夹中的文件进行交互。所有文件夹都包含一个 README.txt 文件，描述了属于该文件夹的文件类型。在选择文件夹中的文件后，根据所选文件类型，您将看到以下一些选项：

- **分配位图** - 将所选图像文件分配为当前选定模型的模型图像。
- **复制** - 复制所选文件。
- **删除** - 删除所选文件。
- **执行** - 执行 Lua 脚本。用于以 **.lua** 结尾的文件。
- **刷写 \[目标]** - 将所选固件文件刷写到所选目标模块。示例：刷写引导加载程序，刷写内部多模块。
- **粘贴** - 粘贴已复制的文件。
- **播放** - 播放所选声音文件。
- **重命名** - 重命名文件。
- **查看文本** - 查看所选的 **.txt**、**.csv** 和 **.lua** 文件。&#x20;

SD 卡屏幕上列出的文件夹与将无线电连接到计算机时看到的相同。以下是默认 EdgeTX SD 卡附带的所有文件夹的名称和说明。&#x20;

### 固件

将要刷写的固件文件放入此文件夹。默认情况下，此文件夹为空（除了 readme.txt 文件）。选择 .bin 文件时，您将有选项将固件刷写到特定模块。此外，仅在此位置的固件文件才会在引导加载程序菜单中可见。选择 .frsk 文件将使您可以选择“通过 int OTA 刷写 RX”。

### 图像

将自定义模型或启动屏幕图像文件放入此文件夹。默认情况下，此文件夹为空（除了 readme.txt 文件）。选择图像文件将使您可以**分配位图**，将所选图像文件分配为当前选定模型的模型图像。

用于**模型管理器**屏幕上缩略图使用的 _模型图像_ 的理想尺寸为 156x92 像素。如果您计划使用 _**模型信息**_ 小部件，则可能需要将图像尺寸增加到 192x114 像素，以获得增加尺寸时更好的视觉质量。出于性能原因，不建议使用更高分辨率的图像。图片格式应为 .png。图像文件名不应超过 9 个字符。&#x20;

_启动屏幕图像_ 的理想尺寸是实际无线电屏幕尺寸（大多数彩色屏幕无线电为 480x272 像素）。图片格式应为 .png。图像文件名必须为 splash.png。支持的彩色屏幕无线电的屏幕尺寸可以在[此处](https://github.com/EdgeTX/edgetx-sdcard)找到。&#x20;

用户可以通过向 **图像** 文件夹添加自定义 `shutdown.png` 来配置在无线电关机时显示的自定义图像。

{% hint style="info" %}
注意：尽管较大的图像尺寸会因为会被缩放而能够正常工作，但它们会占用更多内存并导致用户界面性能下降。
{% endhint %}

{% hint style="info" %}
注意：EdgeTX 可以正确显示的图像文件的最大数量为 799。因此，此文件夹中的文件数量不应超过 799。
{% endhint %}

{% hint style="info" %}
[https://www.skyraccoon.com/](https://www.skyraccoon.com/) 提供了大量可与 EdgeTX 一起使用的免费图像文件。
{% endhint %}

### 日志

这是配置在[特殊功能](../model-settings/special-functions.md) **SD 日志**中的日志文件所写入的位置。这些文件可以使用 **查看文本** 选项查看。默认情况下，此文件夹为空（除了 readme.txt 文件）。

### 模型

这是存储模型文件、标签信息和预飞检查表的位置。每个模型都将有一个包含所有配置选项的 **model\[#].yml** 文件。此外，还有一个包含所有模型标签信息的 **labels.yml** 文件。&#x20;

通过无线电删除的模型将被移动到此文件夹中包含的 **DELETED** 文件夹中。剩余的模型文件将在 **模型选择** 屏幕上可见。

在此文件夹中找到的任何未列在 **Models.yml** 文件中（如果使用）的模型文件将被移动到 **UNUSED** 文件夹中。

如果在模型设置中配置了 **显示检查表** 选项，则模型注释文件将放在此文件夹中。模型注释文件必须是 .txt 文件，并且必须与其所属模型的名称完全相同，例如：Mobula6.txt。文件中的文本由用户决定。

### 无线电

此文件夹包含 **radio.yml** 文件。此文件包含所有无线电配置数据。如果此文件损坏或丢失，无线电将进入 **紧急模式**，并将使用默认设置创建一个新的 radio.yml 文件。&#x20;

{% hint style="info" %}
如果手动编辑了 radio.yml 文件，则必须在 radio.yml 文件中将 **manuallyEdited:** 标签设置为 **1**，否则无线电将认为其已损坏，进入 **紧急模式**，并将使用默认设置创建一个新的 radio.yml 文件。原始 .yml 文件将保存在文件夹中。
{% endhint %}

### 屏幕截图

这是配置在[特殊功能](../model-settings/special-functions.md) **屏幕截图** 中的屏幕截图图像文件所写入的位置。默认情况下，此文件夹为空（除了 readme.txt 文件）。

### 脚本

此文件夹及其子文件夹是 Lua 脚本的存放位置。默认情况下，它包含以下子文件夹。您可以从 [https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts) 下载其他 Lua 脚本。

- **Functions** - 此文件夹是必须放置可以通过[特殊功能](../model-settings/special-functions.md) **Lua 脚本** 激活的函数 Lua 脚本的位置。默认情况下，此文件夹为空（除了 readme.txt 文件）。有关函数 Lua 脚本的更多信息，请参阅：[函数脚本](https://luadoc.edgetx.org/part_i_-_script_type_overview/function_scripts)。
- **Mixes** - 此文件夹是必须放置 Lua 混音器脚本的位置。默认情况下，此文件夹为空（除了 readme.txt 文件）。有关混音器 Lua 脚本的更多信息，请参阅：[自定义混音器脚本](https://luadoc.edgetx.org/part_i_-_script_type_overview/mix)
- **Tools** - 包含在[工具](tools.md) 屏幕中可用的 Lua 脚本。&#x20;
- **Wizards** - 包含在[工具](tools.md) 屏幕中可用的向导 Lua 脚本。&#x20;

### 声音

此文件夹是 EdgeTX 无线电的声音包所放置的位置。声音包是特定语言的，并与 **无线电设置** 中的 **语音语言** 选项相关联。从此文件夹中选择声音文件将给您 **播放** 选项，用于播放所选声音文件。

声音包可在以下位置手动下载：[https://github.com/EdgeTX/edgetx-sdcard-sounds/releases](https://github.com/EdgeTX/edgetx-sdcard-sounds/releases)。还可以创建自定义声音以在 EdgeTX 中使用。为了使 EdgeTX 能够播放您的自定义声音，请确保它们符合以下标准：

- 文件名：123456.wav（最多 6 个字符加 .wav）
- 采样率：32 kHz（或 16 kHz、8 kHz）
- 每样本位数：16（或 8）
- 轨道：1，单声道
- 压缩编解码器：PCM

{% hint style="info" %}
注意：EdgeTX 可以正确显示的声音文件的最大数量为 799。因此，此文件夹中的文件数量不应超过 799。
{% endhint %}

{% hint style="info" %}
要查看如何制作可与 EdgeTX 一起使用的自定义声音的演示视频，请访问：[https://www.youtube.com/watch?v=DqF7HUsFrnE](https://www.youtube.com/watch?v=DqF7HUsFrnE)
{% endhint %}

### 模板

这是存储模型模板文件的位置。默认情况下，它将具有以下子文件夹：

- PERSONAL - 如果将您的模型保存为模板，则它们将存储在此处。&#x20;
- SoarETX - 由 Jesper Frickmann 提供的滑翔机模板集合
- Wizard - 使用 Lua 向导脚本配置模型的简单模型模板。

### 主题

此文件夹包含 EdgeTX 的主题包。EdgeTX SD 卡自动安装了几个主题包。&#x20;

您可以从以下位置下载并添加其他主题：[https://github.com/EdgeTX/themes](https://github.com/EdgeTX/themes)。

### 小部件

这是存储小部件文件的位置。您可以向此文件夹添加其他小部件以与 EdgeTX 一起使用。有关预先安装在 EdgeTX 中的小部件的更多信息，请参阅[小部件](../screen-settings/widgets.md)。您可以从 [https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts) 下载其他小部件。