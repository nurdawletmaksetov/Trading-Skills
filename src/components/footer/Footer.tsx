import { Container } from '../../container/container'
import { NavLink } from 'react-router-dom'

type Props = {}

const Footer = ({ }: Props) => {
    const texts = "text-white-text text-[20px] xs:text-[25px] sm:text-[20px] lg:text-[25px]"

    const onTopClick = () => {
        window.scrollTo(0, 0)
    }

    return (
        <>
            <footer className='py-22'>
                <Container>
                    <div className='flex sm:flex-row flex-col items-center justify-center gap-10'>
                        <NavLink onClick={onTopClick} className={texts} to='/terms'>Terms</NavLink>
                        <NavLink onClick={onTopClick} className={texts} to='/privacy'>Privacy policy</NavLink>
                        <NavLink onClick={onTopClick} className={texts} to='/refound'>Refund policy</NavLink>
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer