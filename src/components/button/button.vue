<template>
    <button
        :class="classes"
        :disabled="disabled"
        @click="handleClick"
        :style="styless"
    >
        <span v-if="showSlot" ref="slot">
            <slot></slot>
        </span>
    </button>
</template>

<script>
const prefixCls = 'gh-btn'
import { oneOf } from '../../utils/assist'
export default {
    name: 'Button',
    props: {
        type: {
            validator(value) {
                return oneOf(value, ['default', 'primary', 'success'])
            },
            default: 'default',
        },
        disabled: Boolean,
        size: {
            validator(value) {
                return oneOf(value, ['default', 'small', 'large'])
            },
            default: 'default',
        },
    },
    data() {
        return {
            showSlot: true,
        }
    },
    computed: {
        classes() {
            return [
                `${prefixCls}`,
                `${prefixCls}-${this.size}-size`,
                `${prefixCls}-${this.type}`,
            ]
        },
        styless() {
            return {}
        },
    },
    mounted() {
        this.showSlot = this.$slots.default !== undefined
    },
    methods: {
        handleClick(e) {
            this.$emit('click', e)
        },
    },
}
</script>

<style></style>
