# 使用多协议模块设置无线教练

#### 先决条件

为了使用多协议模块设置无线教练连接，您需要以下设备：

* 一台具有 FrSky D16 功能的 TX 模块的学生电台
* 一台教练电台，具备：  
  * 一个用作 RX 的多协议模块
  * 一个用于与模型通信的额外 TX 模块（协议无关，但必须与模型上的 RX 使用的协议匹配）

#### 设置

确保模型已绑定到所需的 TX 模块，并在教练电台上正常运行。

在教练电台上，配置 **Radio Settings** 中的 **Trainer** 部分。有关如何设置此页面的更多信息，请参见 [Trainer](../color-radios/radio-settings/trainer.md) 部分。

<div>

<figure><img src="https://edgetx-static.zkl2333.com/mpmt1.png" alt="" width="360"><figcaption></figcaption></figure>

 

<figure><img src="https://edgetx-static.zkl2333.com/mpmt7.png" alt=""><figcaption></figcaption></figure>

</div>

在教练电台上，配置 **Model Settings** 中的 **Trainer** 部分。对于 **Mode**，选择 **Master/Multi**

<div>

<figure><img src="https://edgetx-static.zkl2333.com/mpmt2.png" alt="" width="360"><figcaption></figcaption></figure>

 

<figure><img src="https://edgetx-static.zkl2333.com/mpmt8.png" alt=""><figcaption></figcaption></figure>

</div>

在教练电台上，配置特殊功能 _**Trainer**_。指定一个开关来激活模式，并确保功能已启用。

<div>

<figure><img src="https://edgetx-static.zkl2333.com/mpmt3.png" alt="" width="360"><figcaption></figcaption></figure>

 

<figure><img src="https://edgetx-static.zkl2333.com/mpmt9.png" alt=""><figcaption></figcaption></figure>

</div>

在教练电台上，配置 **Model Setup** 中的 **Internal RF** 和 **External RF** 部分。与学生电台通信的 RF 模块模式应设置为 _**Multi, FRSkyRX**_ 和 RF Protocol: _**Multi**_。还需配置一个接收机编号。教练和学生电台都需要使用相同的接收机编号。另一个 RX 模块应配置为与模型通信。

<div>

<figure><img src="https://edgetx-static.zkl2333.com/mpmt4.png" alt="" width="360"><figcaption></figcaption></figure>

 

<figure><img src="https://edgetx-static.zkl2333.com/mpmt10.png" alt=""><figcaption></figcaption></figure>

</div>

在学生电台上，配置内部 RF 或外部 RF（将使用的模块）以与教练电台通信。如果使用多协议模块，应设置为 _**Multi, FRSkyX**_ 和 RF Protocol: _**D16**_。将接收机编号配置为上一步中配置的相同编号。

<div>

<figure><img src="https://edgetx-static.zkl2333.com/mpmt5.png" alt="" width="360"><figcaption></figcaption></figure>

 

<figure><img src="https://edgetx-static.zkl2333.com/mpmt11.png" alt=""><figcaption></figcaption></figure>

</div>

在学生电台上，无需配置 **Model Settings** 或 **Radio Settings** 中的 **Trainer** 部分，将 **Model Settings** 中 **Trainer** 部分的 **Mode** 选项配置为 **Off**。

<div>

<figure><img src="https://edgetx-static.zkl2333.com/mpmt6 (2).png" alt="" width="360"><figcaption></figcaption></figure>

 

<figure><img src="https://edgetx-static.zkl2333.com/mpmt12.png" alt=""><figcaption></figcaption></figure>

</div>

**教练模式现已配置。**

您可以通过观察教练电台上的通道监视器来测试这一点，通过配置的开关激活教练模式，并移动学生电台上的摇杆。如果配置正确，您应该在教练电台的通道监视器上看到来自学生电台的摇杆移动。