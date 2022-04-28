import { Controller, Get, Query, Post, Body } from '@nestjs/common'
import { HelloService } from './hello.service'
import { getHelloBody, postHelloBody } from './tools/hello.validator'
import { ApiQuery, ApiBody, ApiResponse, ApiOperation } from '@nestjs/swagger'
import { postHelloRequest, postHelloResponse } from './tools/hello.swagger'

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @ApiOperation({ summary: '获取拼接字符串(GET)' })
  @ApiQuery({ name: 'name', required: true, description: '名字', example: '周杰伦' })
  @ApiQuery({ name: 'age', required: true, description: '年龄', example: 10 })
  getHello(@Query() getHelloBody: getHelloBody): string {
    return this.helloService.getHello(getHelloBody)
  }

  @Post('post')
  @ApiOperation({ summary: '获取拼接字符串(POST)' })
  @ApiBody({ type: postHelloRequest })
  @ApiResponse({ type: postHelloResponse })
  postHello(@Body() postHelloBody: postHelloBody): object {
    return this.helloService.postHello(postHelloBody)
  }
}
