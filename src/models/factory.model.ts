import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ChartData } from '../types/types';

@Table({
  tableName: 'factories',
  timestamps: false, // Disable timestamps if they are not needed
})
export default class Factory extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id!: number;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
    field: "chart_data",
    get(): ChartData {
      // Getters provide data transformation for reading
      const value: any = this.getDataValue('chartData');
      return typeof value === 'string' ? JSON.parse(value) : value;
    },
    set(value: ChartData): void {
      // Setters provide data transformation for writing
      this.setDataValue('chartData', JSON.stringify(value));
    }
  })
  chartData!: ChartData;
}
