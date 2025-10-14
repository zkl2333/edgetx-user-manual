# 统计

<figure><img src="/.gitbook/assets/bwstats.png" alt=""><figcaption><p>统计屏幕</p></figcaption></figure>

**统计**屏幕为您提供有关无线电使用的统计信息。所有数据在无线电关闭后重置。提供以下信息：

* **SES** - 无线电已开启的时间量。
* **THR** - 油门杆位置高于0%的时间量。
* **TH%** - 油门杆位置高于50%的时间量。

长按**\[滚轮]**或**\[旋钮]**按钮将重置统计和调试屏幕。

按**\[PAGE>]**将带您进入**调试**屏幕。

<div>

<figure><img src="/.gitbook/assets/bwdebug.png" alt=""><figcaption><p>调试屏幕1</p></figcaption></figure>

 

<figure><img src="/.gitbook/assets/bwdebug2.png" alt=""><figcaption><p>调试屏幕1</p></figcaption></figure>

</div>

**调试**屏幕提供开发人员在调试软件问题时使用的数据点。除非与开发人员一起调试问题，否则大多数用户不会发现此屏幕上的信息有用。提供以下调试信息。

* **Free mem** - 当前无线电内存的空闲字节数。
* **Lua 脚本**
  * **\[D] -** 最大Lua持续时间（毫秒）。
  * **\[I]** - 最大Lua间隔（毫秒）。
* **TMix max** - 最大混合任务持续时间。
* **Free stack - \[Menu] / \[Mix] /\[Audio]**
  * **\[Menu]** - 菜单任务的最小空闲堆栈内存。
  * **\[Mix]** - 混合任务的最小空闲堆栈内存。
  * **\[Audio]** - 音频任务的最小空闲堆栈内存。
* **Tlm RX Err** - 接收的遥测错误数量。