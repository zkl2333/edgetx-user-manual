## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface that is easy to navigate.
- **Customizable**: You can customize almost every aspect of your transmitter's settings to suit your preferences.
- **Cross-platform**: EdgeTX is compatible with multiple hardware platforms, giving you flexibility in choosing your hardware.
- **Open Source**: Being open-source, EdgeTX allows for community contributions and continuous improvement.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your transmitter model from the official website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware onto your transmitter.
3. **Configuration**: Configure your transmitter settings using the intuitive interface provided by EdgeTX.
4. **Calibration**: Calibrate your transmitter controls to ensure accurate operation.

### Support

For support and community interaction, visit the EdgeTX website and forums. Join the community to stay updated on the latest developments, share your experiences, and get help from other users.

### Conclusion

Enjoy using EdgeTX for your radio-controlled models and explore the endless possibilities it offers for customization and control.

# 遥测

遥测是从模型传输到遥控器的各种传感器接收的数据。这些传感器可以包含在遥控器接收器或飞行控制器中，也可以是独立的传感器，如GPS、变高仪或磁力计。EdgeTX 可以显示接收到的遥测数据，可以在小部件中配置警报或音频提示。

<figure><img src="/.gitbook/assets/telemetry.png" alt=""><figcaption><p>模型设置中的遥测屏幕</p></figcaption></figure>

### **传感器**

这里列出了所有先前配置的传感器。接收到数据的传感器会被突出显示，这些数据是在加载模型或重置遥测值后接收的。当传感器接收到数据更新时，传感器值左侧会闪烁一个小圆形图标。黑色的传感器值表示正在接收定期更新的传感器。红色的传感器值表示不再接收定期更新的传感器。请参阅[已识别传感器](../../../bw-radios/model-select/telemetry/common-telemetry-sensors.md)以获取 EdgeTX 中常用传感器的列表。

传感器列表下列出了以下选项。

- **发现新传感器：** 选择后，将查找模型上的新传感器并自动配置它们。
- **添加新传感器：** 选择后，将为必须手动配置的新传感器创建一个空白传感器。
- **删除所有传感器：** 此选项将删除所有先前配置的传感器。_**注意**_：_如果没有配置传感器，则此按钮将不可见。_
- **显示实例 ID：**
- **忽略实例：** 此选项可防止多个传感器报告相同的遥测数据。

如果选择特定传感器，您将获得以下选项。

- **编辑：** 允许您编辑传感器的配置选项。
- **复制：** 创建该传感器的副本。
- **删除：** 删除该传感器。

请参阅[传感器配置选项](sensor-configuration-options.md)页面，详细描述了用于设置或编辑传感器的所有配置选项。

### **Rx-Stats**

在这里，您可以配置 RX 报警的阈值。根据与模型一起使用的协议，Rx-Stats 标签将更改（Rx-Stats、RSSI、Rqly、Sgnl）。

- **低报警：** 当达到“RF 信号低”语音提示将被播放的阈值时。推荐值为 45。
- **严重报警：** 当达到“RF 信号严重”语音提示将被播放的阈值时。推荐值为 42。
- **禁用遥测报警：** 启用时，将不会播放任何报警语音提示。

### **变高仪**

变高仪检测模型高度的变化。EdgeTX 可以通过提供升高/降低音调来提醒用户这些高度变化。在无线电设置页面上使用 **变高仪** 菜单来设置要播放的音调的实际频率和音量。存在以下选项来配置变高仪警报。

{% hint style="info" %}
您需要使用 **Vario** 特殊功能或全局功能来启用此功能！
{% endhint %}

- **来源：** 指定用作变高仪的传感器。从 **传感器** 部分添加的遥测传感器中进行选择。
- **范围：** 指定将触发变高仪音调变化的上升/下降范围。如果爬升/下降速率在此处指定的范围内，音调将根据该值变化。当超出此处指定的范围时，音调将停止变化。单位是米/秒或英尺/秒，根据 [无线电设置](../../radio-settings/radio-setup/) 页面上的 **单位** 设置而定。
- **中心：** 指定忽略爬升/下降速率变化的范围。当爬升/下降速率在此处指定的范围内时，音调不会变化。
- **音调/静音：** 指定当爬升/下降速率在 **中心** 指定的范围内时是否发出蜂鸣声。