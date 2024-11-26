<template>
    <div>
        <p>{{data.counter}}</p>
        <button @click.prevent="click">click</button>
    </div>
</template>

<script setup>
/* eslint-disable */
import {ref, reactive} from 'vue';

    // const counter = ref(0);

    const data = reactive({
        counter: 0
    });

    function click() {
        // counter.value++;
        data.counter++;
    }
    // export default {
    //     data() {
    //         return {
    //             counter: 0
    //         };
    //     },
    //     methods: {
    //         click() {
    //             this.counter++;
    //         }
    //     }
    // }
</script>