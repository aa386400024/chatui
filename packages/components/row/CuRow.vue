<template>
    <div :class="rowClasses" :style="rowStyles">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import './style.scss'

const props = withDefaults(defineProps<{
    gutter?: number,
    justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between' | 'space-evenly',
    align?: 'top' | 'middle' | 'bottom'
}>(), {
    gutter: 0,
    justify: 'start',
    align: 'top'
})

provide('rowContext', { gutter: props.gutter })

const rowClasses = computed(() => ({
    'cu-row': true,
    [`cu-row--justify-${props.justify}`]: props.justify !== 'start',
    [`cu-row--align-${props.align}`]: props.align !== 'top',
}))

const rowStyles = computed(() => ({
    marginRight: `-${props.gutter / 2}px`,
    marginLeft: `-${props.gutter / 2}px`
}))
</script>