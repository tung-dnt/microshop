import { ValidationPipe, VersioningType } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { EnvService } from '@shared/config'
import { HttpErrorFilter } from '@shared/providers'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'

import { UserModule } from './user/user.module'

async function bootstrap() {
  const app = await NestFactory.create(UserModule)

  app.setGlobalPrefix('api')
  app.use(helmet())
  app.use(cookieParser())
  app.useGlobalFilters(new HttpErrorFilter())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }))
  app.enableVersioning({ type: VersioningType.URI })

  const options = new DocumentBuilder()
    .setTitle('API docs')
    .addTag('users')
    .addTag('auth')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)

  SwaggerModule.setup('api', app, document)

  const env: EnvService = app.get(EnvService)

  console.log(env.get('tcp.port'))
  console.log(env.get('auth.serializeEndpoint'))

  await app.listen(env.get('tcp.port') as string)
}

bootstrap()