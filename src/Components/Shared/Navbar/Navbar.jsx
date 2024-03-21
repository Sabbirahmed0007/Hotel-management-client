import { Link } from 'react-router-dom'
import Container from '../Container';
import MenuDropdown from './MenuDropdown';
import imgLogo from '../.././../assets/logo.png';
import useAuth from '../../../Hooks/useAuth';

const Navbar = () => {
  
  const {user} = useAuth();
  console.log(user);




  return (
    <div className='sticky top-0 w-full bg-white z-10 drop-shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/'>  <img    className=' mx-2 hidden md:block'    src={imgLogo}    alt='logo'    width='100'    height='100'  /></Link>
            {/* Dropdown Menu */}
            <MenuDropdown />
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
