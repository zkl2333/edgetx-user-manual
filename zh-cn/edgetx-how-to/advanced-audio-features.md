---
description: 模型独立和模型依赖的音频！
---

# 高级音频功能

## 模型独立

这些是不特定于任何特定模型的声音，正确配置后位于遥控器SD卡/板载存储器上的 `/SOUNDS/language` 和 `/SOUNDS/language/SYSTEM` 中。

`/SOUNDS/language/SYSTEM` 中的文件由遥控器自动播放以响应特定事件，例如打开遥控器、遥测丢失、开关位置错误等。

您还可以添加 `Play Track` 全局功能，这些功能将响应您希望的任何触发条件而播放。

## 模型依赖

这些是特定于给定模型的声音，正确配置后位于遥控器SD卡/板载存储器上的 `/SOUNDS/language` 和 `/SOUNDS/language/model_name` 中。

`/SOUNDS/language` 中的文件可用于 Play Track 特殊功能，并将响应您配置的任何触发条件而播放。

除了 `Play Track` 特殊功能外，还可以通过将音频文件放入与模型同名的目录中来配置播放音频。

例如，对于英语，如果模型名为 `Ruxus 5`，您将创建一个名为 `/SOUNDS/en/Ruxus_5/` 的文件夹（注意需要将空格替换为下划线）。

然后，只需为以下任何触发事件创建/复制音频文件（格式正确！）到该文件夹中。

### 模型加载

在打开遥控器或切换到配置的模型时，启动开关检查完成后播放。

文件名：`name.wav`

### 开关

在开关位置改变时播放。

文件名结构：`switchID-position.wav`

* `SA-up.wav`
* `SA-mid.wav`（如果存在中间位置）
* `SA-down.wav`

### 多位置/步进开关

在开关位置改变时播放。

文件名结构（为清晰起见添加了连字符）：`P-switchNumber-position.wav`

* `P11.wav`（旋钮1，位置1）
* `P16.wav`（旋钮1，位置6）

### 逻辑开关

当逻辑开关改变状态时播放。

文件名结构：`switchID-condition.wav`

* `L1-up.wav`（真）
* `L1-down.wav`（假）

### 飞行模式

进入或退出飞行模式时播放。

文件名结构：`modeName-condition.wav`（注意：飞行模式名称中不能有空格）

* `ABC–off.wav`
* `ABC–on.wav`
