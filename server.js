const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV  != 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

// app.prepare().then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('/test/:id', (ctx) =>{
        ctx.body = `<p>request /test ${ctx.params.id}</p>`
        // ctx.body = { success: true }
        // ctx.set('Content-Type', 'application/json')
    })

    server.use(async (ctx, next) => {
        await next()
    })

    server.use(router.routes())

    // server.use(async (ctx, next) => {
    //     await handle(ctx.req, ctx.res)
    //     ctx.respond = false
    // })

    server.listen(3000, () =>{
        console.log('koa server listening on 3000')
    })
// })