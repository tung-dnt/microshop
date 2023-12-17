import {
  Modal,
  ModalOverlay,
} from '@chakra-ui/react'
import { atom, useAtom } from 'jotai'

import { Loader } from '../elements'

export const atomModalOpen = atom(false)

export function LoadingModal() {
  const [isOpen, setOpen] = useAtom(atomModalOpen)

  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <Modal isOpen={isOpen} isCentered onClose={handleCloseModal}>
      <ModalOverlay />
      <Loader />
    </Modal>
  )
}