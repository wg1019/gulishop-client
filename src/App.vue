<template>
    <div>      
      <Header/>
      <router-view></router-view>
      <!-- <Footer v-show="$route.path !=='/login' && $route.path !=='/register'"></Footer> -->
      <Footer v-show="!$route.meta.isHidden"></Footer>
    </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
    data() {
        return {

        };
    },
    components:{Header,Footer},
    methods: {

    },
};
</script>

<style  scoped>

</style>
