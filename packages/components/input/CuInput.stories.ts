import type { Meta, StoryObj } from '@storybook/vue3'
import CuInput from './CuInput.vue'

const meta: Meta<typeof CuInput> = {
    title: 'Chat/Input',
    component: CuInput,
    argTypes: {
        placeholder: {
            control: 'text',
            description: '占位符'
        },
        disabled: {
            control: 'boolean',
            description: '是否禁用'
        },
        readonly: {
            control: 'boolean',
            description: '是否只读'
        },
        maxLength: {
            control: 'number',
            description: '最大字符长度'
        },
        customStyle: {
            control: 'object',
            description: '自定义样式对象'
        },
        autosize: {
            control: 'object',
            description: '自动调整高度的选项'
        },
        wordLimitPosition: {
            control: 'select',
            options: ['outer-top-left', 'outer-top-right', 'outer-bottom-left', 'outer-bottom-right', 'inner-top-left', 'inner-top-right', 'inner-bottom-left', 'inner-bottom-right'],
            description: 'Word limit 显示位置'
        },
    },
    parameters: {
        actions: {
            handles: ['input', 'focus', 'blur', 'change']
        }
    },
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        placeholder: '请输入文本...',
        maxLength: 4000,
        autosize: { minRows: 2, maxRows: 4 }
    }
}

export const WithMaxLength: Story = {
    args: {
        placeholder: '最多输入100个字符',
        maxLength: 100
    }
}

export const AutoResize: Story = {
    args: {
        placeholder: '自动调整高度',
        maxLength: 4000,
        autosize: { minRows: 2, maxRows: 4 }
    }
};

export const CustomStyle: Story = {
    args: {
        placeholder: '自定义样式覆盖',
        customStyle: { backgroundColor: '#f2f2f2', borderColor: '#0000ff', borderRadius: '20px' }
    }
};

export const Disabled: Story = {
    args: {
        placeholder: '禁止输入',
        disabled: true
    }
}

export const Readonly: Story = {
    args: {
        placeholder: '只读文本',
        readonly: true
    }
}

export const WordLimitPosition: Story = {
    args: {
        placeholder: '请输入文本...',
        maxLength: 100,
        wordLimitPosition: 'outer-top-left'
    }
};
