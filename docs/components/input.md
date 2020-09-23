# Input 输入框

::: tip
常用的表单输入框。
:::

### 基础用法

<br>
基础的输入框用法。

:::demo v-model 双向绑定值

```vue
<Input v-model="value" placeholder="请输入账号" />
```

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>
