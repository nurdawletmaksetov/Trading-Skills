import { Container } from "../../../container/container"
import LeftSmallCorner from '../../../assets/smallcornerleft.svg'
import TraderMan from '../../../assets/bigtrader.svg'
import LeftCorner from '../../../assets/leftcorner.svg'

type Props = {
    HeadingStyle: string,
    texts: string,
}

const Contact = ({ HeadingStyle, texts }: Props) => {
    const CornerSize = "hidden sm:block sm:w-[150px] lg:w-[200px] xxl:w-[360px]"
    const Card = "h-[100%] w-[100%] bg-gradient-to-r from-[#002244] to-[#000000] px-2.5 sm:px-5 lg:px-10 py-2.5 sm:pb-5 lg:pb-10"

    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className='flex sm:flex-row flex-col bg-gradient-to-l from-[#002244] to-[#000000]'>
                        <div className={`relative sm:w-[50%]`}>
                            <img className='absolute left-0 sm:hidden' src={LeftSmallCorner} />
                            <img src={TraderMan} />
                            <img className={`${CornerSize} left-0 bottom-0 absolute`} src={LeftCorner} />
                        </div>
                        <div className={`sm:w-[50%] flex flex-col items-center lg:p-10 sm:p-5 p-2.5`}>
                            <h1 className={`${HeadingStyle} text-white-text mb-2.5 sm:mb:5 lg:mb-10`}>
                                Contact us
                            </h1>
                            <div className={`${Card} flex flex-col justify-between`}>
                                <div>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>
                                        Address
                                    </h1>
                                    <p className={texts}>170 Nurland, Nukus, SE12 8LP, Karakalpakstan</p>
                                </div>
                                <div>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>
                                        Phone
                                    </h1>
                                    <p className={texts}>+44 12 3456 7890</p>
                                </div>
                                <div>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>
                                        Email
                                    </h1>
                                    <p className={texts}>dsa2f3ewq3@example.com</p>
                                </div>
                                <div>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>
                                        Hours
                                    </h1>
                                    <p className={texts}>Weekdays from 9 am to 5 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Contact