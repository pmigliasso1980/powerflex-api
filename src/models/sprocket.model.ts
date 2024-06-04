import { Table, Column, Model, DataType } from 'sequelize-typescript';


@Table({
  tableName: "sprockets",
  timestamps: false, // Disable timestamps if they are not needed
})
export default class Sprocket extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: "id"
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        field: "teeth"
    })
    teeth!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        field: "pitch_diameter"
    })
    pitchDiameter!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        field: "outside_diameter"
    })
    outsideDiameter!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
        field: "pitch"
    })
    pitch!: number;
}
