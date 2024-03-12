<template>
    <div class="cu-avatar" :class="avatarClass" :style="avatarStyle">
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

const avatarClass = computed(() => {
    const classObj = {
        'cu-avatar': true,
        [`cu-avatar--${props.size}`]: typeof props.size === 'string',
        [`cu-avatar--${props.shape}`]: true,
        'cu-avatar--icon': !!props.icon,
    };
    console.log(classObj); // 调试输出
    return classObj;
});


const avatarStyle = computed(() => {
    let sizeValue: string;

    // 尝试将size解析为数字
    const parsedSize = parseInt(props.size as string);
    if (!isNaN(parsedSize)) {
        sizeValue = `${parsedSize}px`;
    } else if (typeof props.size === 'string') {
        // 如果size是字符串且匹配预定义的值
        sizeValue = getSizeValue(props.size);
    } else {
        // 默认值
        sizeValue = '50px';
    }

    return {
        width: sizeValue,
        height: sizeValue,
        objectFit: props.fit as string,
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

<style lang="scss" scoped>
.cu-avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;

    &--circle {
        border-radius: 50%;
    }

    &--square {
        border-radius: 0;
    }

    &--small,
    &--medium,
    &--large {
        // 尺寸相关样式
    }

    &--icon {
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

img {
    display: block;
    max-width: 100%;
    max-height: 100%;
}
</style>
