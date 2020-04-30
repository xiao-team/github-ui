# Page 分页

::: tip
常用的分页组件。
:::

### 基础用法

<br>
基础的分页用法。

:::demo type 接收 default、success、primary 字符串类型。

```vue
<Page :total="180"></Page>
```

:::

### props

<br>

| 参数     |    说明    |   类型 | 可选值 |   默认值 |
| :------- | :--------: | -----: | -----: | -------: |
| total    |    总数    | number |      - |        0 |
| pageSize |  每页数量  | number |     -- |       10 |
| page     |   当前页   | number |     -- |        1 |
| prevText | 上一页文案 | string |     -- | Previous |
| nextText | 下一页文案 | string |     -- |     Next |

### event

<br>

| 事件名     |         说明         |   返回值 |
| :--------- | :------------------: | -------: |
| pageChange | 页码变化时触发的事件 | 当前页码 |
