<template>
    <div>
        <!-- Search
        <br>
        keyword:{{$route.params.keyword}}------{{keyword}}
        <br>
        keyword1:{{$route.query.keyword1}}------{{keyword1}} -->
        <TypeNav/>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    props:['keyword','keyword1'],
    methods: {

    },
};
</script>

<style  scoped>

</style>
