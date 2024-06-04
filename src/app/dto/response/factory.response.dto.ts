import { Expose } from 'class-transformer';
import { ValidateNested, IsInt } from 'class-validator';
import { ChartData } from '../../../types/types';
import Factory from '../../../models/factory.model';

export class FactoryCreateResponseDTO {
    @Expose()
    @IsInt()
    id: number;


    @Expose()
    @ValidateNested()
    chart_data:  ChartData;
    
    constructor(factory: Factory) {
        this.id = factory.id;
        this.chart_data = factory.chartData;
    }
  }
  
export class FactoryUpdateResponseDTO {
    @Expose()
    @ValidateNested()
    chart_data:  ChartData;

    constructor(factory: Factory) {
        this.chart_data = factory.chartData;
    }
}
