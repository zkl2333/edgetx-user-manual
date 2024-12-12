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
3. **Configuration**: Configure your transmitter settings according to your preferences using the intuitive interface.
4. **Calibration**: Calibrate your transmitter controls to ensure accurate input readings.
5. **Testing**: Test your transmitter with a simulator or on the field to ensure everything is working correctly.

### Support

For support and community interaction, visit the EdgeTX website and forums. You can find resources, ask questions, and engage with other users to enhance your EdgeTX experience.

### Conclusion

Enjoy using EdgeTX for your radio-controlled models and explore the endless possibilities it offers for customization and control. Happy flying!

# 用户界面

EdgeTX 的用户界面可以通过物理按钮、触摸界面或两者结合来导航。

<figure><img src="/.gitbook/assets/buttonnavigation.jpg" alt=""><figcaption><p>用于导航的常见按钮</p></figcaption></figure>

### **按钮：**

* **\[SYS]** - 系统按钮\
  \- 短按 **\[SYS]** 按钮可进入[无线电设置](../radio-settings/)页面。&#x20;

  \- 长按 **\[SYS]** 按钮可进入[无线电设置](../radio-settings/radio-setup/)页面。
* **\[MDL]** - 模型按钮\
  \- 短按 **\[MDL]** 按钮可进入[模型设置](../model-settings/)页面\
  \- 长按 **\[MDL]** 按钮可进入[选择模型](../select-model.md)页面
* **\[RTN] -** 返回 / 返回 \
  \- 短按 **\[RTN]** 按钮返回上一页、上一个菜单或取消操作
* **\[PAGE>] / \[PAGE<]** - 下一页 & 上一页\
  \- 用于在不同屏幕、选项卡或设置之间导航，具体取决于屏幕。
* **\[TELE] -** 遥测 \
  \- 短按 **\[TELE]** 按钮可进入[屏幕设置](../screen-settings/)页面

  &#x20;\-长按 **\[TELE]** 按钮可进入[通道监视器](../channel-monitor.md)页面
* **\[Roller]** 或 **\[Dial]** - 下一个 & 上一个值\
  滚轮用于浏览菜单选项。 &#x20;
* **\[Enter]** - 接受 \
  \- 用于选择选项、功能或接受值\
  \- 按下 **\[Roller]** 或 **\[Dial]** 按钮选择或输入。

### 附加的系统和模型按钮功能

系统和模型按钮根据用户界面中的屏幕不同具有不同的功能：

**在无线电设置屏幕中：**

* 短按 **\[MDL]** 导航到模型设置屏幕
* 长按 **\[MDL]** 导航到管理模型屏幕

**在模型设置屏幕中：**

* 短按 **\[SYS]** 导航到无线电设置（工具）屏幕
* 长按 **\[SYS]** 导航到无线电设置（设置）屏幕
* 短按 **\[MDL]** 导航到通道监视器（现有功能）
* 长按 **\[MDL]** 导航到管理模型屏幕

**在通道监视器屏幕中：**

* 短按 **\[MDL]** 导航到模型设置屏幕
* 长按 **\[MDL]** 导航到管理模型屏幕
* 短按 **\[SYS]** 导航到无线电设置（工具）屏幕
* 长按 **\[SYS]** 导航到无线电设置（设置）屏幕

**在管理模型屏幕中：**

* 短按 **\[MDL]** 导航到模型设置屏幕
* 短按 **\[SYS]** 导航到无线电设置（工具）屏幕
* 长按 **\[SYS]** 导航到无线电设置（设置）屏幕

### **触摸界面**:

某些无线电配备了触摸屏。在这些无线电上，您可以使用触摸或物理按钮与菜单选项进行交互。&#x20;

{% hint style="info" %}
可以通过配置特殊功能来禁用触摸界面。有关更多信息，请参阅 [special-functions.md](../model-settings/special-functions.md "mention")。
{% endhint %}

触摸屏幕左上角的 EdgeTX 图标以打开主导航菜单。触摸所需的菜单选项以选择它。

<figure><img src="/.gitbook/assets/mainmenu.png" alt=""><figcaption><p>主导航菜单</p></figcaption></figure>

{% hint style="info" %}
对于在 **Models** 文件夹中具有有效模型检查文件的模型，**模型注释** 图标将添加到 **管理模型** 图标之后。
{% endhint %}

从主屏幕按下滚轮也会打开主导航菜单。然后，您可以使用滚轮滚动到所需的菜单选项，并通过按下滚轮来选择它。