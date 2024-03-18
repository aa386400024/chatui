<template>
    <cu-row :gutter="gutter" :justify="justify" :align="align">
        <cu-col v-for="col in columns" :key="col.key" v-bind="col">
            <div class="content">{{ col.content }}</div>
        </cu-col>
    </cu-row>
</template>

<script lang="ts" setup>
import { } from 'vue'
import CuRow from '../row/CuRow.vue'
import CuCol from '../col/CuCol.vue'

const props = defineProps({
    gutter: Number,
    justify: String,
    align: String,
    columns: Array
})
</script>

<style scoped>
.content {
    background-color: #99a9bf;
    padding: 10px;
    margin: 10px auto;
    text-align: center;
    border-radius: 6px;
    color: #fff;
}
</style>