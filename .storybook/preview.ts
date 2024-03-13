import type { Preview } from '@storybook/vue3'
import { applyTheme } from '../utils/themeManager'
import i18n from '../locales/i18n';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i
            }
        }
    },
    globalTypes: {
        theme: {
            description: 'Global theme for components',
            defaultValue: 'light',
            toolbar: {
                title: 'Theme',
                icon: 'circlehollow',
                items: ['light', 'dark'],
                dynamicTitle: true
            }
        },
        locale: {
            description: 'Internationalization locale',
            defaultValue: 'en',
            toolbar: {
                icon: 'globe',
                items: [
                    { value: 'en', right: '🇺🇸', title: 'English' },
                    { value: 'zh', right: '🇨🇳', title: '中文' }
                ]
            }
        }
    },
    decorators: [
        (story, context) => {
            const { locale, theme } = context.globals;
            i18n.global.locale = locale;
            applyTheme(theme)
            return story()
        }
    ]
}

export default preview
