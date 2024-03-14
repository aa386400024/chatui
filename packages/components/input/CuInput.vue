<template>
    <div class="cu-input-container" :class="inputContainerClasses">
        <textarea ref="textarea" :class="textareaClasses" v-bind="$attrs" :disabled="disabled" :readonly="readonly"
            :placeholder="placeholder" :style="computedStyle" @input="onInput" @focus="onFocus" @blur="onBlur"
            @change="onChange" :maxlength="maxLength"></textarea>
        <span v-if="showWordLimit" class="word-limit">{{ currentLength }} / {{ maxLength }}</span>
    </div>
</template>

<script lang="ts" setup>
import './style.scss'
import { computed, ref, watch, onMounted, nextTick } from 'vue';

const defaultStyle = {
    borderRadius: '10px',
    padding: '10px',
    // 您可以在这里添加更多默认样式
};

const props = withDefaults(defineProps<{
    placeholder?: string,
    disabled?: boolean,
    readonly?: boolean,
    maxLength?: number,
    customStyle?: Record<string, any>,
    autosize?: { minRows?: number, maxRows?: number }
}>(), {
    placeholder: 'Please input',
    disabled: false,
    readonly: false,
    maxLength: 0,
    customStyle: () => ({}),
    autosize: undefined
});

const computedStyle = computed(() => {
    return { ...defaultStyle, ...props.customStyle };
});

const emits = defineEmits(['update:modelValue', 'input', 'focus', 'blur', 'change']);

const textarea = ref<HTMLTextAreaElement | null>(null);
const inputContainerClasses = computed(() => [
    'cu-input-container',
    { 'is-disabled': props.disabled, 'is-readonly': props.readonly }
]);

const textareaClasses = computed(() => ['cu-textarea']);
const showWordLimit = computed(() => props.maxLength > 0);
const currentLength = ref(0);
// 假设行高为20px，这个值可能需要根据实际情况调整
const lineHeight = 20;

// 自适应高度的实现
const resizeTextarea = () => {
    const ta = textarea.value;
    if (!ta || !props.autosize) return;

    const autosize = props.autosize;
    const minRows = autosize.minRows || 1;
    const maxRows = autosize.maxRows || Infinity;

    // 重置高度以获取正确的滚动高度
    ta.style.height = 'auto';
    const height = Math.min(Math.max(ta.scrollHeight, minRows * lineHeight), maxRows * lineHeight);

    ta.style.height = `${height}px`;
};

watch(() => props.placeholder, resizeTextarea);
watch(() => props.autosize, resizeTextarea); // 监听 autosize 的变化

const onInput = (event: Event) => {
    if (!textarea.value) return;
    const value = textarea.value.value;
    currentLength.value = value.length;
    resizeTextarea();
    emits('input', value);
    emits('update:modelValue', value);
};

const onFocus = (event: FocusEvent) => {
    emits('focus', event);
};

const onBlur = (event: FocusEvent) => {
    emits('blur', event);
};

const onChange = (event: Event) => {
    emits('change', event);
};

onMounted(() => {
    nextTick(() => resizeTextarea());
});

watch(() => props.placeholder, resizeTextarea);
</script>