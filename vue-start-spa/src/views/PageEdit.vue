<template>
   <p>edit {{ route.params.index }}</p>
</template>

<script setup>
/* eslint-disable */
import { useRoute } from 'vue-router';

const route = useRoute();
const props = defineProps(['index']);

</script>