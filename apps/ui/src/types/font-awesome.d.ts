// just for typing
// althouth importing all, but this is only a definition file so it won't affect the bundle size.
import '@fortawesome/free-solid-svg-icons'

import type { FontAwesomeIconDefinition } from './font-awesome'

declare module '@fortawesome/react-fontawesome' {
  function FontAwesomeIcon(
    props: Omit<FontAwesomeIconProps, 'icon'> & {
      icon: FontAwesomeIconDefinition;
    },
  ): JSX.Element;
}
