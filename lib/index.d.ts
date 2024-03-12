import type { App } from 'vue';
import '../styles/main.scss';
export * from './components';
interface InstallOptions {
    defaultTheme?: 'dark' | 'light';
}
declare const _default: {
    install: (app: App<any>, options?: InstallOptions) => void;
};
export default _default;
