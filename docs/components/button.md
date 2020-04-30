# Button 按钮

::: tip
常用的操作按钮。
:::

### 基础用法

<br>
基础的按钮用法。

:::demo type 接收 default、success、primary 字符串类型。

```vue
<Button>default</Button>
<Button type="success">success</Button>
<Button type="primary">primary</Button>
```

:::

### 不同尺寸

<br>

Button 组件提供三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo size 接收 default、small 和 large 三种尺寸。

```vue
<Button size="large">large </Button>
<Button>default </Button>
<Button size="small">small </Button>
```

:::

### 按钮组

<br>

以按钮组的方式出现，常用于多项类似操作。

:::demo ButtonGroup 标签来嵌套你的按钮

```vue
<ButtonGroup>
    <Button>Create new file</Button>
    <Button>
      Upload files
    </Button>
    <Button>Find file</Button>
</ButtonGroup>
```

:::

### props

<br>

| 参数 |   说明   |   类型 |                  可选值 |  默认值 |
| :--- | :------: | -----: | ----------------------: | ------: |
| type | 按钮类型 | string | default,primary,success | default |
| size | 按钮大小 | string |   small, default, large | default |

<!-- <BackTop /> -->
