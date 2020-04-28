<template>
    <span :class="wrapClasses" :style="styles" v-if="pageTotal > 1">
        <span :class="prevClasses" @click="prevPage">{{ prevText }}</span>
        <template v-if="pageTotal > 2">
            <!-- <span :class="[prefixCls + '-item']">1</span>
            <span :class="[prefixCls + '-item']">2</span>
            <span :class="[prefixCls + '-item', prefixCls + '-gap']">…</span> -->
            <span
                v-for="item in pageMap"
                :class="[
                    prefixCls + '-item',
                    item === '…' ? prefixCls + '-gap' : '',
                    +item === currentPage ? prefixCls + '-item-active' : '',
                ]"
                :key="item"
                @click="changePage(item)"
            >
                {{ item }}
            </span>
        </template>
        <span :class="nextClasses" @click="nextPage">{{ nextText }}</span>
    </span>
</template>

<script>
const prefixCls = 'gh-page'
export default {
    name: 'Page',
    props: {
        pageSize: {
            type: Number,
            default: 10,
        },
        total: {
            type: Number,
            default: 0,
        },
        page: {
            type: Number,
            default: 1,
        },
        prevText: {
            type: String,
            default: 'Previous',
        },
        nextText: {
            type: String,
            default: 'Next',
        },
    },
    data() {
        return {
            prefixCls: prefixCls,
            currentPage: 1,
        }
    },
    watch: {
        page: {
            handler: function (val) {
                this.currentPage = +val
            },
            immediate: true,
        },
    },
    computed: {
        wrapClasses() {
            return [`${prefixCls}`]
        },
        prevClasses() {
            return [
                `${prefixCls}-item`,
                `${prefixCls}-prev`,
                this.currentPage === 1 ? `${prefixCls}-item-disable` : '',
            ]
        },
        nextClasses() {
            return [
                `${prefixCls}-item`,
                `${prefixCls}-next`,
                this.currentPage === this.pageTotal
                    ? `${prefixCls}-item-disable`
                    : '',
            ]
        },
        styles() {
            return {}
        },
        pageTotal() {
            return Math.ceil(this.total / this.pageSize)
        },
        pageMap() {
            if (this.pageTotal < 11) {
                return this.pageTotal
            } else {
                let arr = []
                if (this.currentPage < 7) {
                    for (let i = 1; i <= this.currentPage + 2; i++) {
                        arr.push(i)
                    }
                    arr.push('…', this.pageTotal - 1, this.pageTotal)
                } else if (this.currentPage < this.pageTotal - 5) {
                    arr.push(
                        1,
                        2,
                        '…',
                        this.currentPage - 2,
                        this.currentPage - 1,
                        this.currentPage,
                        this.currentPage + 1,
                        this.currentPage + 2,
                        '…',
                        this.pageTotal - 1,
                        this.pageTotal
                    )
                } else {
                    arr.push(1, 2, '…')
                    for (
                        let i = this.currentPage - 2;
                        i <= this.pageTotal;
                        i++
                    ) {
                        arr.push(i)
                    }
                }
                return arr
            }
        },
    },
    methods: {
        changePage(item) {
            if (item === '…') return
            this.currentPage = +item
            this.$emit('pageChange', this.currentPage)
        },
        prevPage() {
            if (this.currentPage === 1) return
            this.currentPage--
            this.$emit('pageChange', this.currentPage)
        },
        nextPage() {
            if (this.currentPage === this.pageTotal) return
            this.currentPage++
            this.$emit('pageChange', this.currentPage)
        },
    },
}
</script>

<style></style>
