import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { Logger, ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {cors: true})
  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  // 设置swagger文档相关配置
  const swaggerOptions = new DocumentBuilder()
    .setTitle('wealth-channel api document')
    .setDescription('wealth-channel project api document')
    .setVersion('1.0')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, swaggerOptions)
  SwaggerModule.setup('api', app, document)

  await app.listen(3000)
}
bootstrap()
