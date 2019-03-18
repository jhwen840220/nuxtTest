const port = parseInt(process.env.PORT, 10) || 3000
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const session = require('express-session')
const app = require('express')()
const axios = require('axios')

// Body parser，用来封装 req.body
app.use(bodyParser.json())

// Sessions 来创建 req.session
app.use(session({
    secret: 'super-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
}))

// 发起 POST /api/login 请求完成用户登录，并添加该用户到 req.session.authUser
app.post('/api/:params', function (req, res) {
    const postData = req.body;
    const url = Object.values(req.params).join('/')
    const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json;'
    }

    if (!!req.headers.authorization) {
        headers['Authorization'] = req.headers.authorization
    }
    const serverPath = 'http://10.1.1.27:880/';
    const option = {
        method: 'POST',
        url: serverPath + url,
        data: postData,     // post Data
        timeout: 30000, // timeout
        headers: headers,
    }
    return axios(option)
        .then(response => {
            if (!!response.headers.authorization) {
                res.set('authorization', response.headers.authorization);
            }
            if (response && response.data) {
                // console.log(`------------------res:${url}------------------`)
                console.log(response.data);
                res.send(response.data)
            }

        })
})

// 发起 POST /api/logout 请求注销当前用户，并从 req.session 中移除
app.post('/api/logout', function (req, res) {
    delete req.session.authUser
    res.json({ ok: true })
})

// 我们用这些选项初始化 Nuxt.js：
const isProd = process.env.NODE_ENV === 'production'
const nuxt = new Nuxt({ dev: !isProd })
// 生产模式不需要 build
if (!isProd) {
    const builder = new Builder(nuxt)
    builder.build()
}
app.use(nuxt.render)
app.listen(port, (err) => {
    if (err) throw err
    console.log(`port: ${port}`)
})
