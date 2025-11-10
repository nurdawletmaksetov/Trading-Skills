import { Container } from '../../../container/container'

type Props = {
    HeadingStyle: string,
    texts: string,
}

const Info = ({ texts, HeadingStyle }: Props) => {
    const redCards = "p-5 sm:p-[30px] md:p-[45px] sm:w-[50%] h-[420px] bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]"
    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className='p-5 sm:p-[30px] md:p-[45px] bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]'>
                        <h1 className={`${HeadingStyle} text-white-text pb-2.5 sm:pb-5 lg:pb-10`}>Why our course</h1>
                        <div className="flex flex-col gap-2.5 sm:gap-5 lg:gap-10">
                            <div className='flex sm:flex-row flex-col gap-2.5 sm:gap-5 lg:gap-10'>
                                <div className={redCards}>
                                    <h1 className={`${HeadingStyle} text-red-text`}>Current market relevance</h1>
                                    <p className={texts}>Stay ahead with content that's regularly updated to mirror current market trends</p>
                                </div>
                                <div className={redCards}>
                                    <h1 className={`${HeadingStyle} text-red-text`}>Comprehensive curriculum</h1>
                                    <p className={texts}>From strategy development to market analysis, our curriculum encompasses everything, enhanced with Tradeview analytical tools.</p>
                                </div>
                            </div>
                            <div className='p-5 sm:p-[30px] md:p-[45px] w-[100%] h-[420px] bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]'>
                                <h1 className={`${HeadingStyle} text-red-text`}>Capstone project</h1>
                                <p className={`${texts} lg:w-[40%]`}>Culminate your learning experience by developing and presenting a unique trading strategy</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Info