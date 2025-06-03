import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, IsString } from 'class-validator';

enum MyEnum {
  a = 'a',
  b = 'b',
}

export class CreateTaskDto {
  @IsString()
  @ApiProperty()
  title: string;

  @IsNumber()
  @ApiProperty()
  size: number;
}

export class FindAllTasksQueryDto {
  @IsNumber()
  @ApiProperty()
  limit: number;

  @IsNumber()
  @ApiProperty()
  offset: number;

  @IsEnum(MyEnum)
  @ApiProperty({ enum: MyEnum })
  status: MyEnum;
}
