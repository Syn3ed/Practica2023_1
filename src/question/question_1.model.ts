import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";


interface Question1CreateAtts{
  name:string,
  nameValue:string,
  value_1:string,
  value_2:string
}

@Table({tableName:'question1'})
export class Question1 extends Model<Question1,Question1CreateAtts>{
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  nameValue: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value_1: string;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  value_2: string;

}