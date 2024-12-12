# 输入、混合与输出

为了支持多种不同类型的无线电发射机，EdgeTX 使用通用的控制数据流，可应用于任何无线电发射机。在这个数据流中，无线电的任何物理控制（摇杆、开关、滑块、旋钮）都可以映射到软件中的一个输入。这些输入可以直接分配，也可以与其他输入组合成一个混合。这些混合可以通过应用权重、偏移和曲线进行修改，然后分配一个输出通道。在最终将控制数据发送到射频模块之前，对控制数据进行最终调整（包括子调、曲线、端点和中心值）。下面的流程图描述了这个控制数据流的视觉摘要。有关该流程的详细信息，请参阅以下各节[Inputs](mixes.md)、[Mixes](mixes.md) 和 [Outputs](outputs.md)。

<figure><img src="/.gitbook/assets/inputflow.jpg" alt=""><figcaption><p>控制数据流</p></figcaption></figure>

EdgeTX 使用下面的图标来指定不同类型的来源。&#x20;

<div align="center">

<figure><img src="/.gitbook/assets/inputicons.jpg" alt=""><figcaption><p>来源图标</p></figcaption></figure>

</div>