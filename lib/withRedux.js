import React from 'react'
import createStore from '../store/store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

function getOrCreateStore(initialState){
    if(isServer){
        return createStore(initialState)
    }
    if(!window[__NEXT_REDUX_STORE__]){
        window[__NEXT_REDUX_STORE__] = createStore(initialState)
    }
    return window[__NEXT_REDUX_STORE__]
}

// At that time WithReduxApp will declare a new store object also when server side rendering
// Read the State data on html and save it in the store object
export default (Comp) => {
    class WithReduxApp extends React.Component {
        constructor(props){
            super(props)
            this.reduxStore = getOrCreateStore(props.initialReduxState)
        }
        render() {
            const { Component, pageProps, ...rest} = this.props
            console.log(Component, pageProps)
            if(pageProps){
                pageProps.test = '123'
            }
        // then pass the reduxStore to the Comp then _app.js's Provider will get it
            return <Comp
                Component={Component}
                pageProps={pageProps}
                {...rest}
                reduxStore={this.reduxStore}
            />
        }
    }

    // if the hoc package the component, the hoc should inherit getInitialProps from the Component
    // getInitialProps will be loaded when 1.server side render. 2.client side page loaded.
    // once redux-store need to be loaded at server side. That will be better about put store initialization in getInitialProps.
    // then the store will be rendered on html
    WithReduxApp.getInitialProps = async (ctx) => {

        let reduxStore

        if(isServer){
            const { req } = ctx.ctx
            const session = req.session

            if(session && session.userInfo){
                reduxStore = getOrCreateStore({
                    user: session.userInfo
                })
            } else (
                reduxStore = getOrCreateStore()
            )
        } else {
            reduxStore = getOrCreateStore()
        }

        ctx.reduxStore = reduxStore

        let appProps = {}
        if(typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps(ctx)
        }
   // only State with in store need to be serialized and rendered on html
    return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }
    return WithReduxApp
}