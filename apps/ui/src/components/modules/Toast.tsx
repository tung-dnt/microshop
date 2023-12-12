import {
Alert,
AlertDescription,
AlertIcon,
AlertTitle,
Box,
CloseButton,
Slide,
VStack,
} from '@chakra-ui/react'
import { effect } from '@preact/signals-react'

import type { Notification } from '@/models/system'
import { NotificationSignal } from '@/signals/common'
import { classNames } from '@/utils/classNames'

type NotificationDialogProps = {
  timeout: number;
  onClose?: () => void;
};

export function Toast({ timeout, onClose }: NotificationDialogProps) {
  const notifications = NotificationSignal.get()

  const handleClose = (index: number) => {
    onClose?.()
    NotificationSignal.pop(index)
  }

  effect(() => {
    if (!notifications) return
    const timeoutId = setTimeout(handleClose, timeout)

    return () => clearTimeout(timeoutId)
  })

  const renderNoti = (notification: Notification, index: number) => (
    notifications && (
      <Slide
        direction="right"
        in={Boolean(notification)}
        className={classNames('max-w-[31rem]', 'z-10')}
      >
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
            onClick={() => handleClose(index)}
          />
        </Alert>
      </Slide>
    )
  )

  return (
    <VStack>
      {notifications.map(renderNoti)}
    </VStack>
  )
}