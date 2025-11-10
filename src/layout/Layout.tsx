import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

const Layout = () => {
    const HeadingStyle = "xs:text-[19px] sm:text-[24px] md:text-[29px] lg:text-[39px] xl:text-[59px] xxl:text-[79px]"

    return (
        <>
            <Header HeadingStyle={HeadingStyle} />
            <Outlet />
        </>
    )
}

export default Layout