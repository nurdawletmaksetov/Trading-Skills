import { Container } from "../../../container/container"

type Props = {
    texts: string,
    HeadingStyle: string,
}

const About = ({ texts, HeadingStyle }: Props) => {
    const blueCards = "p-5 sm:p-[30px] md:p-[45px] sm:w-[50%] h-[318px] bg-gradient-to-r from-[#002244] to-[#000000]"
    const redCards = "p-5 sm:p-[30px] md:p-[45px] sm:w-[50%] h-[420px] bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]"
    const cardStyle = "flex flex-col sm:flex-row gap-2.5 sm:gap-5 lg:gap-10"
    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className="flex flex-col gap-2.5 sm:gap-5 lg:gap-10">
                        <div className={cardStyle}>
                            <div className={blueCards}>
                                <p className={texts}>
                                    Embark on a transformative
                                    journey in financial trading
                                    with our expert-led 3-month course,
                                    incorporating key insights from tradeview
                                </p>
                            </div>
                            <div className={blueCards}>
                                <p className={texts}>
                                    Designed for both beginners and seasoned investors,
                                    our program equips you with essential skills to effectively
                                    manage risks and devise personalized trading
                                    strategies using tradeview tools.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2.5 sm:gap-5 lg:gap-10">
                            <div className={cardStyle}>
                                <div className={redCards}>
                                    <h1 className={`${HeadingStyle} text-red-text pb-2.5 sm:pb-5`}>
                                        Professional training
                                    </h1>
                                    <p className={texts}>
                                        Learn from experienced traders and
                                        gain practical skills with real-world applications,
                                        including the use of Tradeview advanced charting
                                        and analysis tools.
                                    </p>
                                </div>
                                <div className={redCards}>
                                    <h1 className={`${HeadingStyle} text-red-text pb-2.5 sm:pb-5`}>
                                        Course duration
                                    </h1>
                                    <p className={texts}>
                                        A comprehensive 3-month program,
                                        covering all key aspects of trading
                                    </p>
                                </div>
                            </div>
                            <div className={cardStyle}>
                                <div className={redCards}>
                                    <h1 className={`${HeadingStyle} text-red-text pb-2.5 sm:pb-5`}>
                                        High rating
                                    </h1>
                                    <p className={texts}>
                                        Our course is highly rated for its
                                        quality and effectiveness,
                                        with a 4.6 out of 5 score
                                    </p>
                                </div>
                                <div className={redCards}>
                                    <h1 className={`${HeadingStyle} text-red-text pb-2.5 sm:pb-5`}>
                                        Practical assignments
                                    </h1>
                                    <p className={texts}>
                                        Reinforce your learning with hands-on
                                        assignments in each module, using
                                        Tradeview features for real-time market analysis.
                                    </p>
                                </div>
                            </div>
                            <div className="p-5 sm:p-[30px] md:p-[45px] h-[420px] bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]">
                                <h1 className={`${HeadingStyle} text-red-text pb-2.5 sm:pb-5`}>
                                    Bonus module
                                </h1>
                                <p className={`${texts} sm:w-[40%]`}>
                                    Master the transaq trading terminal
                                    with our specialized training
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default About