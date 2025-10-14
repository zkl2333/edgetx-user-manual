# 安装和更新 EdgeTX

您可以通过多种方式在遥控器上安装或更新 EdgeTX。可以使用在线工具 EdgeTX Buddy，也可以通过引导加载器方法手动安装/更新引导加载器和固件。这两种方法各有优劣，具体选择取决于个人偏好。

### EdgeTX Buddy

#### 优点

* 固件和 SD 卡内容集中在一个位置。
* 提供逐步指导。
* 通常操作简单。

#### 缺点

* 必须使用基于 Chromium 的浏览器访问（如 Chrome、MS Edge、Brave、Opera 等）。
* 需要在电脑上安装正确的 STM32 驱动程序。通常会自动完成，但某些电脑可能会安装错误的驱动程序，从而使流程更复杂。

### 引导加载器方法

#### 优点

* 刷写总是可以成功。
* 刷写过程更快。
* 不依赖电脑进行刷写。

#### 缺点

* 固件、SD 卡和声音文件需要分别从不同位置下载，并手动放置到 SD 卡中。

**无论选择哪种方式，都有相应的指南可供参考。以下是两种方法的迁移指南和安装指南：**

### 从 OpenTX 迁移到 EdgeTX

[使用 EdgeTX Buddy 从 OpenTX 迁移到 EdgeTX](update-from-opentx-to-edgetx.md)

[使用引导加载器从 OpenTX 迁移到 EdgeTX](migrate-from-opentx-to-edgetx-using-the-bootloader.md)

### 从早期版本的 EdgeTX 更新

[使用 EdgeTX Buddy 从早期版本的 EdgeTX 更新](update-from-opentx-to-edgetx-1.md)

[使用引导加载器从早期版本的 EdgeTX 更新](update-from-an-earlier-version-of-edgetx-using-the-bootloader.md)
