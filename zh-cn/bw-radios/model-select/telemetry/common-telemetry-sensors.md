# 常见遥测传感器

以下传感器是常用的，并且通常由 EdgeTX 自动检测：

<table><thead><tr><th width="107">名称</th><th width="419.3333333333333">描述</th><th>数据来源</th></tr></thead><tbody><tr><td>1RSS</td><td>接收信号强度天线 1 (RSSI)</td><td>接收机</td></tr><tr><td>2RSS</td><td>接收信号强度天线 2 (RSSI)</td><td>接收机</td></tr><tr><td>Rqly</td><td>接收机链路质量（有效数据包）</td><td>接收机</td></tr><tr><td>RSNR</td><td>接收机信噪比</td><td>接收机</td></tr><tr><td>RFMD</td><td>接收机数据包速率</td><td>接收机</td></tr><tr><td>TPWR</td><td>发射机发射功率</td><td>发射机</td></tr><tr><td>TRSS</td><td>发射机信号强度天线</td><td>发射机</td></tr><tr><td>TQly</td><td>发射机链路质量（有效数据包）</td><td>发射机</td></tr><tr><td>TSNR</td><td>发射机信噪比</td><td>发射机</td></tr><tr><td>ANT</td><td>仅用于调试的传感器</td><td>发射机</td></tr><tr><td>GPS</td><td>GPS 坐标</td><td>GPS / 飞控</td></tr><tr><td>Alt</td><td>GPS 高度</td><td>GPS / 飞控</td></tr><tr><td>Sats</td><td>已获取的 GPS 卫星</td><td>GPS / 飞控</td></tr><tr><td>Hdg</td><td>磁性方向</td><td>GPS / 飞控</td></tr><tr><td>RXBt</td><td>电池电压</td><td>飞控</td></tr><tr><td>Curr</td><td>电流消耗</td><td>飞控</td></tr><tr><td>Capa</td><td>电流消耗量</td><td>飞控</td></tr><tr><td>Ptch</td><td>飞控俯仰角</td><td>飞控</td></tr><tr><td>Roll</td><td>飞控横滚角</td><td>飞控</td></tr><tr><td>Yaw</td><td>飞控偏航角</td><td>飞控</td></tr><tr><td>FM</td><td>飞行模式</td><td>飞控</td></tr><tr><td>VSPD</td><td>垂直速度</td><td>带气压计的飞控</td></tr></tbody></table>

{% hint style="info" %}
每个传感器都有两个自动生成的传感器，用于其最小值和最大值。它们共享相同的名称，并在末尾添加负号和正号。例如：**RXBt +** 显示传感器在飞行期间达到的最大值。使用[重置遥测](../../main-view/reset.md)或飞行功能将此值重置为 0。
{% endhint %}