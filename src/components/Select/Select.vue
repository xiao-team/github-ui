<template>
    <div :class="classes"></div>
</template>

<script>
// 组件class前缀
const prefixCls = 'gh-Select'

export default {
    name: 'Select',
    computed: {
        classes() {
            return `${prefixCls}`
        },
    },
}
</script>
