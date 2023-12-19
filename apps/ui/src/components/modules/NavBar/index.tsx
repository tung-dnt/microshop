import { Link, useLocation } from 'react-router-dom'
import { atom, useAtom } from 'jotai'

import { useAuth } from '@/hooks'

import { LoginButton } from './components/LogInButton'
import { LogoutButton } from './components/LogOutButton'
import { NavItem } from './components/NavItem'
import { NavMobileToggleButton } from './components/NavMobileToggleButton'
import { navItems } from './constants'

const atomIsOpen = atom(false)

export function NavBar() {
  const [isOpen, setIsOpen] = useAtom(atomIsOpen)
  const { authenticated } = useAuth()
  const { pathname } = useLocation()

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="sun.png" className="h-8" alt="Microshop Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Microshop</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {authenticated ? <LogoutButton /> : <LoginButton />}
          <NavMobileToggleButton onToggle={() => setIsOpen(!isOpen)} />
        </div>
        <div className={`${!isOpen && 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item) => (
              <NavItem
                key={item.name}
                url={item.path}
                name={item.name}
                isActive={item.path === pathname}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}