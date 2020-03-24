import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'
import {connect} from 'react-redux'
import { add } from '../store/store'

const Index = ({counter, username, rename, add}) => {
    const events = [
        'routeChangeStart',
        'routeChangeComplete',
        'routeChangeError',
        'beforeHistoryChange',
        'hashChangeStart',
        'hashChangeComplete',
    ]

    function makeEvent(type) {
        return (...args) => {
            console.log(type, ...args)
        }
    }

    events.forEach(event => {
        Router.events.on(event, makeEvent(event))
    })

    function gotoTestB() {
        Router.push({
            pathname:'/test/b',
            query:{
                id:2
            }
        }, '/test/b/2')
    }
    return (
       <>
           <span>Count: {counter}</span>
           <a>Username: {username}</a>
           <input value={username} onChange={(e) => rename(e.target.value)}/>
           <button onClick={() => add(counter)}>ADD</button>
       </>

    )
}

Index.getInitialProps = async ({ reduxStore }) => {
    reduxStore.dispatch(add(3))
    return {}
}

export default connect(function mapStateToProps(state) {
    return {
        counter: state.counter.count,
        username: state.user.username
    }
}, function mapDispatchToProps(dispatch){
    return {
        add: (num) => dispatch({ type: 'ADD', num}),
        rename: (name) => dispatch({ type: 'UPDATE_USERNAME', name})
    }
})(Index)