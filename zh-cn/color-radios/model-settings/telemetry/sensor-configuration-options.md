# EdgeTX User Manual

## Introduction

EdgeTX is a powerful and flexible open-source firmware for radio-controlled models. It provides advanced features and customization options to suit a wide range of model types and user preferences.

## Flight Modes

Flight modes allow you to configure different settings for your model that can be quickly switched during flight. EdgeTX supports multiple flight modes that can be customized to adjust various parameters such as rates, expo, and auxiliary channel functions.

### Creating a New Flight Mode

To create a new flight mode:

1. Navigate to the **Flight Modes** menu in the transmitter.
2. Select an unused flight mode slot.
3. Configure the desired settings for the new flight mode, such as rates, expo, and switch assignment.
4. Save the settings.

### Switching Flight Modes

To switch between flight modes during flight, assign a switch on your transmitter to the desired flight mode.

## Mixing

Mixing allows you to combine different control inputs to achieve the desired model behavior. EdgeTX supports various types of mixing, including elevon, V-tail, and custom mixes.

### Setting Up Mixing

To set up mixing:

1. Navigate to the **Mixers** menu in the transmitter.
2. Select an unused mixer line.
3. Choose the input and output channels for the mix.
4. Configure the mix type and values.
5. Save the mix settings.

### Activating Mixing

Once mixing is set up, activate it by assigning a switch or control input to trigger the mix.

## Conclusion

EdgeTX offers a wide range of features and customization options to enhance your radio-controlled modeling experience. By utilizing flight modes and mixing, you can tailor your model's behavior to suit your flying style and preferences.

# 传感器配置选项

以下选项可配置传感器：

- **名称：** 传感器的名称 - 最多4个字符。
- **类型：** 选项为**自定义**或**计算**。自定义传感器由硬件定义。计算传感器是使用其他传感器值计算值的传感器。有关计算传感器的更多信息，请参见下文。
- **ID：** 此数字指示传感器的类型。它包含两部分。第一部分是定义传感器类型的ID号。第二部分是硬件的实例编号。如果配置了多个相同类型的传感器，则实例编号必须是唯一的。
- **单位：** 传感器的单位。当传感器值显示在屏幕上或朗读时使用此单位。
- **精度：** 指定传感器值显示在屏幕上时小数点后的位数。根据此设置截断数字。
- **比率：** 指定与传感器值相乘的比率值，根据某些传感器的需要。
- **偏移：** 指定要添加到传感器值的偏移值。
- **自动偏移：** 选择时，第一个接收到的值将用作偏移量。您可以使用[重置遥测](../../reset-telemetry.md)选项来重置已配置传感器的偏移量。
- **正数：** 选择时，仅当传感器值为正数时才显示传感器的值。当传感器值变为负数时，显示零。
- **滤波器：** 选择时，传感器值将成为最后5个接收到的值的滚动平均值。
- **日志：** 选择时，此传感器的值将保存在日志文件中。SD卡记录在[特殊功能](../special-functions.md)或全局功能中配置。

计算传感器包含以下附加配置选项：

- **公式：** 要使用的计算类型。选项包括：
  - **加法：** 将最多4个指定传感器的值相加。
  - **平均值：** 计算最多四个指定传感器的平均值。
  - **最小值：** 找到最多4个指定传感器的最小值。
  - **最大值：** 找到最多4个指定传感器的最大值。
  - **乘法：** 将2个传感器的值相乘。
  - **累计：** 计算一个传感器的累积值。
  - **单元：** 这是FrSKY锂电池传感器的公式。它显示由“单元索引”字段中指定的单元电压。\
    如果在“单元索引”字段中指定“最低”，则显示具有最低电压的单元的电压。\
    如果在“单元索引”字段中指定“最高”，则显示具有最高电压的单元的电压。\
    如果在“单元索引”字段中指定“Δ”，则显示最低和最高单元之间的电压差异。
  - **消耗：** 通过累加当前传感器的值来计算功耗（mAh）。
  - **距离：** 使用GPS传感器和高度计值计算接收器和无线电之间的距离。
- **来源1、2、3、4：** 将提供用于上述定义的公式中使用的参数值的传感器。
- **持久性：** 选择时，传感器值在模型之间切换或关闭无线电时将被保存。