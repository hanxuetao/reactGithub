import {withRouter} from 'next/router'
import dynamic  from 'next/dynamic'
import getConfig from 'next/config'
import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment'
import {Button} from "antd"

const Comp = dynamic(import('../components/comp')) // component Comp will be the async component

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const Title = styled.h1`
    color: yellow;
    font-size: 40px;
`

const A = ({router, name, time}) => {
    console.log(serverRuntimeConfig)
    console.log(publicRuntimeConfig)

    return (
        <>
            <Title>This is title {time}</Title>
            <Comp />
            <Link href="#aaa">
                <a className="link">
                    A {router.query.id} {name} {process.env.customKey}
                </a>
            </Link>
            <style jsx>
                {`
            a {
            color: blue;
            }
            .link {
            color: red;
            }
            `}
            </style>
            <style jsx global>
                {`
             a {
            color: red;
            }
            `}
            </style>
        </>
    )
}

A.getInitialProps = async () => {
    const moment = await import('moment') //import module 'moment' not as default
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'hello',
                time: moment.default(Date.now() - 60 * 1000).fromNow()
            })
        }, 1000)
    })
    return await promise
}

export default withRouter(A)