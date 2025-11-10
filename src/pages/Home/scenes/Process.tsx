import { Container } from '../../../container/container'

type Props = {
    HeadingStyle: string,
    texts: string,
}

const Process = ({ HeadingStyle, texts }: Props) => {
    const redCards = "p-5 sm:p-[30px] md:p-[45px] sm:w-[50%] h-[420px] bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]"

    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className='lg:p-10 sm:p-5 p-2.5 bg-gradient-to-bl from-[#192230] via-red-500/50 to-[#192230]'>
                        <h1 className={`${HeadingStyle} text-white-text pb-2.5 sm:pb-5 lg:pb-10`}>
                            Enrollment process
                        </h1>
                        <div className='flex sm:flex-row flex-col gap-2.5 sm:gap-5 lg:gap-10'>
                            <div className={redCards}>
                                <h1 className={`${HeadingStyle} text-red-text`}>Course fee</h1>
                                <p className={texts}>
                                    Enroll in our comprehensive course for just $250
                                </p>
                            </div>
                            <div className={redCards}>
                                <h1 className={`${HeadingStyle} text-red-text`}>Easy registration</h1>
                                <p className={texts}>
                                    Click here to start your learning journey today
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Process