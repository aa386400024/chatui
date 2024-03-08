---

# Chat UI组件库命名约定

为了保持CSS的一致性和可维护性，我们的Chat UI组件库采用了基于BEM（块（Block）、元素（Element）、修饰符（Modifier））的命名约定，结合了自定义的Sass变量来管理命名空间和分隔符。以下是我们的命名系统和样式指南。

## Sass变量定义

我们定义了一系列的Sass变量来标准化类名的结构：

```scss
$namespace: 'cu' !default; // 命名空间
$common-separator: '-' !default; // 块和元素的分隔符
$element-separator: '__' !default; // 元素内部的分隔符
$modifier-separator: '--' !default; // 修饰符的分隔符
$state-prefix: 'is-' !default; // 状态类的前缀
```

## 应用示例

以下是如何应用这些命名约定和变量的示例。

### 基本块（Block）

- **组件基础**：所有组件的基础类名以命名空间开始。

```css
.cu-message {
  /* 消息组件基础样式 */
}
```

### 元素（Element）

- **组件内部元素**：使用元素分隔符`__`连接块名和元素名。

```css
.cu-message__title {
  /* 消息标题样式 */
}

.cu-message__content {
  /* 消息内容样式 */
}
```

### 修饰符（Modifier）

- **组件或元素变体**：使用修饰符分隔符`--`连接块或元素名和修饰符名。

```css
.cu-message--sent {
  /* 发送消息样式 */
}

.cu-message--received {
  /* 接收消息样式 */
}
```

### 状态

- **组件状态**：以状态前缀`is-`开始的类名表示组件的状态。

```css
.cu-message.is-highlighted {
  /* 突出显示的消息 */
}
```

## 结论

通过遵循这套命名约定，我们可以确保组件库中的CSS类名保持高度的一致性和可预测性，同时也方便了样式的自定义和扩展。请确保在开发新组件或修改现有组件时遵守这些指南。

---
