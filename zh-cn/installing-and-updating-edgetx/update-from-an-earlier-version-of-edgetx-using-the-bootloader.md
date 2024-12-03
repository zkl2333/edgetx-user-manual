# 使用引导加载器从早期版本的 EdgeTX 更新

### 备份 SD 卡内容

**在更新遥控器之前，我们强烈建议您按照以下步骤备份当前 SD 卡内容。**

打开遥控器电源，通过 USB 将其连接到电脑。当遥控器提示选择 USB 模式时，选择 **USB 存储**。

在电脑上，将 SD 卡的全部内容复制到安全的位置。如果需要回滚更新，可以重新使用这些文件。

### SD 卡准备

下载并解压适用于您遥控器类型的 EdgeTX SD 卡内容。SD 卡内容可从以下地址获取：[https://github.com/EdgeTX/edgetx-sdcard/releases](https://github.com/EdgeTX/edgetx-sdcard/releases)

以下是适用于不同遥控器类型的 .zip 文件说明：

- **c480x272zip**（480x272 水平彩屏）- 适用于 TX16s、T16、Horus x10s、Horus x12s 及大多数彩屏遥控器
- **c480x320**（480x320 水平彩屏）
- **c320x480zip**（320x480 垂直彩屏）- 适用于 FlySky Nirvana NV14、EL18
- **bw128x64.zip**（128x64 单色屏）- 适用于除 X9D 系列以外的所有单色屏遥控器
- **bw212x64zip**（212x64 单色屏）- 适用于 X9D、X9D Plus、X9D Plus 2019

将解压后的文件复制到遥控器的 SD 卡中。如果提示覆盖现有文件，选择确认。这仅会更新默认 EdgeTX 安装的一部分 SD 卡文件，不会修改或删除您添加的其他文件（如 LUA 脚本、声音文件、图片、自定义主题、模型文件、遥控器设置文件等）。

下载所需的声音包：[https://github.com/EdgeTX/edgetx-sdcard-sounds/releases](https://github.com/EdgeTX/edgetx-sdcard-sounds/releases)，解压后复制到 SD 卡的 **Sounds** 文件夹。如果提示覆盖现有文件，选择确认。

### 刷写 EdgeTX 引导加载器和固件

下载当前版本的 EdgeTX 固件。可以直接从 GitHub 下载最新版本 .zip 文件（文件名格式：edgetx-firmware-vX.X.X.zip）：[https://github.com/EdgeTX/edgetx/releases/latest](https://github.com/EdgeTX/edgetx/releases/latest)

解压文件后，将对应的 .bin 文件（与您的遥控器类型相符）保存到 SD 卡上的 **Firmware** 文件夹。

打开遥控器，导航至 SD 卡页面，打开 **Firmware** 文件夹，选择刚复制到 SD 卡上的 EdgeTX 固件文件。选择 **刷写引导加载器** 选项。引导加载器将被更新。

{% hint style="info" %}
**注意：** 如果 EdgeTX 检测到引导加载器文件与当前目标不匹配，将不会显示 “刷写引导加载器” 选项。
{% endhint %}

返回主屏幕并关闭遥控器电源。

同时按住微调开关 T4 和 T1 并按电源按钮，将遥控器启动至引导加载器模式。

{% hint style="info" %}
对于 Jumper T-Pro，您需要按住 Boot0 按钮并插入 USB 才能进入 DFU 模式。
{% endhint %}

进入 EdgeTX 引导加载器后，选择 **写入固件** 选项。选择保存到 SD 卡上的 EdgeTX 固件文件，长按刷写。

{% hint style="info" %}
**注意：** 如果引导加载器检测到固件目标与当前运行的目标不匹配，将显示错误消息，提示固件无效。
{% endhint %}

刷写完成后，选择 **退出**。遥控器将重启，您将看到 **Welcome EdgeTX**。

### 恭喜，您已成功更新到 EdgeTX！
