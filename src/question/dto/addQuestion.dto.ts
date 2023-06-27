import {IsString} from "class-validator";

export class AddQuestionDto{
  @IsString({message:'Должно быть строкой'})
  readonly value_1:string;
  readonly value_2:string;
  readonly name:string;
  readonly nameValue:string;
}