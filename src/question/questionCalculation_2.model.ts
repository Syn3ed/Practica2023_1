import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface Question2CalculCreateAtts{
  name:string,
  value_1:string
}

@Table({tableName:'questionCalcul2'})
export class Question2Calcul extends Model<Question2Calcul,Question2CalculCreateAtts>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;
  
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  Value: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value_1: string;

}