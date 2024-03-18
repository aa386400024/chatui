<template>
    <div ref="imgContainer">
        <div v-if="isSvg" :class="svgClass" v-html="svgContent"></div>
        <img v-else :src="props.src" :style="imgStyle" alt="">
    </div>
</template>

<script setup lang="ts">
import { computed, ref, watch, watchEffect, nextTick } from 'vue';

const props = withDefaults(
    defineProps<{
        src: string,
        name: string,
        size?: string,
        color?: string,
        type?: string,
    }>(),
    {
        size: '24px',
        color: 'currentColor',
        type: 'svg',
    }
);

const imgContainer = ref();
const isSvg = computed(() => props.type === 'svg');

const svgClass = computed(() => ({
    'svg-icon': true,
}));

const imgStyle = computed(() => ({
    width: props.size,
    height: props.size,
}));

const svgContent = ref('');

const loadSvg = async () => {
    if (!isSvg.value) return;
    try {
        const response = await fetch(props.src);
        const data = await response.text();
        svgContent.value = data;

        await nextTick();
        const svgElement = imgContainer.value?.querySelector('svg');
        if (svgElement) {
            if (!svgElement.hasAttribute('viewBox') || svgElement.getAttribute('viewBox') === '0 0 0 0') {
                const bbox = svgElement.getBBox();
                svgElement.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
            }
            svgElement.setAttribute('width', props.size);
            svgElement.setAttribute('height', props.size);
            svgElement.setAttribute('fill', props.color);
        }
    } catch (error) {
        console.error(`SvgIcon: Error loading SVG content from '${props.src}':`, error);
    }
};

const updateSvgAttributes = () => {
    const svgElement = imgContainer.value?.querySelector('svg');
    if (svgElement) {
        svgElement.setAttribute('width', props.size);
        svgElement.setAttribute('height', props.size);
        svgElement.setAttribute('fill', props.color);
    }
};

watchEffect(() => {
    loadSvg();
});

// 当 size 或 color 更改时，更新 SVG 属性
watch([() => props.size, () => props.color], () => {
    updateSvgAttributes();
}, { immediate: true });
</script>

<style scoped>
.svg-icon,
.icon-container {
    display: inline-block;
}
</style>
