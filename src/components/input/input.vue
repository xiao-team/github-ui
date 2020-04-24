<template>
    <span>
        <input
            type="text"
            :placeholder="placeholder"
            :class="classes"
            :disabled="disabled"
            @change="handleChange"
            @blur="handleBlur"
            :style="styless"
            v-model="inputValue"
        />
    </span>
</template>

<script>
const prefixCls = 'gh-input'
// import { oneOf } from '../../utils/assist'
export default {
    name: 'Input',
    props: {
        placeholder: String,
        value: [String, Number],
        disabled: Boolean,
    },
    data() {
        return {
            inputValue: '',
        }
    },
    watch: {
        value: {
            handler: function (params) {
                this.inputValue = params
            },
            immediate: true,
        },
    },
    computed: {
        classes() {
            return [`${prefixCls}`]
        },
        styless() {
            return {}
        },
    },
    methods: {
        handleChange() {
            this.$emit('input', this.inputValue)
        },
        handleBlur() {
            this.$emit('blur')
        },
    },
}
</script>

<style></style>
