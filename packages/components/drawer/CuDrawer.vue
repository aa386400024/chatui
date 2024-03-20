<template>
    <transition name="cu-drawer-fade">
        <div v-show="modelValue" class="cu-drawer" :class="drawerClasses" :style="drawerStyle"
            @click.self="handleClose">
            <header v-if="showHeader" class="cu-drawer__header">
                <slot name="header">{{ title }}</slot>
                <button v-if="showClose" class="cu-drawer__close-btn" @click="handleClose">关闭</button>
            </header>
            <div class="cu-drawer__body">
                <slot />
            </div>
            <footer v-if="$slots.footer" class="cu-drawer__footer">
                <slot name="footer" />
            </footer>
        </div>
    </transition>
    <div v-show="modelValue" class="cu-drawer-overlay" @click="handleClose"></div>
</template>

<script lang="ts" setup>
import { computed, withDefaults, defineProps, defineEmits } from 'vue'
import './style.scss'

const props = withDefaults(
    defineProps<{
        modelValue: boolean
        title?: string
        size?: string
        direction?: 'ltr' | 'rtl' | 'ttb' | 'btt'
        showClose?: boolean
        showHeader?: boolean
    }>(),
    {
        size: '300px',
        direction: 'rtl',
        showClose: true,
        showHeader: true
    }
)

const emit = defineEmits(['update:modelValue'])

const drawerClasses = computed(() => ({
    'is-open': props.modelValue,
    [`is-${props.direction}`]: true,
    'cu-drawer': true
}))

const drawerStyle = computed(() => {
    return props.direction === 'ttb' || props.direction === 'btt'
        ? { height: props.size }
        : { width: props.size };
});

const handleClose = () => {
    emit('update:modelValue', false)
}
</script>
