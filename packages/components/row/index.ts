import type { App } from 'vue'
import CuRow from './CuRow.vue'


CuRow.install = (app: App) => {
    app.component('CuRow', CuRow)
    return app
}

export default CuRow
