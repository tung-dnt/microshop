import type { UserProfile } from '@shared/types'

declare global {
  namespace Express {
    interface Request {
      user?: UserProfile;
    }
  }
}
