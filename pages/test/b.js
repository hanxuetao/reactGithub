import React, {useState, useEffect} from 'react'
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

function MyCountFunc() {
    const [count, setCount] = useState(0) //Array Destructuring Assignment [a,b] = 0

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count => count + 1)
        },1000)

        return () => clearInterval(interval)
    }, [])

    return <span>{count}</span>
}

export default MyCountFunc
