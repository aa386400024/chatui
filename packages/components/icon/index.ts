import type { App } from 'vue'
import CuIcon from './CuIcon.vue'


CuIcon.install = (app: App) => {
    app.component('CuIcon', CuIcon)
    return app
}

export default CuIcon
