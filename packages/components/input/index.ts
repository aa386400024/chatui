import type { App } from 'vue'
import CuInput from './CuInput.vue'


CuInput.install = (app: App) => {
    app.component('CuInput', CuInput)
    return app
}

export default CuInput
