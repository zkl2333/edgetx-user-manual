---
metaLinks:
  alternates:
    - >-
      https://app.gitbook.com/s/2n2y0XsJcrhXt3asceP0/edgetx-how-to/access-dfu-and-bootloader-mode
---

# 进入 DFU 和 Bootloader 模式

并不是所有的遥控器进入 Bootloader 或 DFU 模式的方式都相同。以下是许多 EdgeTX 遥控器进入 Bootloader 和 DFU 模式的方法描述。

### BETAFPV LiteRadio 3 Pro

<figure><img src="/.gitbook/assets/LR3Prodfu.png" alt="" width="375"><figcaption><p>BETAFPV LiteRadio 3 Pro Bootloader 和 DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。按下 Bootloader 按钮和电源按钮，同时释放。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

{% hint style="info" %}
注意：在早期版本的 LiteRadio 3 Pro 中，DFU 按钮是无效的，这导致无法启用 DFU 模式。然而，在当前版本的遥控器中，DFU 按钮已被修复，现在可以正常工作。
{% endhint %}

### FlySky NV14 / EL18

<figure><img src="/.gitbook/assets/EL18 DFU.png" alt="" width="456"><figcaption><p>FlySky NV14/EL18 DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。将两个微调向内拉并按下两个电源按钮。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

### FlySky Noble+ (NB4+)

<figure><img src="/.gitbook/assets/nb4p-dfu-reset.png" alt="" width="563"><figcaption></figcaption></figure>

**Bootloader:** 按住标有 SW1 的两个按钮（位于握把两侧）并打开遥控器电源。进入 Bootloader 后即可松开。使用 TR3 滚动，左侧 SW1 作为 RTN，右侧 SW1 作为 ENTER（从背面看）。

**DFU:** 在遥控器和电池仓（外置电池组）均关机的状态下，按住握把左侧（从背面看）的 DFU 按钮，同时将 USB 连接到遥控器（通过其外置电池组）。

### FlySky PA01

<figure><img src="/.gitbook/assets/pa01_dfu.png" alt=""><figcaption></figcaption></figure>

**Bootloader:** 关闭遥控发射器。将两个水平微调（T1 和 T4）向内拉，并按下电源按钮。

**DFU:** 关闭遥控发射器。将遥控器翻转过来，使其背面朝向您。取下左侧电池盖。用不导电的物体（例如塑料）按住 DFU 按钮，然后插入 USB 线缆。松开 DFU 按钮。如果操作正确，散热风扇将全速运转。

### FlySky PL18 / PL18 EV

<figure><img src="/.gitbook/assets/PL18Dfu.png" alt="" width="375"><figcaption><p>PL18 PL18 EV DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。将两个水平微调（TR7 和 TR8）一起拉并按下两个电源按钮。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

### FlySky ST16

**Bootloader:** 关闭遥控发射器。将两个水平微调（TR3 和 TR4）一起拉并按下电源按钮。

**DFU:** 关闭遥控发射器。按住 DFU 按钮（下图中圈出的位置）并插入 USB 线缆，释放 DFU 按钮。

<figure><img src="/.gitbook/assets/st16_DFU_button.png" alt=""><figcaption></figcaption></figure>

### iFlight Commando8

<figure><img src="/.gitbook/assets/Com8DFU.png" alt="" width="375"><figcaption><p>iFlight Commando8 Boot 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。按下 Boot 按钮和电源按钮，同时释放。

**DFU**: 关闭遥控发射器。将 USB 线缆从计算机连接到遥控器。按住 Boot 按钮，然后按住电源按钮。屏幕将保持黑暗，LED 将从左到右运行。遥控器现在处于 DFU 模式。

### Jumper T12/T16/T18

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入遥控器顶部的 USB 端口。

### Jumper T12 MAX

<figure><img src="/.gitbook/assets/T12MAX-dfu-button.png" alt=""><figcaption><p>Jumper T12 MAX DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

### Jumper T14/T15

<figure><img src="/.gitbook/assets/T15-dfu-button.png" alt=""><figcaption><p>Jumper T14/T15 DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

### Jumper T-20/T-20S

<figure><img src="/.gitbook/assets/T20DFU.png" alt="" width="563"><figcaption><p>Jumper T-20 v1 DFU 按钮</p></figcaption></figure>

{% hint style="info" %}
注意：要访问 v1 的 DFU 按钮，请移除天线。对于 v2，使用牙签轻轻按下按钮以避免损坏。
{% endhint %}

<figure><img src="/.gitbook/assets/T20V2.png" alt="" width="563"><figcaption><p>Jumper T-20 v2 DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。将两个微调帽开关一起向内推并按下电源按钮。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

### Jumper T-Lite

**Bootloader**: 关闭遥控发射器。将两个内侧水平微调按钮一起推并按下电源按钮。

**DFU**: 关闭遥控发射器。插入 USB 线缆。

### Jumper T-Pro / T-Pro V2

<figure><img src="/.gitbook/assets/T-ProDFU.png" alt="" width="375"><figcaption><p>Jumper T-Pro DFU 按钮</p></figcaption></figure>

**Bootloader**: 关闭遥控发射器。将两个微调帽开关一起向内推并按下电源按钮。

**DFU**: 关闭遥控发射器。按住 DFU 按钮并插入 USB 线缆，释放 DFU 按钮。

### RadioMaster GX12

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入遥控器顶部的 USB 端口（电源按钮 LED 应亮起）。按住 SG（左上肩部开关），然后按下并松开电源按钮（只需短按）。之后即可松开 SG。

### RadioMaster MT12

**Bootloader**: 关闭遥控发射器。将两个微调 T1 和 T2 一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入侧面的 USB 端口（在橡胶盖下）。

### RadioMaster Pocket

**Bootloader**: 关闭遥控发射器。将两个微调帽开关一起向内推并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入遥控器顶部的 USB 端口。

### RadioMaster TX15 / TX16S MK3 / GX15

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入遥控器顶部的 USB 端口（电源按钮 LED 应亮起）。短按 SYSTEM（SYS）按钮，遥控器即进入 DFU 模式。

### RadioMaster (其他所有 - Boxer, TX12, Zorro, TX16S MK1/MK2)

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入遥控器顶部的 USB 端口。

### Eachine TX16s

**Bootloader**: 关闭遥控发射器。将两个水平微调开关一起拉并按下电源按钮。

**DFU**: 关闭遥控发射器。将 USB 线缆插入遥控器顶部的 USB 端口。