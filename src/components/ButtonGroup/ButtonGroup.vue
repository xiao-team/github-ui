<template>
    <div :class="classes"></div>
</template>

<script>
// 组件class前缀
const prefixCls = 'gh-ButtonGroup'

export default {
    name: 'ButtonGroup',
    computed: {
        classes() {
            return `${prefixCls}`
        },
    },
}
</script>
