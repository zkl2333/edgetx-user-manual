---
description: 在基于 STM32H7 的遥控器上更新固件
---

# 更新 STM32H7 遥控器

由于架构设计不同，使用 STM32H7 微控制器（MCU）的遥控发射器，其更新方式与您可能熟悉的旧款基于 STM32F2 和 STM32F4 的设计有所不同（即 [DFU 模式刷写](update-from-opentx-to-edgetx-1.md)，或将文件复制到 SD 卡/板载存储，然后[从固件刷写引导加载器、再从引导加载器刷写固件](update-from-an-earlier-version-of-edgetx-using-the-bootloader.md)）。STM32H7 MCU 仍然具有 DFU 模式，但无法通过传统的 DFU 工具进行刷写。

目前基本上有两种刷写方法：

* 引导加载器 + UF2 文件复制
* EdgeTX Companion（v2.12 或更高版本）

## 文件复制 / 下载（UF2）

这种刷写方法相对简单：

1. 让遥控器进入引导加载器模式（在大多数遥控器上，方法是向内按住水平微调的同时打开遥控器电源——您也可以[在此查看您的遥控器的具体方法](../edgetx-how-to/access-dfu-and-bootloader-mode.md)）。
2. 将遥控器连接到电脑（不要使用 USB-C 转 USB-C 线缆，请始终使用 USB-A 转 USB-C 线缆——遥控器很可能附带了一根，必要时再使用转换器/集线器）。
3. 将适用于您遥控器的固件更新文件保存/复制到此时应出现的 `EDGETX_UF2` 驱动器中。可以通过以下任一方式完成：
   1. 事先通过 [EdgeTX Buddy](https://buddy.edgetx.org/) 将固件下载到电脑，或直接下载到遥控器。
   2. 从 [GitHub Releases](https://github.com/EdgeTX/edgetx/releases) 页面下载固件 zip 文件，并从中复制适用于您的遥控器的固件。
4. 文件开始传输到遥控器后，遥控器屏幕应切换为显示更新进度。
5. 更新完成后，您可以安全地弹出/断开遥控器，遥控器会自动重启。此时遥控器固件和引导加载器都已更新到最新！

## EdgeTX Companion（DFU/UF2）

Companion 可以通过两种方式之一更新基于 STM32H7 的遥控器——UF2 或 DFU 模式。使用哪种模式取决于将发射机连接到电脑时它所处的状态（即连接时遥控器处于引导加载器界面（UF2），还是处于 DFU 模式）。

1. 下载固件。例如，可以：
   1. 使用 Companion 中的更新功能（`Tools -> Update Components...`）
   2. 使用 [EdgeTX Buddy](https://buddy.edgetx.org/) 下载
   3. 从 [GitHub Releases](https://github.com/EdgeTX/edgetx/releases) 页面下载固件 zip 文件
2. 如果您有多台遥控器，请确保在 Companion 中加载了正确的遥控器配置文件。否则 Companion 会阻止您写入固件，以免将错误的固件刷写到错误的遥控器上。
3. 将遥控器连接到电脑（不要使用 USB-C 转 USB-C 线缆，请始终使用 USB-A 转 USB-C 线缆——遥控器很可能附带了一根，必要时再使用转换器/集线器）。可以在引导加载器模式（UF2）或 DFU 模式下连接遥控器。[在此查看您的遥控器的具体方法](../edgetx-how-to/access-dfu-and-bootloader-mode.md)。
4. 选择 `Radio -> Write Firmware to Radio` 选项。如果 Companion 未检测到处于 DFU 或 UF2 模式的遥控器，会显示警告信息——请解决问题，如果遥控器未被检测到，可在下一个屏幕中按 "Detect" 按钮。
5. 如果尚未选择固件文件，请加载/找到该文件，准备好后选择 `Write to TX`。如果您最近没有备份当前固件，建议先进行备份。

<div><figure><img src="/.gitbook/assets/Companion Write Firmware UF2.png" alt=""><figcaption><p>处于引导加载器（UF2）模式的 Flysky PA01</p></figcaption></figure> <figure><img src="/.gitbook/assets/Companion Write Firmware DFU.png" alt=""><figcaption><p>处于 DFU 模式的 RadioMaster TX15</p></figcaption></figure></div>

{% hint style="info" %}
如果通过 DFU 刷写，遥控器屏幕起初是空白的，在刷写固件的第二阶段会变为显示 "DFU Mode"。见下方 RadioMaster TX15 的示例。

<img src="/.gitbook/assets/stm32h7_tx15_dfu1.png" alt="" data-size="original"> ![](/.gitbook/assets/stm32h7_tx15_dfu2.png)
{% endhint %}

## 故障排除

* 如果处于 DFU 模式时电脑检测不到遥控器，通常意味着 USB 线缆/连接存在问题（例如 USB 线缆是“仅充电”线，或者您使用了 USB-C 转 USB-C 线缆，而不是 USB-C 转 USB-A 线缆加 USB 集线器/转换器），或者电脑上的驱动程序存在问题。您可以安装 [ImpulseRC Driver Fixer](https://impulserc.blob.core.windows.net/utilities/ImpulseRC_Driver_Fixer.exe) 来修复/安装所需的 DFU 驱动程序。
* 如果由于 `EDGETX_UF2` 驱动器空间不足而无法通过 UF2 更新，您可以改用 DFU 模式重试，或者暂时在 [Discord](https://discord.gg/wF9wUKnZ6H) 上联系我们，获取适用于您遥控器的特殊恢复固件文件。
