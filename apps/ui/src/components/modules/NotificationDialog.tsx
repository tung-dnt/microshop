import {
Alert,
AlertDescription,
AlertIcon,
AlertTitle,
Box,
CloseButton,
Slide,
} from '@chakra-ui/react'
import { effect } from '@preact/signals-react'

import { NotificationSignal } from '@/signals/common'
import { classNames } from '@/utils/classNames'

type NotificationDialogProps = {
  timeout: number;
  onClose?: () => void;
};

export function NotificationDialog({ timeout, onClose }: NotificationDialogProps) {
  const notification = NotificationSignal.get()

  const handleClose = () => {
    onClose?.()
    NotificationSignal.set(null)
  }

  effect(() => {
    if (!notification) return
    const timeoutId = setTimeout(handleClose, timeout)

    return () => clearTimeout(timeoutId)
  })

  const renderAlert = () => (
    notification && (
      <Alert status={notification.status}>
        <AlertIcon/>
        <Box>
          <AlertTitle>{notification.title}</AlertTitle>
          <AlertDescription>{notification?.description ?? ''}</AlertDescription>
        </Box>
        <CloseButton
          alignSelf="flex-start"
          position="relative"
          right={-1}
          top={-1}
          onClick={handleClose}
        />
      </Alert>
    )
  )

  return (
    <Slide
      direction="right"
      in={Boolean(notification)}
      className={classNames('max-w-[31rem]', 'z-10')}
    >
      {renderAlert()}
    </Slide>
  )
}