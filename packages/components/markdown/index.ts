import type { App } from 'vue'
import CuMarkdown from './CuMarkdown.vue'

CuMarkdown.install = (app: App) => {
    app.component('CuMarkdown', CuMarkdown)
    return app
}

export default CuMarkdown
