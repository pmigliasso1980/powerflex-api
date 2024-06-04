import { IsInt } from 'class-validator';
import { IsFloat } from '../../decorators/isfloat.decorator';

export class SprocketCreateRequestDTO {
  @IsInt()
  teeth!: number;

  @IsFloat()
  pitch_diameter!: number;

  @IsFloat()
  outside_diameter!: number;

  @IsFloat()
  pitch!: number;
}


export class SprocketUpdateRequestDTO {
  @IsInt()
  id!: number;

  @IsInt()
  teeth!: number;

  @IsFloat()
  pitch_diameter!: number;

  @IsFloat()
  outside_diameter!: number;

  @IsFloat()
  pitch!: number;
}
