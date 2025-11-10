import { Container } from "../../../container/container"
import TraderWoman from '../../../assets/traderwoman2.svg'
import RightCorner from '../../../assets/corner.svg'
import TopCorner from '../../../assets/topcorner.svg'

type Props = {
    texts: string,
    HeadingStyle: string,
}

const Benefits = ({ HeadingStyle, texts }: Props) => {
    const Card = "h-[300px] sm:h-[100%] w-[100%] bg-gradient-to-l from-[#002244] to-[#000000] px-2.5 sm:px-5 lg:px-10 py-2.5 sm:pb-5 lg:pb-10"
    const CornerSize = "hidden sm:block sm:w-[150px] lg:w-[200px] xxl:w-[360px]"

    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className="flex sm:flex-row flex-col-reverse bg-gradient-to-r from-[#002244] to-[#000000]">
                        <div className={`sm:w-[50%] flex flex-col items-center lg:p-10 sm:p-5 p-2.5`}>
                            <h1 className={`${HeadingStyle} text-white-text`}>Course benefits</h1>
                            <div className="flex h-[100%] flex-col gap-2.5 sm:gap-5 lg:gap-10 w-[100%]">
                                <div className={Card}>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>Income growth</h1>
                                    <p className={texts}>Unlock significant income potential with targeted training</p>
                                </div>
                                <div className={Card}>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>Flexible schedule</h1>
                                    <p className={texts}>Trade on your terms, fitting your lifestyle</p>
                                </div>
                                <div className={Card}>
                                    <h1 className={`${HeadingStyle} text-blue-text`}>Financial independence</h1>
                                    <p className={texts}>Gain autonomy and independence through skilled trading</p>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-[50%] relative'>
                            <img className='absolute right-0 sm:hidden' src={TopCorner} />
                            <img src={TraderWoman} />
                            <img src={RightCorner} className={`absolute bottom-0 right-0 ${CornerSize}`} alt="corner" />
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Benefits