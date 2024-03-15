import type { Meta, StoryObj } from '@storybook/vue3'
import CuCol from './CuCol.vue'

const meta: Meta<typeof CuCol> = {
    title: 'Layout/Col',
    component: CuCol,
    tags: ['autodocs'],
    argTypes: {
        span: {
            control: 'number',
            description: '占据的列数'
        },
        offset: {
            control: 'number',
            description: '左侧的间隔格数'
        },
        pull: {
            control: 'number',
            description: '向左移动格数'
        },
        push: {
            control: 'number',
            description: '向右移动格数'
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        span: 12
    }
}

export const Offset: Story = {
    args: {
        span: 12,
        offset: 6
    }
}

export const PullPush: Story = {
    args: {
        span: 12,
        pull: 3,
        push: 3
    }
}
