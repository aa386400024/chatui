import type { Meta, StoryObj } from '@storybook/vue3'
import CuRow from './CuRow.vue'

const meta: Meta<typeof CuRow> = {
    title: 'Layout/Row',
    component: CuRow,
    tags: ['autodocs'],
    argTypes: {
        gutter: {
            control: 'number',
            description: '栅格间隔'
        },
        justify: {
            control: 'select',
            options: ['start', 'center', 'end', 'space-around', 'space-between', 'space-evenly'],
            description: '水平排列方式'
        },
        align: {
            control: 'select',
            options: ['top', 'middle', 'bottom'],
            description: '垂直对齐方式'
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        gutter: 20
    }
}

export const JustifyCenter: Story = {
    args: {
        gutter: 20,
        justify: 'center'
    }
}

export const AlignMiddle: Story = {
    args: {
        gutter: 20,
        align: 'middle'
    }
}
