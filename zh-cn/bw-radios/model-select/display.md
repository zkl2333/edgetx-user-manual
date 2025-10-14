# 显示

**显示** 屏幕是配置从主屏幕按下 **\[Tele]** 按钮时显示的遥测屏幕的地方。

您最多可以配置四个遥测屏幕。您可以为每个屏幕选择以下显示类型之一：

**Nums**（数字）- _**数字**_ 类型显示所选遥测传感器或其他配置对象的数值。屏幕将分为两列四行 - 每个单元格可以显示来自不同传感器或对象的数据。在显示屏幕上，顶部栏将显示模型名称、无线电电池电压和时间，此外还有配置的单元格。如果在模型中配置了 _**Timer1**_，它将替换顶部栏中的模型名称。

<div>

<figure><img src="/.gitbook/assets/bwtel4.png" alt=""><figcaption><p>显示数字配置</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/bwtel1 (7).png" alt=""><figcaption><p>带数字的显示屏幕</p></figcaption></figure>

</div>

**Bars** - _**Bars**_ 类型显示一个条形图，表示所选遥测传感器或其他配置对象的值。屏幕将分为四行 - 每行可以显示来自不同传感器或对象的数据。对于每个传感器，您必须定义条形的最小值和最大值。在显示屏幕上，顶部栏将显示模型名称、无线电电池电压和时间，此外还有配置的单元格。如果在模型中配置了 _**Timer1**_，它将替换顶部栏中的模型名称。此外，底部将显示一个第5个条形，显示RSSI值。

<div>

<figure><img src="/.gitbook/assets/bwtel5.png" alt=""><figcaption><p>显示条形配置</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/bwtel2 (2).png" alt=""><figcaption><p>带条形的显示屏幕</p></figcaption></figure>

</div>

**Script** - _**Script**_ 类型执行配置的遥测Lua脚本。遥测Lua脚本必须位于SD卡文件夹中：SD卡->Scripts->Telemetry，以便可以配置。

<div>

<figure><img src="/.gitbook/assets/bwtel6.png" alt=""><figcaption><p>显示脚本配置</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/bwtel3.png" alt=""><figcaption><p>带fm2m Lua脚本的显示屏幕</p></figcaption></figure>

</div>

{% hint style="info" %}
EdgeTX的其他Lua脚本可以在这里找到：[https://github.com/EdgeTX/lua-scripts](https://github.com/EdgeTX/lua-scripts)&#x20;
{% endhint %}

要配置屏幕，滚动到您想要配置的屏幕，然后按 **\[Enter]** 按钮。然后滚动选择您想要使用的屏幕类型，并按 **\[Enter]** 按钮选择它。根据所选的屏幕类型，您可以通过滚动到所需的对象并按 **\[Enter]** 按钮选择它来配置每个单元格的遥测对象。配置完所有所需的单元格后，按 \[Return] 按钮退出配置菜单。