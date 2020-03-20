import App, { Container } from 'next/app'

import MyContext from '../lib/my-context'
import Layout from '../components/Layout'
import 'antd/dist/antd.css';
import {Button} from "antd";

class MyApp extends App {
    state = {
        context:'value'
    }
    static async getInitialProps({ Component }){
       let pageProps
        if(Component.getInitialProps){
            pageProps = await Component.getInitialProps()
        }
        return {
            pageProps
        }
    }

    render(){
        const { Component, pageProps } = this.props
        return (
            <Container>
                <Layout>
                    <MyContext.Provider value={this.state.context}>
                        <Component {...pageProps} />
                        <Button onClick={() => this.setState({context: `${this.state.context}1`})}>update context</Button>
                    </MyContext.Provider>
                </Layout>
            </Container>
        )
    }
}

export default MyApp