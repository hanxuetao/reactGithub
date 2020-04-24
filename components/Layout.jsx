import { useState, useCallback } from 'react'

import { Button, Layout, Icon, Input, Avatar, Dropdown, Tooltip, Menu} from "antd";
import Link from "next/link";
import {withRouter} from "next/router"
import Container from "./Container"
import { logout } from "../store/store";
import getConfig from 'next/config'
import { connect } from 'react-redux'
import axios from 'axios'

const { publicRuntimeConfig } = getConfig()

const { Header, Content, Footer } = Layout


const githubIconStyle = {
    color: 'white',
    fontSize: 40,
    display: 'block',
    paddingTop: 10,
    marginRight: 20,
}

const footerStyle = {
    textAlign: 'center',
}

function PageLayout ({ children, user, logout, router }) {
    const urlQuery = router.query && router.query.query

    const [search, setSearch] = useState(urlQuery || '')

    const handleSearchChange = useCallback((event) => {
        setSearch(event.target.value)
    },[setSearch])

    const handleOnSearch = useCallback(() => {
        router.push(`/search?query=${search}`)
    },[search])
    const handleLogOut = useCallback(() => {
        logout()
    },[logout])
    const handleGotoOAuth = useCallback((e) =>{
        e.preventDefault()
        axios.get(`/prepare-auth?url=${router.asPath}`)
            .then(resp => {
                if(resp.status === 200){
                    location.href = publicRuntimeConfig.OAUTH_URL
                    console.log(location.href)
                } else {
                    console.log('prepare auth failed', resp)
                }
            }).catch (err => {
            console.log('prepare auth failed', err)
        })
    },[])

    const userDropDown = (
        <Menu>
            <Menu.Item>
                <a href="javascript:void(0)" onClick={handleLogOut}>Log Out</a>
            </Menu.Item>
        </Menu>
    )

    return (
        <Layout>
            <Header>
                <div className="header-inner">
                <div className="header-left">
                    <div className="logo">
                        <Link href="/">
                        <Icon type="github" style={githubIconStyle}/>
                        </Link>
                    </div>
                    <div>
                        <Input.Search
                            placeholder="Find Repository"
                            value={search}
                            onChange={handleSearchChange}
                            onSearch={handleOnSearch}
                        />
                    </div>
                </div>
                <div className="header-right">
                    <div className="user">
                        {user && user.id ?(
                            <Dropdown overlay={userDropDown}>
                            <a href="/">
                                <Avatar size={40} src={user.avatar_url} />
                            </a>
                            </Dropdown>
                        ):(
                            <Tooltip title="click for login">
                            <a href={`/prepare-auth?url=${router.asPath}` }>
                                <Avatar size={40} icon="user" />
                            </a>
                            </Tooltip>
                        )
                        }
                    </div>
                </div>
                </div>
            </Header>
                <Container renderer={<div />}>{children}</Container>
            <Footer style={footerStyle}>
                Developed by Han <a href="maito:hanxuetao0917@gamil.com">hanxuetao0917@gamil.com</a>
            </Footer>
            <style jsx>
                {`
                     .content{
                        color: red,
                     }
                    .header-inner {
                        display: flex;
                        justify-content: space-between;
                    }
                    .header-left {
                        display: flex;
                        justify-content: flex-start;
                    }
                `}
            </style>
            <style jsx global>{`
                #__next {
                    height: 100%;
                }
                .ant-layout {
                    min-height: 100%;
                }
                .ant-layout-header{
                    paddingLeft: 0;
                    paddingRigth: 0;
                }
                .ant-layout-content {
                    background: #fff;
                }
            `}</style>
        </Layout>
    )
}

export default connect(function mapState (state) {
    return {
        user: state.user,
    }
}, function mapReducer(dispatch){
    return {
        logout: () => dispatch(logout()),
    }
})(withRouter(PageLayout))