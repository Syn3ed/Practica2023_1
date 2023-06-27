import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface Question1CalculCreateAtts{
  name:string,
  value_1:string
}

@Table({tableName:'questionCalcul1'})
export class Question1Calcul extends Model<Question1Calcul,Question1CalculCreateAtts>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value_1: string;

}