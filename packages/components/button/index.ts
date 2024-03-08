import type { App } from 'vue';
import CuButton from './CuButton.vue';

CuButton.install = (app: App) => {
  app.component(CuButton.name, CuButton);
  return app;
};

export default CuButton;
