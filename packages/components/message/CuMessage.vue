<template>
    <div class="cu-message" :class="messageClass" :style="messageStyle">
        <slot />
    </div>
</template>

<script lang="ts" setup>
import './style.scss'
import { computed, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
    type?: 'sent' | 'received',
    content: string,
    textAlign?: 'start' | 'end' | 'center',
    sentBorderRadius?: string,
    receivedBorderRadius?: string
}>(), {
    type: 'sent',
    content: '',
    textAlign: 'start',
    sentBorderRadius: '26px 6px 26px 26px',
    receivedBorderRadius: '6px 26px 26px 26px'
});

const messageClass = computed(() => ({
    'cu-message--sent': props.type === 'sent',
    'cu-message--received': props.type === 'received'
}));

const messageStyle = computed(() => ({
    textAlign: props.textAlign,
    borderRadius: props.type === 'sent' ? props.sentBorderRadius : props.receivedBorderRadius
}));
</script>
