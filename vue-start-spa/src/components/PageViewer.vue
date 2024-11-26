<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
export default {
   created() {
        const pageData = this.$pages.getSinglePage(this.$route.params.index);
        this.page = pageData;
   },
    data() {
        return {
            page: null
        };
    }
}

</script>

<style scoped>
.emphasize {
    color: blue;
}
</style>
