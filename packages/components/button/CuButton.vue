<template>
    <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script lang="ts" setup>
import './style.scss'
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        /**
         * The label of the button
         */
        label: string
        /**
         * primary or secondary button
         */
        primary?: boolean
        /**
         * size of the button
         */
        size?: 'small' | 'medium' | 'large'
        /**
         * background color of the button
         */
        backgroundColor?: string
    }>(),
    { primary: false }
)

const emit = defineEmits<{
    (e: 'click', id: number): void
}>()

const classes = computed(() => ({
    'cu-button': true,
    'cu-button--primary': props.primary,
    'cu-button--secondary': !props.primary,
    [`cu-button--${props.size || 'medium'}`]: true
}))

const style = computed(() => ({
    backgroundColor: props.backgroundColor
}))

const onClick = () => {
    emit('click', 1)
}
</script>
