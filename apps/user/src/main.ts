import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { ConfigService } from '@nestjs/config'
import { ValidationPipe } from '@nestjs/common'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import { HttpErrorFilter } from '@shared/providers'
import { UserModule } from './user.module'

async function bootstrap() {
  // @ts-ignore
  BigInt.prototype.toJSON = function () {
    return Number(this.toString())
  }
  const app = await NestFactory.create(UserModule)
  app.setGlobalPrefix('api')
  app.use(helmet())
  app.use(cookieParser())
  app.useGlobalFilters(new HttpErrorFilter())
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }))

  const options = new DocumentBuilder()
    .setTitle('API docs')
    .addTag('users')
    .addTag('auth')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  const configService = app.get(ConfigService)
  await app.listen(configService.get('port') as string)
}

bootstrap()