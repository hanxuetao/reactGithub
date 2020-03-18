import React from 'react'
import {Button} from "antd";

class MyCount extends React.Component {
    state = {
        count: 0
    }

    render() {
        return (
            <span>{this.state.count}</span>
        )
    }
}
export default () => <Button>Page B</Button>
