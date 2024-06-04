import { ValidateNested, IsInt } from 'class-validator';
import { ChartData } from '../../../types/types';


export class FactoryCreateRequestDTO {
  @ValidateNested()
  chart_data!: ChartData;
}

export class FactoryUpdateRequestDTO {
  @IsInt()
  id!: number;

  @ValidateNested()
  chart_data!: ChartData;
}
