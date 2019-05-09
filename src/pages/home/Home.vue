<template>
    <div>
        <h1>刘胡粤的博客</h1>
        <article v-for="article in articles">
            <h2>{{article.title}}</h2>
            <p>{{article.content}}</p>
        </article>
    </div>
</template>

<script>
import {get} from './service';

export default {
    data () {
        return {
            articles: []
        };
    },
    created() {
        get().then(res => {
            this.articles = res.data;
        });
    }
}
</script>
