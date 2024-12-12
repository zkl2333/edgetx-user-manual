## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX software and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Customizable Interface**: Personalize your transmitter's interface to suit your preferences.
- **Advanced Mixing**: Create complex control setups with ease.
- **Telemetry Support**: Monitor real-time data from your model.
- **Lua Scripting**: Customize your transmitter's behavior using Lua scripts.
- **Wireless Trainer**: Train with other pilots using the wireless trainer function.
- **Crossfire Integration**: Seamlessly integrate with TBS Crossfire systems.

### Getting Started

To get started with EdgeTX, follow these steps:

1. Download the latest EdgeTX firmware for your transmitter model from the official website.
2. Flash the firmware to your transmitter following the instructions provided.
3. Configure your transmitter settings to match your model and preferences.
4. Explore the various features and customization options available in EdgeTX.

For more information and support, visit the EdgeTX website at [edgetx.org](https://edgetx.org).

# 常见遥测传感器

以下传感器是常用的，并且通常会被EdgeTX自动检测到：

| 名称   | 描述                               | 数据来源            |
|--------|------------------------------------|---------------------|
| 1RSS   | 接收信号强度天线1 (RSSI)            | 接收机              |
| 2RSS   | 接收信号强度天线2 (RSSI)            | 接收机              |
| Rqly   | 接收机链路质量 (有效数据包)         | 接收机              |
| RSNR   | 接收机信噪比                       | 接收机              |
| RFMD   | 接收机数据包速率                   | 接收机              |
| TPWR   | 发射机发射功率                     | 发射机              |
| TRSS   | 发射机信号强度天线                 | 发射机              |
| TQly   | 发射机链路质量 (有效数据包)         | 发射机              |
| TSNR   | 发射机信噪比                       | 发射机              |
| ANT    | 仅用于调试的传感器                 | 发射机              |
| GPS    | GPS坐标                           | GPS / 飞控器        |
| Alt    | GPS高度                           | GPS / 飞控器        |
| Sats   | GPS卫星数量                        | GPS / 飞控器        |
| Hdg    | 磁性方向                           | GPS / 飞控器        |
| RXBt   | 电池电压                           | 飞控器              |
| Curr   | 电流                               | 飞控器              |
| Capa   | 电流消耗                           | 飞控器              |
| Ptch   | 飞控俯仰角                         | 飞控器              |
| Roll   | 飞控横滚角                         | 飞控器              |
| Yaw    | 飞控偏航角                         | 飞控器              |
| FM     | 飞行模式                           | 飞控器              |
| VSPD   | 垂直速度                           | 带气压计的飞控器    |

{% hint style="info" %}
每个传感器都有两个自动生成的传感器，用于显示其最小值和最大值。它们的名称相同，只是在末尾添加了负号和正号。例如：**RXBt +** 这显示了传感器在飞行过程中达到的最大值。使用[重置遥测](../../reset-telemetry.md)或飞行功能将会将此值重置为0。
{% endhint %}