import type { App } from 'vue'
import CuAvatar from './CuAvatar.vue'


CuAvatar.install = (app: App) => {
    app.component('CuAvatar', CuAvatar)
    return app
}

export default CuAvatar
