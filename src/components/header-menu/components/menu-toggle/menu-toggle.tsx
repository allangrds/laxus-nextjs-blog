import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'

type MenuToggleProps = {
  isOpen?: boolean;
  toggle: () => void;
}

export const MenuToggle = ({ isOpen = false, toggle }: MenuToggleProps) => (
  <Box
    display={{ base: 'block', md: 'none' }}
    onClick={toggle}
    cursor="pointer"
  >
    {
      isOpen
        ? <CloseIcon height="6" width="6" />
        : <HamburgerIcon height="8" width="8" />
    }
  </Box>
)
