import React, {useState, useEffect, useReducer, useLayoutEffect, useContext} from 'react'
import MyContext from '../../lib/my-context'
import {Button} from "antd";

class MyCount extends React.Component {
    state = {
        count: 0
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ count: this.state.count + 1})
        },1000)
    }

    componentWillUnmount() {
        if(this.interval){
            clearInterval(this.interval)
        }
    }

    render() {
        return (
            <span>{this.state.count}</span>
        )
    }
}

function countReducer(state, action) {
    switch (action.type){
        case 'add':
            return state + 1  // need change object itself, not just change attribute within object otherwise the component cannot detect the updates
        case 'minus':
            return state - 1
        default:
            return state
    }
}

function MyCountFunc() {
    // const [count, setCount] = useState(0) //Array Destructuring Assignment [a,b] = 0

    const [count, dispatchCount] = useReducer(countReducer, 0)
    const [name, setName] = useState('han')
    const context = useContext(MyContext)

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setCount(count => count + 1)
    //         dispatchCount({type: 'minus'})
    //     },1000)
    //
    //     return () => clearInterval(interval)
    // }, [])

    //useEffect will work after dom loaded
    useEffect(() => {
        console.log('effect invoked')
        return () => console.log('effect detected')
    }, [count]) // the second param decide useEffect update or not.

    //useLayoutEffect will work before dom loaded but it will affect the speed of web page loading
    useLayoutEffect(() => {
        console.log('Layout effect invoked')
        return () => console.log('Layout effect detected')
    },[count])

    return (
        <div>
            <input vaule={name} onChange={((e) => e.target.value)} />
            <button onClick={() => dispatchCount({ type:"add"})}>{count}</button>
            <p>{context}</p>
        </div>
    )
}

export default MyCountFunc
