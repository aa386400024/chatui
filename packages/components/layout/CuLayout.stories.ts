import type { Meta, StoryObj } from '@storybook/vue3'
import RowColLayout from './CuLayout.vue'

const meta: Meta = {
    title: 'Layout/Layout',
    component: RowColLayout,
    tags: ['autodocs'],
    argTypes: {
        gutter: {
            control: 'number',
            description: '栅格间距'
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
        },
        columns: {
            control: 'object',
            description: '列配置数组'
        }
    }
}

export default meta

type Story = StoryObj<typeof meta>

export const BasicLayout: Story = {
    args: {
        gutter: 10,
        columns: [
            { span: 8, content: 'Col 1' },
            { span: 8, content: 'Col 2' },
            { span: 8, content: 'Col 3' },
            { span: 12, content: 'Col 4' },
            { span: 12, content: 'Col 5' }
        ]
    }
}

export const OffsetAndAlignment: Story = {
    args: {
        gutter: 20,
        justify: 'center',
        align: 'middle',
        columns: [
            { span: 8, content: 'Col 1' },
            { span: 8, offset: 8, content: 'Col 2' },
        ]
    }
}
