import {
  Avatar,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import { faArrowRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useAuth } from '@/hooks'

export function LogoutButton() {
  const { logout } = useAuth()

  const menuItems = [
    {
      label: 'Profile',
      icon: faUser,
      action: () => {},
    },
    {
      label: 'Log Out',
      icon: faArrowRightFromBracket,
      action: logout,
    },
  ]

  return (
    <Menu>
      <MenuButton as={Avatar} />
      <MenuList>
        {menuItems.map((item) => (
          <MenuItem
            key={item.label}
            icon={<FontAwesomeIcon icon={item.icon} />}
            onClick={item.action}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}