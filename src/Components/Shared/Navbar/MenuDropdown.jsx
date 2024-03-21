import { AiOutlineMenu } from 'react-icons/ai'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../../../Providers/AuthProviders';

// Avater

import profileAvatar from "../../../assets/placeholder.jpg";
import useAuth from '../../../Hooks/useAuth';

const MenuDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  // const {user}= useContext(AuthContext);
    const { user } = useAuth();
  console.log(user);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        {/* Become A Host btn */}
        <div className='hidden md:block'>
          <button className='disabled:cursor-not-allowed cursor-pointer hover:bg-neutral-100 py-3 px-4 text-sm font-semibold rounded-full  transition'>
            Host your home
          </button>
        </div>
        {/* Dropdown btn */}
        <div  onClick={() => setIsOpen(!isOpen)}  className='p-2 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
          <AiOutlineMenu />
          <div className=' avatar w-10 md:block online'>
            {/* Avatar */}
            <img  className='rounded-full'  referrerPolicy='no-referrer'  src={user? user?.photoURL: profileAvatar }  alt='profile'  />
            {/* <img  className='rounded-full'  referrerPolicy='no-referrer'  src={user? user?.photoURL:'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg';}  alt='profile'  /> */}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
          <div className='flex flex-col cursor-pointer'>
            <Link  to='/'  className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'>  Home</Link>
            <p className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'>{user&& user?.displayName}</p>
            <Link  to='/login'  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>  Login</Link>
            <Link  to='/signup'  className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'>  Sign Up</Link>
            <Link  to='/'  className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'>  Log out</Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default MenuDropdown
