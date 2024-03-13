import type { App } from 'vue'
import CuMessage from './CuMessage.vue'


CuMessage.install = (app: App) => {
    app.component('CuMessage', CuMessage)
    return app
}

export default CuMessage
