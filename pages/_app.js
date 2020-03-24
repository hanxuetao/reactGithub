import App, { Container } from 'next/app'
import {Provider} from 'react-redux'
import MyContext from '../lib/my-context'
import Layout from '../components/Layout'
import 'antd/dist/antd.css';
import {Button} from "antd";

import withRedux from '../lib/withRedux'

class MyApp extends App {
    state = {
        context:'value'
    }
    static async getInitialProps(ctx){
        const { Component } = ctx
        let pageProps = {}
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps(ctx)
        }
        return {
            pageProps
        }
    }

    render(){
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Container>
                <Layout>
                    <Provider store={reduxStore}>
                    <MyContext.Provider value={this.state.context}>
                        <Component {...pageProps} />
                        <Button onClick={() => this.setState({context: `${this.state.context}1`})}>update context</Button>
                    </MyContext.Provider>
                    </Provider>
                </Layout>
            </Container>
        )
    }
}

export default withRedux(MyApp)