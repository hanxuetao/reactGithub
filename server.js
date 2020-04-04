const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')
const session = require('koa-session')
const Redis = require('ioredis')
const auth = require('./server/auth')

const RedisSessionStore = require('./server/session-store')

const dev = process.env.NODE_ENV  != 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const redis = new Redis()

let index = 0

app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    server.keys = ['Han Github App Development']
    const SESSION_CONFIG = {
      key:'hid',
      maxAge: 10 * 1000,
      store: new RedisSessionStore(redis),
    }

    server.use(session(SESSION_CONFIG, server))

    auth(server)

    server.use(async (ctx, next) => {
            console.log('session is:', ctx.session)
        await next()
    })

    router.get('/a/:id', async (ctx) => {
        const id = ctx.params.id
        await handle(ctx.req, ctx.res, {
            pathname: '/a',
            query: { id }
        })
        ctx.respond = false
    })

    router.get('/api/user/:id', async (ctx) => {
        const user = ctx.session.userInfo
        console.log(user)
        if(!user) {
            ctx.status = 401
            ctx.body = 'Need Login'
        } else {
            ctx.body = user
            ctx.set('Content-Type', 'application/json')
        }
        ctx.body = ctx.session.userInfo
    })

    server.use(router.routes())

    server.use(async (ctx, next) => {
        ctx.cookies.set('id', index)
        index += 1
        await handle(ctx.req, ctx.res)
        ctx.respond = false
    })

    server.listen(3000, () =>{
        console.log('koa server listening on 3000')
    })
})