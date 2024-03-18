// Icon.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './CuIcon.vue'

const meta: Meta<typeof Icon> = {
    title: 'Components/Icon',
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        src: { control: 'text' },
        name: { control: 'text' },
        size: { control: 'text' },
        color: { control: 'color' },
        type: { control: 'select', options: ['svg', 'png', 'jpg'] }
    },
    args: {
        name: 'example',
        size: '24px',
        color: 'currentColor',
        type: 'svg',
        src: '/assets/icon/chat.svg' // 请替换为实际的 SVG 图标路径
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const CustomSize: Story = {
    args: {
        size: '48px'
    }
}

export const CustomColor: Story = {
    args: {
        color: '#FF5733'
    }
}

export const NonSvgIcon: Story = {
    args: {
        type: 'png',
        src: 'https://img.alicdn.com/imgextra/i4/O1CN01aG16y424E11XsURUd_!!6000000007358-2-tps-206-240.png' // 请替换为实际的 PNG 图标路径
    }
}

export const SvgIconFromUrl: Story = {
    args: {
        src: 'https://gw.alicdn.com/tfs/TB17TaySSzqK1RjSZFHXXb3CpXa-80-80.svg' // 这里可以是在线的 SVG 图标 URL
    }
}
