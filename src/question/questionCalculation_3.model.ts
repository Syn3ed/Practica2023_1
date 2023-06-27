import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface Question3CalculCreateAtts{
  name:string,
  value_1:string
}

@Table({tableName:'questionCalcul3'})
export class Question3Calcul extends Model<Question3Calcul,Question3CalculCreateAtts>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value_1: string;

}