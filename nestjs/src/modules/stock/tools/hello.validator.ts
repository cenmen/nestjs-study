import { IsString, IsNotEmpty, IsInt, IsEnum, MinLength, MaxLength } from 'class-validator'
import { Type } from 'class-transformer'
import { UserRole } from 'src/utils/enum'

export class getHelloBody {
  @IsNotEmpty()
  @IsString()
  readonly name: string

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  readonly age: number
}

export class postHelloBody {
  @IsString()
  @MinLength(2)
  @MaxLength(10)
  readonly name: string

  @IsNotEmpty()
  @IsInt()
  readonly age: number

  @IsNotEmpty()
  @IsEnum(UserRole)
  readonly role: UserRole
}
