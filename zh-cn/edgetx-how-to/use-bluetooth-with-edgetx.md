# 在 EdgeTX 中使用蓝牙

EdgeTX 中对蓝牙的支持仅限于：

* 蓝牙教练模式
* 蓝牙遥测流

以下蓝牙选项**不**支持。

* 蓝牙音频
* 无线文件访问和传输
* 蓝牙操纵杆

### 固件

要使用蓝牙，您需要一个自定义编译的 EdgeTX 版本，该版本需要使用 **BLUETOOTH=YES** CMake 标志进行构建。您可以使用 [EdgeTX Buddy 网站](https://buddy.edgetx.org/)上的 CloudBuild 选项卡创建 EdgeTX 的自定义版本。

一旦在您的遥控器中安装了正确版本的 EdgeTX 固件，蓝牙配置选项将在**无线电**设置的**硬件**页面上可用。

### 硬件

EdgeTX 支持的唯一现成蓝牙模块是：

[FrSky 蓝牙模块](https://de.aliexpress.com/item/4001192317700.html?gatewayAdapt=glo2deu)

[FrSky ACCESS PARA 无线模块](https://www.horusrc.com/en/frsky-horus-x10-para-wireless-module.html)

您还可以通过购买 ESP32 开发套件并使用以下项目的固件对其进行刷写来创建自己的蓝牙模块：[https://btwifimod.gitbook.io/untitled/getting-started/hardware](https://btwifimod.gitbook.io/untitled/getting-started/hardware)

### 遥测应用

[INAV Telemetry Viewer 应用](https://play.google.com/store/apps/details?id=crazydude.com.telemetry)可以在您的 Android 智能手机上使用，以通过蓝牙查看您的遥测数据。

### 其他重要注意事项：

* 蓝牙仅支持至少有一个 AUX 串口的遥控器。
* 编译时选项 **Bluetooth** 将保留一个 AUX 端口（在有 2 个 AUX 端口的遥控器上，AUX2 保留用于蓝牙），并且在正常用户界面中将不可用于其他用途。
* EdgeTX 蓝牙教练或遥测与内部或外部 RF 模块的蓝牙功能无关。
* 目前 EdgeTX 蓝牙不能用于蓝牙操纵杆功能。