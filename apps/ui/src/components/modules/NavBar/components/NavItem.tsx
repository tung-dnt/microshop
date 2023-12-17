import { Link } from 'react-router-dom'

type NavItemProps = {
  url: string;
  name: string;
  isActive: boolean;
}

export function NavItem({ url, name, isActive }: NavItemProps) {
  const inactiveStyle = 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
  const activeStyle = 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'

  return (
    <li>
      <Link to={url}  className={isActive ? activeStyle : inactiveStyle}>
        {name}
      </Link>
    </li>
  )
}
