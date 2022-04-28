import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class postHelloRequest {
  @ApiProperty({ default: 'James', description: '名字' })
  name: string

  @ApiPropertyOptional({ default: 10, description: '年龄' })
  age: number

  @ApiProperty({ default: 'User', description: '角色' })
  role: string
}

export class postHelloResponse {
  @ApiProperty({ example: '我的名字是 xxx, 年龄是 xx, 角色是 xxx' })
  text: string
}
