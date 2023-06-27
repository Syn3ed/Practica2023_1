import {IsString} from "class-validator";

export class AddQuestionCalculDto{
  @IsString({message:'Должно быть строкой'})
  readonly value_1:string;
  readonly name:string;
}