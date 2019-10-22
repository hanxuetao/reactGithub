import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'

export default () => {
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
           <Link href={"/a?id=1"} as={"/a/1"}>
               <Button>Go Page A</Button>
           </Link>
           <Button onClick={gotoTestB}>Go Page B</Button>
       </>

    )
}
