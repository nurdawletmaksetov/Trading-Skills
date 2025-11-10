import { Container } from '../../container/container'
import Logo from '../../assets/logo.svg'
import TraderMan from '../../assets/traderman.svg'
import Corner from '../../assets/corner.svg'
import TopCorner from '../../assets/topcorner.svg'

type Props = {
    HeadingStyle: string,
    CornerSize: string,
}

const Header = ({ HeadingStyle, CornerSize }: Props) => {
    return (
        <>
            <header className='my-2.5 sm:my-5 lg:my-10'>
                <Container>
                    <div className='flex sm:flex-row flex-col-reverse bg-gradient-to-r from-[#002244] to-[#000000]'>
                        <div className='flex flex-col justify-between gap-[26px] sm:w-[50%] p-5 sm:p-[30px] md:p-[45px]'>
                            <img className='lg:w-40 w-[103px]' src={Logo} alt="logo" />
                            <h1 className={`${HeadingStyle} w-[75%] text-white-text`}>
                                Transform your
                                trade view skills a<span className='text-blue-text'> comprehensive 3 — month course</span>
                            </h1>
                        </div>
                        <div className='sm:w-[50%] relative'>
                            <img className='absolute right-0 sm:hidden' src={TopCorner} alt="corner" />
                            <img src={TraderMan} alt="trader" />
                            <img src={Corner} className={`absolute bottom-0 right-0 ${CornerSize}`} alt="corner" />
                        </div>
                    </div>
                </Container>
            </header>
        </>
    )
}

export default Header