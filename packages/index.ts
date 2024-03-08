import type { App } from 'vue'
import components from './components'
import '../styles/main.scss';
// 所有组件
export * from './components'

// 完整引入组件
export const install = (app: App) => {
    components.forEach((component) => {
        app.use(component as unknown as { install: () => any })
    })
}

// export default {
//     install
//     // ...ButtonTypes
// }
