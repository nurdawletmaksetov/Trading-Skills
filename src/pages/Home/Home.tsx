import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import About from "./scenes/About"
import Benefits from "./scenes/Benefits"
import Contact from "./scenes/Contact"
import Enrollment from "./scenes/Enrollment"
import Info from "./scenes/Info"
import Opportunity from "./scenes/Opportunity"
import Process from "./scenes/Process"

type Props = {
}

const Home = ({ }: Props) => {
    const texts = "text-white-text text-[20px] xs:text-[25px] sm:text-[20px] lg:text-[25px]"
    const HeadingStyle = "text-[30px] xs:text-[35px] sm:text-[30px] md:text-[35px] lg:text-[39px] xl:text-[59px] xxl:text-[79px]"
    const CornerSize = "hidden sm:block sm:w-[150px] lg:w-[200px] xxl:w-[360px]"

    return (
        <>
            <Header
                CornerSize={CornerSize}
                HeadingStyle={HeadingStyle}
            />
            <About HeadingStyle={HeadingStyle} texts={texts} />
            <Opportunity HeadingStyle={HeadingStyle} texts={texts} />
            <Info HeadingStyle={HeadingStyle} texts={texts} />
            <Benefits HeadingStyle={HeadingStyle} texts={texts} />
            <Process HeadingStyle={HeadingStyle} texts={texts} />
            <Contact HeadingStyle={HeadingStyle} texts={texts} />
            <Enrollment HeadingStyle={HeadingStyle} texts={texts} />
            <Footer />
        </>
    )
}

export default Home