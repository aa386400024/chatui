import type { Meta, StoryObj } from '@storybook/vue3'
import Message from './CuMessage.vue'

const meta = {
    title: 'Chat/Message',
    component: Message,
    render: (args: any) => ({
        components: { Message },
        setup() {
            return { args }
        },
        template: '<message v-bind="args">{{ args.content }}</message>'
    }),
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select', options: ['sent', 'received'],
            description: '消息类型'
        },
        content: {
            control: 'text',
            description: '消息内容'
        },
        textAlign: {
            control: 'select', options: ['start', 'end', 'center'],
            description: '文本对齐方式'
        },
        sentBorderRadius: {
            control: 'text',
            description: '发送消息的边框圆角'
        },
        receivedBorderRadius: {
            control: 'text',
            description: '接收消息的边框圆角'
        }
    }
} satisfies Meta<typeof Message>

export default meta

type Story = StoryObj<typeof meta>

export const SentMessage: Story = {
    args: {
        type: 'sent',
        content: '这是发送的消息',
        textAlign: 'start',
        sentBorderRadius: '26px 6px 26px 26px'
    }
}

export const ReceivedMessage: Story = {
    args: {
        type: 'received',
        content: '这是接收的消息',
        textAlign: 'start',
        receivedBorderRadius: '6px 26px 26px 26px'
    }
}
