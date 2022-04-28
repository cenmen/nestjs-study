import { APP_PIPE } from '@nestjs/core'
import { Module } from '@nestjs/common'
import { HelloModule } from './modules/hello/hello.module'

@Module({
  imports: [HelloModule],
})
export class AppModule {}
