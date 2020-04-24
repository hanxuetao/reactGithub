import { Button, Icon, Tabs } from "antd";
import getConfig from 'next/config'
import { connect } from 'react-redux'
import Repo from '../components/repo'

const api = require('../lib/api')
const { publicRuntimeConfig } = getConfig()


function Index ({ userRepos, userStaredRepos, user }) {
    console.log(userRepos, userStaredRepos )
    if(!user || !user.id){
        return (
            <div className="root">
                <p>Please Log In</p>
                <Button type="primary" href={publicRuntimeConfig.OAUTH_URL}>Click Login</Button>
                <style jsx>{`
                .root{
                    height: 400px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                `}</style>
            </div>
        )
    }
    return (
        <div className="root">
            <div className="user-info">
                <img src={user.avatar_url} alt="user avatar" className="avatar" />
                <span className="login">{ user.login }</span>
                <span className="name">{ user.name }</span>
                <span className="bio">{user.bio}</span>
                <p className="email">
                    <Icon type="mail" style={{ marginRight: 10 }}> </Icon>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
            </div>
            <div className="user-repos">
                <Tabs defaultActiveKey="1" animated={false}>
                    <Tabs.TabPane tab="Your Repository" key="1">
                        {userRepos.map(repo => (
                            <Repo repo={repo} />
                        ))}
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Your Star Repository" key="2">
                        {userStaredRepos.map(repo => (
                            <Repo repo={repo} />
                        ))}
                    </Tabs.TabPane>
                </Tabs>
            </div>
            <style jsx>{`
             .root {
              display: flex;
              align-items: flex-start;
              padding: 20px 0;  
             }
             .user-info{
              width: 200px;
              margin-right: 40px;
              flex-shrink: 0,
              display: flex;
              flex-direction: column;  
             }
             .login{
             font-weight: 800;
             font-size: 20px;
             margin-top: 20px;
             }
             .name{
             font-size: 16px;
             color: #777;
             }
             .bio{
             margin-top: 20px;
             color: #333
             }
             .avatar{
             width: 100%;
             border-radius: 5px;
             }
              .user-repos {
             flex-grow: 1;
            }
            `}</style>
        </div>
    )
}

Index.getInitialProps = async ({ ctx, reduxStore }) => {

    const user = reduxStore.getState().user
    console.log(reduxStore)
    if(!user || !user.id) {
        return {
            isLogin: false
        }
    }

    const userRepos = await api.request(
        {
        url: '/user/repos',
        },
        ctx.req, ctx.res)

    const userStaredRepos = await api.request({
        url: '/user/starred',
    },
        ctx.req, ctx.res)

    return {
        isLogin: true,
        userRepos: userRepos.data,
        userStaredRepos: userStaredRepos.data
    }
}

export default connect(function mapState(state) {
    return {
        user: state.user,
    }
})(Index)