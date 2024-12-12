## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- **Intuitive Interface**: EdgeTX provides a user-friendly interface for easy navigation and setup.
- **Advanced Customization**: Customize your transmitter settings and model configurations to suit your preferences.
- **Telemetry Support**: Monitor real-time telemetry data from your model while in flight.
- **Multi-Protocol Support**: EdgeTX supports multiple protocols, allowing you to control a variety of models with one transmitter.
- **Open-Source**: EdgeTX is open-source, allowing for community contributions and continuous improvement.

### Getting Started

To get started with EdgeTX, follow these steps:

1. **Download**: Download the latest EdgeTX firmware for your transmitter model from the official website.
2. **Installation**: Follow the installation instructions provided on the website to flash the firmware to your transmitter.
3. **Configuration**: Configure your transmitter settings and model configurations using the intuitive interface.
4. **Calibration**: Calibrate your transmitter sticks and switches to ensure accurate control of your model.
5. **Testing**: Perform a range check and test flight controls before flying your model.

### Support

For support and community discussions, visit the EdgeTX website and forums. Join the community to share your experiences and learn from other users.

### Conclusion

EdgeTX is a powerful firmware that enhances your RC flying experience with its advanced features and customization options. Explore the possibilities with EdgeTX and take your radio-controlled modeling to the next level.

# 无线电设置

<figure><img src="/.gitbook/assets/RadioSetup.png" alt=""><figcaption><p>无线电设置屏幕</p></figcaption></figure>

**无线电设置** 屏幕是您配置无线电基本设置的地方。它包含以下选项：

- **日期** - 当前日期。此日期用于 SD 卡日志文件。

- **时间** - 当前时间。此时间用于 SD 卡日志文件。

- **附加设置按钮** - 选择这些按钮时，可获得命名区域的附加配置选项。有关这些配置设置的更多信息，请参阅下一页 - [附加无线电设置](additional-radio-settings.md)

- **启动画面** - 启动画面显示的持续时间。

- **启动音效** - 切换是否启用/禁用启动音效。

- **关机延迟** - 电源按钮按下和无线电关闭之间的延迟时间。选项有：**0秒，1秒，2秒，3秒，4秒**。_建议设置至少 1 秒的延迟，以防止在意外按下按钮的情况下关闭无线电。_

- **所有者 ID** - 仅供使用 ISRM 模块的用户使用的自定义注册 ID。

- **国家代码** - 一些射频模块使用的国家代码，以确保遵守当地的射频监管要求。选项为 **美国，日本，欧洲**。

- **语音语言** - 语音包的语言。此设置和 SD 卡上的语音包文件夹必须匹配，才能播放声音。

- **单位** - 测量单位。选项为 **公制** 或 **英制**。

- **PPM 单位** - PPM 值的精度级别。选项为 **0.-** 或 **0.0**

- **播放延迟**（开关中间位置） - 开关必须在中间位置的最短时间（以毫秒为单位），才能激活特殊功能。这用于防止在从低位置切换到高位置时，三位置开关的中间位置被激活。

- **USB 模式** - 插入 USB 数据端口并打开无线电时的默认操作。选项为：**询问**，**游戏手柄**，**存储** 和 **串行**。

- **帽子开关模式**：帽子开关的功能方式（_**仅适用于 NV14 和 EL18**_）。

  - **仅修正**：修正帽子开关仅用于调整修正值。
  - **仅键盘**：修正帽子开关用于导航菜单选项（如下所述）
  - **可切换**：修正帽子开关功能可以在 **修正** 和 **键盘** 之间动态切换。

- **旋转编码器模式** - 默认设置为 **正常**。**反转** 选项会颠倒滚轮的方向。

- **默认通道顺序** - 新模型和训练屏幕的默认通道顺序。字母代表：**A** = 副翼（滚转），**E** = 升降舵（俯仰），**T** = 油门，**R** = 方向舵（偏航）。更改此设置不会影响现有模型。

- **模式** - 用于发射机的摇杆模式。由左摇杆采取的动作定义。选项为：

<table><thead><tr><th width="181">选项</th><th width="148">左摇杆 H</th><th width="149">左摇杆 V</th><th width="133">右摇杆 H</th><th>右摇杆 V</th></tr></thead><tbody><tr><td>1: 左 = 方向+升降</td><td>方向舵（偏航）</td><td>升降舵（俯仰）</td><td>副翼（滚转）</td><td>油门</td></tr><tr><td>2: 左 = 方向+油门</td><td>方向舵（偏航）</td><td>油门</td><td>副翼（滚转）</td><td>升降舵（俯仰）</td></tr><tr><td>3: 左 = 副翼+升降</td><td>副翼（滚转）</td><td>升降舵（俯仰）</td><td>方向舵（偏航）</td><td>油门</td></tr><tr><td>4: 左 = 副翼+油门</td><td>副翼（滚转）</td><td>油门</td><td>方向舵（偏航）</td><td>升降舵（俯仰）</td></tr></tbody></table>