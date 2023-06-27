import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface Question2CreateAtts{
  name:string,
  nameValue:string,
  value_1:string
}

@Table({tableName:'question2'})
export class Question2 extends Model<Question2,Question2CreateAtts>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  nameValue: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value_1: string;

}