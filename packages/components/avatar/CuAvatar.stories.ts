import type { Meta, StoryObj } from '@storybook/vue3'
import Avatar from './CuAvatar.vue'

const meta: Meta<typeof Avatar> = {
    title: 'Example/Avatar',
    component: Avatar,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'text', // 使用文本框控制
            description: 'Size of the avatar (can be "small", "default", "large", or a number)'
        },
        src: {
            control: 'text',
            description: 'Image source for the avatar'
        },
        alt: {
            control: 'text',
            description: 'Alternative text for the avatar image'
        },
        shape: {
            control: 'select',
            options: ['circle', 'square'],
            description: 'Shape of the avatar'
        },
        fit: {
            control: 'select',
            options: ['fill', 'contain', 'cover', 'none', 'scale-down'],
            description: 'Object-fit property of the avatar image'
        },
        icon: {
            control: 'text',
            description: 'Icon for the avatar'
        }
    },
    args: {
        size: 'default', // default size
        src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        alt: 'Default Avatar',
        shape: 'circle',
        fit: 'cover'
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const SmallAvatar: Story = {
    args: {
        size: 'small',
        src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        alt: 'Small Avatar',
        shape: 'circle'
    }
}

export const LargeSquareAvatar: Story = {
    args: {
        size: 'large',
        src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        alt: 'Large Square Avatar',
        shape: 'square'
    }
}

export const IconAvatar: Story = {
    args: {
        icon: 'user',
        size: 'default',
        shape: 'circle'
    }
}

export const LoadError: Story = {
    args: {
        src: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png', // Invalid URL to simulate load failure
        alt: 'Load Failed',
        size: 'default',
        shape: 'circle'
    }
}

export const CustomFit: Story = {
    args: {
        src: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        alt: 'Custom Fit Avatar',
        size: 'default',
        fit: 'scale-down'
    }
}
