import type { Meta, StoryObj } from '@storybook/vue3'
import CuDrawer from './CuDrawer.vue'

const meta: Meta<typeof CuDrawer> = {
    title: 'Component/Drawer',
    component: CuDrawer,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        size: { control: 'text' },
        direction: { control: 'select', options: ['ltr', 'rtl', 'ttb', 'btt'] },
        showClose: { control: 'boolean' },
        showHeader: { control: 'boolean' },
        modelValue: { control: 'boolean' }
    },
    args: {
        showClose: true,
        showHeader: true,
        modelValue: false // 默认关闭状态
    },
    parameters: {
        // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
        // layout: 'fullscreen'
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        modelValue: true,
        title: '默认标题',
        size: '300px',
        direction: 'rtl'
    }
}

export const CustomHeader: Story = {
    args: {
        title: '自定义标题',
        size: '400px',
        direction: 'ltr'
    },
    render: (args) => ({
        components: { CuDrawer },
        setup() {
            return { args }
        },
        template: `
      <cu-drawer v-bind="args">
        <template #header>自定义Header</template>
        自定义内容
      </cu-drawer>
    `
    })
}

export const WithoutHeader: Story = {
    args: {
        showHeader: false,
        size: '300px',
        direction: 'ttb'
    }
}
