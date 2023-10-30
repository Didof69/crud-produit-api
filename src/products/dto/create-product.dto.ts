import { IsInt, IsNotEmpty, IsString, Length, Max, Min } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  product_name: string;

  @IsNotEmpty()
  @IsString()
  @Length(1, 7)
  price: string;

  @IsNotEmpty()
  @IsInt()
  quantity: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  @Max(3)
  category_id: number;
}
