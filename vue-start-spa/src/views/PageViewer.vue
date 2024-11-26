<template>
    <div v-if="page" class="container">
        <h1 class="emphasize">{{page.pageTitle}}</h1>
        <p>{{page.content}}</p>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    inject: ['$pages'],
   created() {
        const pageData = this.$pages.getSinglePage(this.$route.params.index);
        this.page = pageData;

        this.$watch(() => this.$route.params, (newParams, prevParams) => {
            this.page = this.$pages.getSinglePage(newParams.index);
        });
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
