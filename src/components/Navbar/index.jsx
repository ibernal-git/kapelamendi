import NavButton from '../NavButton'
import { useState } from 'react'
export default function Navbar ({ menuItems, client }) {
  const [isHidden, setIsHidden] = useState(true)
  const handleMenuIcon = () => {
    setIsHidden(!isHidden)
  }
  return (
    <nav className='bg-primary py-4 px-8 fixed w-full'>
      <div className='max-w-8xl mx-auto border-b-2 pb-4 lg:pb-0 lg:border-0 border-black'>
        <div className='flex justify-between items-center'>
          <div className='items-center text-lg font-bold'>Kapelamendi</div>
          <div className='hidden lg:flex items-center space-x-4 text-md font-medium'>
            {menuItems.map((item) => {
              return <NavButton key={item.link} link={item.link}>{item.text}</NavButton>
            })}
          </div>
          <div className='lg:hidden flex items-center'>
            <button onClick={handleMenuIcon}>
              {
                  isHidden

                    ? (
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 lg:hidden' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                      </svg>
                      )
                    : (
                      <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 lg:hidden' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                      </svg>
                      )
                }
            </button>
          </div>
        </div>
      </div>
      <div className={` ${isHidden ? 'hidden' : ''} lg:hidden text-md font-medium items-center text-center`}>
        {menuItems.map((item) => {
          return <NavButton key={item.link} link={item.link} isMobile>{item.text}</NavButton>
        })}
      </div>
    </nav>
  )
}
