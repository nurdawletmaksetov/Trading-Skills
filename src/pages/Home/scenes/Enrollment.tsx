import { useNavigate } from "react-router-dom"
import { Container } from "../../../container/container"

type Props = {
    HeadingStyle: string,
    texts: string,
}


const Enrollment = ({ HeadingStyle, texts }: Props) => {
    const Card2 = "h-[150px] sm:h-[204px] w-full sm:w-[32%] bg-[#19223066] p-2.5 sm:p-5 lg:p-10"
    const Card = "h-[150px] sm:h-[204px] w-[100%] bg-[#19223066] p-2.5 sm:p-5 lg:p-10"

    return (
        <>
            <section className="mb-2.5 sm:mb-5 lg:mb-10">
                <Container>
                    <div className='flex sm:flex-row flex-col bg-gradient-to-l from-[#002244] to-[#000000]'>
                        <div className={`w-full flex flex-col items-center lg:p-10 sm:p-5 p-2.5`}>
                            <h1 className={`${HeadingStyle} text-white-text mb-2.5 sm:mb:5 lg:mb-10`}>
                                Submit Enrollment Info
                            </h1>
                            <form className='flex flex-col gap-2.5 sm:gap-5 lg:gap-10 w-full'>
                                <div className='flex h-full flex-col gap-2.5 sm:gap-5 lg:gap-10 w-full'>
                                    <div className="flex sm:flex-row flex-col gap-2.5 sm:gap-5 lg:gap-10">

                                        <div className={`${Card2} flex flex-col gap-5`}>
                                            <label htmlFor="" className={texts}>Name *</label>
                                            <input type="text" required placeholder="Name" className={texts} />
                                        </div>
                                        <div className={`${Card2} flex flex-col gap-5`}>
                                            <label htmlFor="" className={texts}>Email *</label>
                                            <input type="text" required placeholder="example@example.com" className={texts} />
                                        </div>
                                        <div className={`${Card2} flex flex-col gap-5`}>
                                            <label htmlFor="" className={texts}>Phone *</label>
                                            <input type="text" required placeholder="+7 123 456 78" className={texts} />
                                        </div>
                                    </div>
                                    <div className={`${Card} flex flex-col gap-5`}>
                                        <label htmlFor="" className={texts}>Message *</label>
                                        <input type="text" required placeholder="More info" className={texts} />
                                    </div>
                                    <input className={`${Card} ${HeadingStyle} text-white-text`} type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Enrollment