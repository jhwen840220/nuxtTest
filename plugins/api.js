import axios from 'axios'

export default function (ctx, inject) {
    axios.defaults.baseURL = 'https://www.thef2e.com/api'
    //   axios.defaults.headers.common['Authorization'] = 'YUOR_AUTH_TOKEN'
    //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

    /* 注入 Nuxt Instance Property */
    ctx.$axios = axios
    inject('axios', axios)

    // let mock = new MockAdapter(axios)

    // mock.onGet('/users').reply(200, {
    //     users: [
    //         { id: 1, name: 'John Smith' }
    //     ]
    // })
}