import type { App } from 'vue'
import CuDrawer from './CuDrawer.vue'


CuDrawer.install = (app: App) => {
    app.component('CuDrawer', CuDrawer)
    return app
}

export default CuDrawer
