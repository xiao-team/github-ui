<template>
    <div id="app">
        <a
            class="github-fork-ribbon right-top"
            href="https://github.com/xiao-team/github-ui"
            title="Fork me on GitHub"
            >Fork me on GitHub</a
        >
        <transition name="slide-up">
            <h1>GitHub UI</h1>
        </transition>
        <div class="flex space-around router"></div>
        <Button @click="show = !show"><Icon icon="star" />Star</Button>
        <Button type="success">sign in</Button>
        <Button type="success">New pull request</Button>
        <Button size="small" type="success">我是成功小按钮</Button>
        <Icon icon="user" />
        <Icon icon="add" />
        <Icon icon="check" />
        <Input placeholder="请输入2名称2" v-model="haha" @blur="blur" />
        <div style="margin-top: 20px;">
            <transition name="move-up">
                <div v-if="show">
                    <Page :total="110"></Page>
                </div>
            </transition>

            <Page></Page>
        </div>
    </div>
</template>
<script>
export default {
    name: 'app',
    data() {
        return {
            show: true,
            haha: '',
        }
    },
    components: {
        // HelloWorld,
    },
    created() {},
    methods: {
        blur() {
            // alert(111)
        },
    },
    destroyed() {},
}
</script>

<style scoped lang="less">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    transform: rotate(0deg);
}
.flex {
    display: flex;
}
.space-around {
    justify-content: space-around;
}
.router {
    width: 300px;
    margin: 10px auto;
    color: #42b983;
    font-size: 20px;
    text-decoration: underline;
}
.router a {
    cursor: pointer;
    color: #42b983;
}
.router a:hover {
    color: #00aac5;
}
.github-fork-ribbon {
    width: 12.1em;
    height: 12.1em;
    position: absolute;
    overflow: hidden;
    top: 0;
    right: 0;
    z-index: 9999;
    pointer-events: none;
    font-size: 13px;
    text-decoration: none;
    text-indent: -999999px;
}
.github-fork-ribbon.fixed {
    position: fixed;
}
.github-fork-ribbon:before,
.github-fork-ribbon:after {
    position: absolute;
    display: block;
    width: 15.38em;
    height: 1.54em;
    top: 3.23em;
    right: -3.23em;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}
.github-fork-ribbon:before {
    content: '';
    padding: 0.38em 0;
    background-color: #f06;
    background-image: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0)),
        to(rgba(0, 0, 0, 0.15))
    );
    background-image: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
    );
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.15)
    );
    /* Add a drop shadow */

    -webkit-box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
    box-shadow: 0 0.15em 0.23em 0 rgba(0, 0, 0, 0.5);
    pointer-events: auto;
}
.github-fork-ribbon:after {
    /* Set the text from the title attribute */

    content: attr(title);
    /* Set the text properties */

    color: #fff;
    font: 700 1em 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.54em;
    text-decoration: none;
    text-shadow: 0 -0.08em rgba(0, 0, 0, 0.5);
    text-align: center;
    text-indent: 0;
    /* Set the layout properties */

    padding: 0.15em 0;
    margin: 0.15em 0;
    /* Add "stitching" effect */

    border-width: 0.08em 0;
    border-style: dotted;
    border-color: #fff;
    border-color: rgba(255, 255, 255, 0.7);
}
.github-fork-ribbon.left-top:before,
.github-fork-ribbon.left-top:after {
    right: auto;
    left: -3.23em;
}
.github-fork-ribbon.left-top:before,
.github-fork-ribbon.left-top:after {
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>
