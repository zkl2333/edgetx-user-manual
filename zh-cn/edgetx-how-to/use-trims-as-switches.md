

# 使用微调调整全局变量

有些模型类型中，您的遥控器上的某些或所有微调开关未被使用。直升机或带有飞行控制器的无人机通常不需要微调。同样，在许多固定翼飞机上，您可能不需要油门、方向舵、升降舵和副翼的所有4个微调。

在以下示例中，我们的模型是滑翔机。滑翔机不需要油门微调。我们也不需要方向舵微调，因为我们可以通过伺服子微调来调整方向舵。

滑翔机通常在副翼混控器上使用差动。当差动设置为正确的值时，飞机滚转完美。

在此示例中，我们将使用方向舵微调按钮来调整副翼的差动。我们将能够在飞行中使用微调来调整这一点。

**步骤1：** 禁用不需要的方向舵和油门微调。然后我们可以将它们重新用于其他功能。进入模型菜单并导航到飞行模式页面。编辑 **FM0** 并禁用油门和方向舵微调。当微调被禁用时，黄色高亮颜色将消失。

<figure><img src="//edgetx-static.zkl2333.com/howto-trims-as-switches-fm0-disable-trims.png" alt=""><figcaption><p>禁用飞行模式的微调</p></figcaption></figure>

您还可以在飞行模式页面上看到禁用的微调。它们现在显示为一个破折号

<figure><img src="//edgetx-static.zkl2333.com/howto-trims-as-switches-fm0-disabled-trims.png" alt=""><figcaption><p>FM0 禁用了油门和方向舵的微调</p></figcaption></figure>

**步骤2：** 现在我们导航到全局变量页面，并在 **FM0** 中为 **GV1** 设置默认值30

<figure><img src="//edgetx-static.zkl2333.com/howto-trims-as-switches-gv1.png" alt=""><figcaption></figcaption></figure>

**步骤3：** 我们现在将创建2个特殊功能来调整我们在上一步中创建的 **GV1** 值。导航到特殊功能页面并创建一个新的功能 **SF1** 用于减少 **GV1**

<figure><img src="//edgetx-static.zkl2333.com/howto-trims-as-switches-sf1.png" alt=""><figcaption></figcaption></figure>

* **触发器** 设置为 Rud-（方向舵微调左）
* **功能** 是 Adjust
* **全局变量** 是 GV1
* **模式** 是 Inc/Decrement
* **增/减** 设置为 **-=1**
* **启用** 特殊功能

我们现在创建 **SF2** 用于增加 **GV1** 值

<figure><img src="//edgetx-static.zkl2333.com/howto-trims-as-switches-sf2.png" alt=""><figcaption></figcaption></figure>

* **触发器** 设置为 Rud+（方向舵微调右）
* **功能** 是 Adjust
* **全局变量** 是 GV1
* **模式** 是 Inc/Decrement
* **增/减** 设置为 +**=1**
* **启用** 特殊功能

创建这两个特殊功能后，您可以立即测试功能。当您进入全局变量页面时，您可以监控 GV1 值。使用微调时，值应发生变化。

**步骤4：** 现在我们可以调整我们的副翼混控器并使用 GV1 值作为差动

<figure><img src="//edgetx-static.zkl2333.com/howto-trims-as-switches-ail-mix.png" alt=""><figcaption></figcaption></figure>

* **曲线** 设置为使用全局变量并选择 GV1

现在您应该能够使用方向舵微调在飞行中调整您的副翼差动。