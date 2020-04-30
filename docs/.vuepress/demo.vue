<template>
    <div class="vu-demo-block">
        <div class="component-container">
            <slot name="source"></slot>
        </div>
        <div :style="{ height: containerHeight }" class="code-container">
            <div style="flex: 1;">
                <div ref="code">
                    <slot></slot>
                    <slot name="highlight"></slot>
                </div>
            </div>
        </div>
        <div @click="showCode = !showCode" class="show-code-btn">
            {{ showCode ? '隐藏代码' : '显示代码' }}
        </div>
    </div>
</template>
<script>
export default {
    name: 'demoBlock',
    data() {
        return {
            showCode: false,
            containerHeight: 0,
            codeHeight: 0,
        }
    },
    watch: {
        showCode: {
            handler: function (val) {
                if (val) {
                    this.containerHeight = this.codeHeight + 'px'
                } else {
                    this.containerHeight = 0
                }
            },
        },
    },
    mounted() {
        this.codeHeight = this.$refs.code.clientHeight + 20
    },
}
</script>

<style lang="less">
.vu-demo-block {
    margin-top: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    background: #282c34;
    overflow: hidden;
    &:hover {
        box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
            0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
    .code-container {
        transition: all 0.3s;
        // padding-top: 10px;
        box-sizing: border-box;
        display: flex;
        overflow: hidden;
    }
    .component-container {
        padding: 24px;
        background-color: #fff;
        .language-vue {
            border-radius: none !important;
        }
    }
    .show-code-btn {
        position: relative;
        text-align: center;
        padding: 12px;
        border-top: 1px solid #ebebeb;
        background-color: #fff;
        cursor: pointer;
        z-index: 1;
        &:hover {
            color: #0366d6;
        }
    }
    .description {
        padding: 12px 20px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: 1px solid #ebebeb;
        border-radius: 3px;
        font-size: 16px;
        line-height: 22px;
        color: #666;
        word-break: break-word;
        margin: 10px 10px 10px;
        background-color: #fff;
    }
}
</style>
