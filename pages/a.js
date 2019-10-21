import {withRouter} from 'next/router'
import {Button} from "antd";

const A = ({router}) => <Button>A{ router.query.id }</Button>

export default withRouter(A)