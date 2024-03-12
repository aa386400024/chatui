import type { App } from 'vue';
import components from './components';
import '../styles/main.scss';
import { applyTheme } from '../utils/themeManager'

// 所有组件的具名导出
export * from './components';

interface InstallOptions {
    defaultTheme?: 'dark' | 'light'
}

// 全局安装函数的具名导出
const install = (app: App, options: InstallOptions = {}) => {
    // 设置默认主题
    const defaultTheme = options.defaultTheme || 'light'
    applyTheme(defaultTheme)

    components.forEach((component) => {
        app.use(component as unknown as { install: () => any });
    });
};

export default {
    install,
};


// 如果需要，你可以继续导出其他东西，如工具函数、常量等