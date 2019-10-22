import {withRouter} from 'next/router'
import {Button} from "antd";

const A = ({router, name}) => <Button>A{ router.query.id } {name}</Button>

A.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                name: 'hello'
            })
        }, 1000)
    })
    return await promise
}

export default withRouter(A)