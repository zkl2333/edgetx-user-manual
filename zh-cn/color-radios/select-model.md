## Welcome to EdgeTX

### Introduction

EdgeTX is an open-source firmware for radio-controlled models. It is based on the popular OpenTX firmware and offers a wide range of features and customization options for your RC transmitter.

### Features

- Intuitive user interface
- Support for a variety of protocols
- Customizable themes and sound packs
- Advanced mixing capabilities
- Telemetry support
- Lua scripting

### Getting Started

To install EdgeTX on your transmitter, follow these steps:

1. Download the latest EdgeTX firmware for your specific transmitter model from the official EdgeTX website.
2. Use a compatible SD card reader to transfer the firmware files to the root directory of your transmitter's SD card.
3. Insert the SD card into your transmitter and follow the on-screen instructions to flash the firmware.

### Updating EdgeTX

To update EdgeTX to the latest version, simply repeat the installation process with the new firmware files.

### Conclusion

EdgeTX is a powerful firmware that can enhance your RC flying experience. Explore its features, experiment with different settings, and tailor your transmitter to suit your preferences. Happy flying!

# 管理模型

管理模型屏幕允许您创建新模型，选择活动模型，创建和应用模型标签以及创建模型模板。

<figure><img src="/.gitbook/assets/ManageModels1.png" alt=""><figcaption><p>管理模型屏幕</p></figcaption></figure>

### 选择和管理现有模型

活动模型的名称将被突出显示（在此情况下为黄色），并显示在屏幕顶部的工具栏上。双击活动模型将为您提供以下选项：

* **复制模型** - 此选项将创建一个具有相同名称的模型的精确副本。对模型名称或其他设置的更改需要在[模型设置](model-settings/)选项卡中进行。
* **标记模型** - 选择此选项后，将显示所有配置的标签，并可为此模型选择。有关[模型标签](select-model.md#model-labels)的更多信息在下面。
* **另存为模板** - 此选项将模型的副本保存为模型模板。

{% hint style="info" %}
保存为模板的模型的更改不会更新模板本身。
{% endhint %}

双击非活动模型（未突出显示）将为您提供以下选项：

* **选择模型** - 此选项将选择此模型作为活动模型。
* **复制模型** - 如上所述。
* **删除模型** - 此选项将将模型移动到SD卡上的已删除文件夹中。_只有非活动模型才能被删除。_
* **标记模型** - 如上所述。
* **另存为模板** - 如上所述。

### 创建新模型

要创建新模型，请选择右上角的**新建模型**按钮。然后将呈现以下选项：

<figure><img src="/.gitbook/assets/screenshot_tx16s_24-05-13_09-10-02.png" alt=""><figcaption><p>新模型选项</p></figcaption></figure>

* **空白模型** - 这将创建一个仅配置了默认选项的空白模型。
* **1.向导** - 这将启动新模型向导，并按照向导中配置的方式创建模型。
* **2.个人** - 此选项将允许您选择您保存的模型模板之一，然后将其复制为新模型。
* **3.SoarETX** 和 **4.SoarETXv2** - 这将显示预配置的无线电遥控滑翔机模型模板。
* 在SD卡上的**/TEMPLATES**中创建的任何其他文件夹也将显示在此处。如果上述任何按钮未显示，则SD卡包未正确安装或更新。


### 模型标签

模型标签允许您为每个模型分配一个或多个标签。然后，您可以根据所选标签筛选在**管理模型**屏幕中显示的模型。这使得拥有许多配置模型的人更容易找到它们。默认情况下，**收藏夹**和**未标记**标签会自动创建。所有模型在分配标签之前都被视为**未标记**。

### 使用标签筛选模型

要根据其标签筛选可见模型，请从左侧列中选择筛选器或筛选器。它将自动过滤掉不具有这些模型标签的模型。有关筛选器的工作原理或配置高级筛选选项的更多信息，请参阅：[其他无线电设置](radio-settings/radio-setup/additional-radio-settings.md)

### 为模型分配标签

要为模型分配标签，请双击模型或在选择模型时按**\[Enter]**，然后选择**标记模型**。选择后，将显示所有配置的标签，可以为此模型选择一个或多个标签。应用于模型的标签将用_**勾选**_图标标记。

### 创建新模型标签

要创建新模型标签，请选择屏幕左下角的**新建**按钮。将出现**输入标签**弹出窗口，您可以输入所需的标签名称。选择**保存**以保存新标签。

### 编辑模型标签

长按\[Enter]或长按所需标签，将显示以下选项菜单：

* 重命名标签 - 更改标签名称
* 删除标签 - 从标签列表和所有已分配该标签的模型中删除标签。
* 上移 - 将标签移到列表中较高的位置
* 下移 - 将标签移到列表中较低的位置

### 对模型进行排序

标签列表下方的下拉菜单用于对筛选后的模型进行排序。模型可以按照以下方式进行排序：

* 名称 A-Z
* 名称 Z-A
* 最少使用
* 最多使用

### 选择模型列表的布局

在管理模型页面中，有4种模型列表布局：

<figure><img src="/.gitbook/assets/MMLayouts.png" alt=""><figcaption><p>模型列表布局</p></figcaption></figure>

* 大图像（2x2）- 默认布局
* 小图像（3x3）
* 仅名称，2列（2x6）
* 仅名称，1列（1x6）

可以通过按**布局**按钮（位于**新建**按钮旁边）来更改布局，该按钮将循环显示可用布局。