// Markdown.stories.ts
import type { Meta, StoryObj } from '@storybook/vue3'

import CuMarkdown from './CuMarkdown.vue'

// 元数据配置
const meta: Meta = {
    title: 'Basic/Markdown',
    component: CuMarkdown,
    tags: ['autodocs'],
    args: {
        markdown: '' // 默认的 Markdown 文本
    }
}

export default meta

type Story = StoryObj<typeof meta>

// 定义几个不同的故事
export const Default: Story = {
    args: {
        markdown: '# Default Markdown\n\nRendered by the component.'
    }
}

export const WithCodeBlock: Story = {
    args: {
        markdown: '```javascript\nconsole.log("Hello, world!");\n```'
    }
}

export const WithLink: Story = {
    args: {
        markdown: '[OpenAI](https://www.openai.com)'
    }
}

export const WithImage: Story = {
    args: {
        markdown: '![Alt Text](https://via.placeholder.com/150)'
    }
}

// 你可以根据需要添加更多的故事
