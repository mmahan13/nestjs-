import {
  IsArray,
  IsBoolean,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(2)
  public name: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  public price?: number;
  @IsString()
  @IsOptional()
  public description?: string;
  @IsString()
  @IsOptional()
  public slug?: string;
  @IsInt()
  @IsNumber()
  @IsOptional()
  @IsPositive()
  public stock?: number;
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  public size?: string[];
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  public tags?: string[];
  @IsString()
  @IsOptional()
  public gender?: string;
  @IsString({ each: true })
  @IsArray()
  @IsOptional()
  public images?: string[];
  @IsBoolean()
  @IsOptional()
  public active?: boolean;
}
