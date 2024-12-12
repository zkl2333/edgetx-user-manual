# 输入、混控和输出

为了支持多种不同类型的无线电发射机，EdgeTX 使用了一种通用的控制数据流，可以应用于任何无线电发射机。在这个数据流中，无线电的任何物理控制（摇杆、开关、滑块、旋钮）都可以映射到软件中的一个输入。这些输入可以直接分配或与其他输入组合成一个单一的混控。这些混控可以通过应用权重、偏移和曲线进行修改，然后分配一个通道进行输出。在最终将控制数据发送到 RF 模块之前，对控制数据进行最终调整（包括子微调、曲线、端点和中心值）。下图显示了这个控制数据流的视觉总结。关于数据流的详细信息在以下章节中提供：[输入](mixes.md)、[混控](mixes.md) 和 [输出](outputs.md)。

<figure><img src="https://edgetx-static.zkl2333.com/inputflow.jpg" alt=""><figcaption><p>控制数据流</p></figcaption></figure>

EdgeTX 使用以下图标来表示不同类型的来源。&#x20;

<div align="center">

<figure><img src="https://edgetx-static.zkl2333.com/inputicons.jpg" alt=""><figcaption><p>来源图标</p></figcaption></figure>

</div>