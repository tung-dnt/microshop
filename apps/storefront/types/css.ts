import type { PropertiesHyphen } from 'csstype'
import type {Either} from '@shared/types'

export interface CSSProperties extends PropertiesHyphen {
  // Override
  [key: `-${string}`]: string | number | undefined;
}

export type SolidInlineCss =  Either<CSSProperties, string>
