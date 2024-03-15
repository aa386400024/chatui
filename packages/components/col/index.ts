import type { App } from 'vue'
import CuCol from './CuCol.vue'


CuCol.install = (app: App) => {
    app.component('CuCol', CuCol)
    return app
}

export default CuCol
