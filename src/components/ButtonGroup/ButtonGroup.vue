<template>
    <div :class="classes">
        <slot></slot>
    </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'gh-btn-group'

export default {
    name: 'ButtonGroup',
    computed: {
        classes() {
            return `${prefixCls}`
        },
    },
}
</script>
