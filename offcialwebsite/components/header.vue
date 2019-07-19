<template>
    <header>
        <div class="header-main">
            <h1>
                <span>CompanyName</span>
                <span>互联网解决方案平台</span>
            </h1>
            <nav>
                <span v-for="(nav,index) in navs" :key="index" @click="goLink(index)" :class="{on:active==index}">{{nav.name}}</span>
            </nav>
        </div>
    </header>
</template>
<script>
    import Vue from 'vue'
    export default Vue.component('AppHeader', {
        data() {
            return {
                active: 0,
                navs:[{
                    name:'首页',
                    url:'/'
                }, {
                    name:'解决方案',
                    url:'/'
                }, {
                    name:'关于我们',
                    url:'about'
                }]
            }
        },
        methods:{
            goLink(index) {
                this.active = index
                this.$router.push(this.navs[index].url)
            }
        }
    })
</script>