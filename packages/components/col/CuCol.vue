<template>
    <div :class="colClasses" :style="colStyles">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'
import './style.scss'

const props = withDefaults(defineProps<{
    span?: number,
    offset?: number,
    pull?: number,
    push?: number,
    xs?: number,
    sm?: number,
    md?: number,
    lg?: number,
    xl?: number
}>(), {
    span: 24,
    offset: 0,
    pull: 0,
    push: 0
})

const rowContext = inject('rowContext', { gutter: 0 })

const colClasses = computed(() => [
    'cu-col',
    `cu-col-${props.span}`,
    props.offset ? `cu-col-offset-${props.offset}` : '',
    props.pull ? `cu-col-pull-${props.pull}` : '',
    props.push ? `cu-col-push-${props.push}` : '',
    props.xs ? `cu-col-xs-${props.xs}` : '',
    props.sm ? `cu-col-sm-${props.sm}` : '',
    props.md ? `cu-col-md-${props.md}` : '',
    props.lg ? `cu-col-lg-${props.lg}` : '',
    props.xl ? `cu-col-xl-${props.xl}` : ''
])

const colStyles = computed(() => ({
    paddingLeft: `${rowContext.gutter / 2}px`,
    paddingRight: `${rowContext.gutter / 2}px`
}))
</script>