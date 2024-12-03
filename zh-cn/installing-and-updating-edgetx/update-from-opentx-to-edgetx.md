# 使用 EdgeTX Buddy 从 OpenTX 迁移到 EdgeTX

要从 OpenTX 更新到 EdgeTX，您需要在电脑上安装 OpenTX 和 EdgeTX Companion。您可以通过以下链接下载 OpenTX Companion：[https://downloads.open-tx.org/2.3/release/companion/](https://downloads.open-tx.org/2.3/release/companion/)。EdgeTX Companion 可通过以下链接下载：[https://github.com/EdgeTX/edgetx/releases](https://github.com/EdgeTX/edgetx/releases)（文件名格式：edgetx-cpn-\[操作系统]-\[版本].zip）。

### 备份模型

打开遥控器，导航至 **遥控器设置** -> **硬件**，滚动到屏幕底部并选择 **EEPROM 备份**。如果没有该选项，说明您的遥控器未使用 EEPROM 存储数据，可以跳过此步骤。

<figure><img src="/.gitbook/assets/update14.png" alt=""><figcaption></figcaption></figure>

打开遥控器电源后，通过 USB 将其连接到电脑。当遥控器提示选择 USB 模式时，选择 **USB 存储**。

在电脑上，将 SD 卡的全部内容复制到安全位置。如果以后需要切换回 OpenTX，这些文件仍可使用。如果您已进行 EEPROM 备份，请检查 EEPROM 文件夹，确保其中有最近的备份文件。

启动 OpenTX Companion。

选择左侧屏幕中的 **备份遥控器到文件** 图标。选择保存位置（如桌面）并为文件命名。

<figure><img src="/.gitbook/assets/update1.png" alt=""><figcaption></figcaption></figure>

保存文件后，关闭 OpenTX Companion。

删除 SD 卡中 **Model** 文件夹的内容，确保该文件夹为空。

断开遥控器与电脑的连接并关闭遥控器。

### 刷写 EdgeTX 引导加载器和固件

在遥控器关闭的情况下，通过 USB 将其连接到电脑。这会将遥控器连接到电脑的 DFU 模式。

{% hint style="info" %}
对于 Jumper T-Pro，您需要按住 Boot0 按钮并插入 USB 才能进入 DFU 模式。
{% endhint %}

访问以下网站：[https://buddy.edgetx.org/](https://buddy.edgetx.org/)

选择 **固件版本** 和 **遥控器型号**，然后点击 **通过 USB 刷写**。

<figure><img src="/.gitbook/assets/update2.png" alt=""><figcaption></figcaption></figure>

在下一屏幕，选择 **STM32 Bootloader** 设备并点击 **下一步**。

<figure><img src="/.gitbook/assets/update3.png" alt=""><figcaption></figcaption></figure>

如果未显示 **STM32 Bootloader** 设备，选择 **添加新设备**。在弹出窗口中选择 **STM32 Bootloader** 并点击 **连接**。

<figure><img src="/.gitbook/assets/update4.png" alt=""><figcaption></figcaption></figure>

选择 **STM32 Bootloader** 设备并点击 **下一步** 后，将显示确认屏幕以验证您的设置。确认所有内容正确（版本、遥控器和设备）后，点击 **开始刷写** 按钮。

<figure><img src="/.gitbook/assets/update5.png" alt=""><figcaption></figcaption></figure>

EdgeTX Buddy 将开始刷写过程，屏幕会显示进度。

<figure><img src="/.gitbook/assets/update6.png" alt=""><figcaption></figcaption></figure>

刷写完成后，点击完成屏幕上的 **设置您的 SD 卡** 链接，这会带您进入 SD 卡内容页面。

### 准备 SD 卡

<figure><img src="/.gitbook/assets/update7.png" alt=""><figcaption></figcaption></figure>

断开遥控器与电脑的连接并启动遥控器。您会看到遥控器显示 EdgeTX 启动画面，但仍会听到“欢迎使用 OpenTX”的提示音。这是正常现象，我们将在下一步通过更新 SD 卡内容来安装 EdgeTX 声音包。

打开遥控器电源后，通过 USB 将其连接到电脑。当遥控器提示选择 USB 模式时，选择 **USB 存储**。点击 **选择 SD 卡** 选项，然后导航到 EdgeTX 的 SD 卡。

<figure><img src="/.gitbook/assets/update8.png" alt=""><figcaption></figcaption></figure>

EdgeTX SD 卡将作为 USB 驱动器挂载到您的电脑。选择 USB 驱动器后点击 **选择文件夹**。

<figure><img src="/.gitbook/assets/update9.png" alt=""><figcaption></figcaption></figure>

{% hint style="info" %}
您的电脑可能会提示要求 EdgeTX Buddy 获取 SD 卡内容的权限。这是正常的，Buddy 需要权限以修改 SD 卡上的文件。
{% endhint %}

在 SD 卡内容页面，确认固件版本和遥控器型号仍然正确，然后选择所需的声音包语言。点击 **应用更改**。状态窗口会弹出并显示安装进度。文件安装完成后，状态窗口会自动关闭。

<figure><img src="/.gitbook/assets/update10.png" alt=""><figcaption></figcaption></figure>

此时，EdgeTX 引导加载器、固件和 SD 卡内容已安装完成。最后一步是将模型从 OpenTX 转换为 EdgeTX 格式并上传到遥控器。您现在可以关闭 EdgeTX Buddy。

### 从 OpenTX 恢复模型

启动 EdgeTX Companion。如果尚未创建遥控器配置文件，请创建一个并确保其为活动配置文件。

在 Companion 左上角，选择 **文件** -> **打开**，然后选择之前备份的 OpenTX 文件。将显示警告信息，点击 **OK**。

<figure><img src="/.gitbook/assets/update11.png" alt=""><figcaption></figcaption></figure>

在 EdgeTX Companion 中，您将看到所有来自 OpenTX 的模型。点击 **写入模型和设置到遥控器** 按钮。系统将提示您会覆盖遥控器上的所有模型，点击 **是**。

<figure><img src="/.gitbook/assets/update12.png" alt=""><figcaption></figcaption></figure>

模型和设置将写入遥控器。完成后将显示提示信息，点击 **OK**。断开遥控器与 USB 的连接并关闭 EdgeTX Companion。

<figure><img src="/.gitbook/assets/update13.png" alt=""><figcaption></figcaption></figure>

### 恭喜，您已成功迁移到 EdgeTX！

您的所有模型已更新为 EdgeTX 的 .yml 格式，并安装了 EdgeTX 声音包。您现在可以开始使用 EdgeTX。

{% hint style="info" %}
_遗憾的是，无法从 OpenTX 直接迁移小部件的设置，您需要在 EdgeTX 中手动重新设置。_
{% endhint %}

{% hint style="info" %}
OpenTX 的 Lua 脚本仍保留在 SD 卡上，但并非所有脚本都兼容 EdgeTX。可能需要重新安装才能使其正常工作。您可以在此处找到兼容 EdgeTX 的 Lua 脚本列表：[https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts)
{% endhint %}
