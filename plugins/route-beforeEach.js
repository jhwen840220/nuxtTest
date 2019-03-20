import axios from 'axios'
export default (ctx, inject) => {
    ctx.app.router.afterEach((to, from) => {
        if (process.browser) {
            const token = axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
            /* 注入 Nuxt Instance Property */
            ctx.$axios = axios
            inject('axios', axios)
            if(!token) ctx.app.router.push('/');
        }
    })
}