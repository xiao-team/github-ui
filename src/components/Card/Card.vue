<template>
    <div :class="classes">
        <header v-if="$slots.header">
            <slot name="header"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer v-if="$slots.footer">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
// 组件class前缀
const prefixCls = 'gh-Card'

export default {
    name: 'Card',
    computed: {
        classes() {
            return `${prefixCls}`
        },
    },
    created() {
        console.log(this.$slots)
    },
}
</script>
