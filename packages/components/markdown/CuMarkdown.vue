<template>
    <div class="markdown-body" v-html="renderedMarkdown"></div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import './style.scss'
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'; // 使用Prism的Tomorrow主题

// Props
const props = defineProps<{
    markdown: string;
}>();

// 初始化markdown-it实例
const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: function (str, lang) {
        if (lang && Prism.languages[lang]) {
            try {
                return Prism.highlight(str, Prism.languages[lang], lang);
            } catch (_) {
                return ''; // 在出错时返回空字符串
            }
        }
        return ''; // 非代码块或未指定语言的处理
    }
});

const renderedMarkdown = ref('');

// 监听props.markdown的变化并重新渲染
watchEffect(() => {
    renderedMarkdown.value = md.render(props.markdown);
});
</script>