import { Container } from '../../../container/container'
import TraderWoman from '../../../assets/traderwoman.svg'
import LeftCorner from '../../../assets/leftcorner.svg'
import LeftSmallCorner from '../../../assets/smallcornerleft.svg'

type Props = {
    HeadingStyle: string,
    texts: string,
}

const Opportunity = ({ HeadingStyle, texts }: Props) => {
    const CornerSize = "hidden sm:block sm:w-[150px] lg:w-[200px] xxl:w-[360px]"
    const Card = "h-[300px] sm:h-[100%] w-[100%] bg-gradient-to-r from-[#002244] to-[#000000] px-2.5 sm:px-5 lg:px-10 py-2.5 sm:pb-5 lg:pb-10"

    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className='flex sm:flex-row flex-col bg-gradient-to-l from-[#002244] to-[#000000]'>
                        <div className={`relative sm:w-[50%]`}>
                            <img className='absolute left-0 sm:hidden' src={LeftSmallCorner} />
                            <img src={TraderWoman} />
                            <img className={`${CornerSize} left-0 bottom-0 absolute`} src={LeftCorner} />
                        </div>
                        <div className={`sm:w-[50%] flex flex-col items-center lg:p-10 sm:p-5 p-2.5`}>
                            <h1 className={`${HeadingStyle} text-white-text mb-2.5 sm:mb:5 lg:mb-10`}>
                                Career opportunities
                            </h1>
                            <div className='flex h-[100%] flex-col gap-2.5 sm:gap-5 lg:gap-10 w-[100%]'>
                                <div className={Card}>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>
                                        Aspiring professionals
                                    </h1>
                                    <p className={texts}>Ideal for those targeting careers in banking, IT, sales, or independent trading</p>
                                </div>
                                <div className={Card}>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>
                                        Beginner traders
                                    </h1>
                                    <p className={texts}>Lay a solid foundation and evolve into developing advanced trading strategies</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Opportunity