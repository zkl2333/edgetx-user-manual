# USB Joystick

USB Joystick 有两种可能的模式，**经典** 和 **高级**。&#x20;

<figure><img src="//edgetx-static.zkl2333.com/usbjoystick1.png" alt=""><figcaption><p>USB Joystick 经典模式</p></figcaption></figure>

在 **经典模式** 中，电台配置的输出通道将按数字顺序发送到目标设备，并映射到设备预配置的 USB 控制器轴和按钮。以下是 Microsoft Windows 的默认通道映射。

{% hint style="info" %}
如果将电台用作 USB Joystick，内部和外部 RF 模块都应关闭。当配置为这种模式时，混频器在 Joystick 模式下将以 1000Hz 运行（这是 F.Sim 竞争者所需的）。此外，它还在统计/调试屏幕中显示混频器运行时间。这将在通过 USB 连接到计算机时提高性能。&#x20;
{% endhint %}

* Ch1 - X 轴
* Ch 2 - Y 轴
* Ch 3 - Z 轴
* Ch4 - X 旋转
* Ch 5 - Y 旋转
* Ch 6 - Z 旋转
* Ch 7 - 旋钮
* Ch 8 - 滑块
* CH 9 - Ch 32 - 按钮 1 - 24

<figure><img src="//edgetx-static.zkl2333.com/usbjoystick.png" alt=""><figcaption><p>USB Joystick 高级模式</p></figcaption></figure>

在 **高级模式** 中，您可以配置以下选项：

**接口模式：** 这表示给目标设备（您将发射机连接到的设备）您正在连接的设备类型。选项有 **Joystick**，**Gamepad**，**MultiAxis.** &#x20;

{% hint style="info" %}
**注意：** 目前在 MS Windows 中存在一个限制，可能会限制您的发射机仅被检测为 Joystick，无论在此选项中选择了什么。在 MacOS、Linux 和 Android 中，这个功能正常。
{% endhint %}

**圆形裁剪**：对于轴对（X-Y，Z-rX）：默认情况下，轴对的范围是一个矩形区域。使用此选项，轴将被限制在一个圆形区域内（如游戏手柄控制器常见的那样）。选项有：**无** 或 **X-Y, Z-rX** 或 **X-Y, rX-rY** 或 **X-Y, Z-rZ**

**输出通道 1-32**

**模式**：对于每个输出通道，您可以选择要用于该通道的模式。可用选项有 **无**，**Btn**，**Axis**，**Sim**。

**无** - 通道不使用

<figure><img src="//edgetx-static.zkl2333.com/usbjoystick2.png" alt=""><figcaption><p>为选定通道的按钮模式选项</p></figcaption></figure>

**Btn** - 通道用于模拟按钮。配置选项包括：

* **反转** - 反转输出通道信号。选项有：**开** / **关**
* **按钮模式** -
  * **正常** - 多位置开关的每个位置由一个按钮表示。当前开关状态由一个连续的按钮按下表示。
  * **脉冲** - 类似于“正常”模式。然而，代替连续的按钮按下，它由一个短暂的按钮按下表示。
  * **SWEmu** - 切换开关模拟一个按键按钮。第一次按下打开虚拟按钮，第二次按下关闭它。
  * **Delta** - 输出通道的变化由两个按钮表示。当输出值减少时，第一个按钮被按下。当输出值增加时，第二个按钮被按下。如果没有变化，则没有按钮被按下。
  * **Companion** - 当使用发射机在 EdgeTX Companion 中控制模拟器时，应选择此选项。它允许多位置开关在模拟器中正常工作。
* **位置** - 将被模拟的按钮类型。&#x20;
  * **推 -** 只会映射到一个按钮
  * **2POS - 8 POS** - 将映射到开关拥有的按钮数量（例如：3POS 将映射到 3 个按钮）。
* **按钮编号：** 输出将被映射到的按钮编号，并作为目标设备发送。

<figure><img src="//edgetx-static.zkl2333.com/usbjoystick3.png" alt=""><figcaption><p>为选定通道的轴模式选项</p></figcaption></figure>

**轴 -** 通道用于模拟一个轴，并将映射到目标设备的一个默认轴。

* 轴选项有：X, Y, Z, rotX（旋转 x）, rotY, rotZ

<figure><img src="//edgetx-static.zkl2333.com/usbjoystick4.png" alt=""><figcaption><p>为选定通道的模拟模式选项</p></figcaption></figure>

**模拟 -** 通道用于模拟一个常见的模拟轴，并将在目标设备上列为选定的选项（例如：Thr）

* 模拟轴选项有：**Ail**，**Ele**，**Rud**，**Thr**，**Acc**，**Brk**，**Steer**，**Dpad**