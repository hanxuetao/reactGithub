import {Button} from "antd";
import Link from "next/link";

export default  ({ children }) => (
    <>
    <header>
        <Link href={"/a"} as={"/a/1"}>
            <Button>Go Page A</Button>
        </Link>
        <Link href={"/test/b"}>
            <Button>Go Page b</Button>
        </Link>
    </header>
        {children}
    </>
)
