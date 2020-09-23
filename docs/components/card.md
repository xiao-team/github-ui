# Card 卡片

::: tip
一种卡片式的内容容器
:::

### 基础用法

<br>
包含标题，内容和底部。

:::demo 简单的容器。

```vue
<Card>
    <div slot="header">我是标题</div>
    <div>我是正文你是什么</div>
</Card>
<br>
<Card>
    <div>我是正文你是什么</div>
</Card>
<br>
<Card>
    <div>我是正文你是什么</div>
    <div slot="footer">我是底部</div>
</Card>
```
:::