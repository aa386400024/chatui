<template>
    <div class="avatar" :class="avatarClass" :style="avatarStyle">
        <img v-if="src && !hasLoadError" :src="src" :srcset="srcSet" :alt="alt" :style="fitStyle"
            @error="handleError" />
        <div v-else-if="icon" class="avatar-icon">
            <component :is="icon" />
        </div>
        <slot v-else />
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue';

const props = withDefaults(
    defineProps<{
        src: string,
        srcSet?: string,
        alt: string,
        icon?: string,
        size?: number | 'small' | 'medium' | 'large',
        shape?: 'circle' | 'square',
        fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    }>(),
    {
        src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        alt: '',
        size: 'medium', // 默认尺寸
        shape: 'circle', // 默认形状
        fit: 'cover', // 默认图片填充模式
    }
);

const hasLoadError = ref(false);

const avatarClass = computed(() => ({
    'cu-avatar': true,
    [`cu-avatar--${props.size}`]: typeof props.size === 'string',
    [`cu-avatar--${props.shape}`]: true,
    'cu-avatar--icon': !!props.icon,
}));

const avatarStyle = computed(() => {
    let sizeValue;
    if (typeof props.size === 'number') {
        sizeValue = `${props.size}px`;
    } else {
        sizeValue = getSizeValue(props.size);
    }
    return {
        width: sizeValue,
        height: sizeValue,
        objectFit: props.fit,
    };
});

const getSizeValue = (sizeName: string) => {
    switch (sizeName) {
        case 'small': return '30px'; // 示例值，根据需要调整
        case 'medium': return '50px'; // 示例值，根据需要调整
        case 'large': return '70px'; // 示例值，根据需要调整
        default: return '50px';
    }
};

const fitStyle = computed(() => ({
    objectFit: props.fit,
}));

watch(() => props.src, () => (hasLoadError.value = false));

const handleError = () => {
    hasLoadError.value = true;
    // 触发自定义的错误事件
};
</script>

<style scoped>
.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    /* 确保文本内容垂直和水平居中 */
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* 当文本太长时显示省略号 */
}

.avatar--circle {
    border-radius: 50%;
}

.avatar--square {
    border-radius: 0;
}

.avatar-icon {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    display: block;
    max-width: 100%;
    max-height: 100%;
}
</style>