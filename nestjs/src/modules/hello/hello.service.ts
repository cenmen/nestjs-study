import { Injectable } from '@nestjs/common'

@Injectable()
export class HelloService {
  getHello({ name, age }): string {
    return `我的名字是 ${name}, 年龄是 ${age}`
  }

  postHello({ name, age, role }): object {
    return { text: `我的名字是 ${name}, 年龄是 ${age}, 角色是 ${role}` }
  }
}
