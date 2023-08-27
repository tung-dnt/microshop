import { Provider } from '@nestjs/common'

export interface PrismaModuleOptions {
    isGlobal?: boolean;
    providers: Provider[];
}
