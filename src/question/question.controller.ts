import { Body, Controller, Get, Post } from "@nestjs/common";
import { QuestionService } from "./question.service";
import { AddQuestionDto } from "./dto/addQuestion.dto";
import { AddQuestionCalculDto } from "./dto/addQuestionCalcul.dto";

@Controller('question')
export class QuestionController {
  constructor( private questionService:QuestionService) {}

  @Get('/q1')
  getAllq1(){
    return this.questionService.getAllQuest1();
  }
  @Get('/q2')
  getAllq2(){
    return this.questionService.getAllQuest2();
  }
  @Get('/calcul-q1')
  getAllCalculq1(){
    return this.questionService.getAllQuestCalcul1()
  }

  @Get('/calcul-q2')
  getAllCalculq2(){
    return this.questionService.getAllQuestCalcul2()
  }

  @Get('/calcul-q3')
  getAllCalculq3(){
    return this.questionService.getAllQuestCalcul3()
  }

  @Post('/add-q1')
  addQuest1(@Body() questDto:AddQuestionDto){
    return this.questionService.addQuest1(questDto)
  }

  @Post('/add-q2')
  addQuest2(@Body() questDto:AddQuestionDto){
    return this.questionService.addQuest2(questDto)
  }

  @Post('/add-calcul-q1')
  addQuestCalcul1(@Body() questDto:AddQuestionCalculDto){
    return this.questionService.addQuestCalcul1(questDto)
  }

  @Post('/add-calcul-q2')
  addQuestCalcul2(@Body() questDto:AddQuestionCalculDto){
    return this.questionService.addQuestCalcul2(questDto)
  }

  @Post('/add-calcul-q3')
  addQuestCalcul3(@Body() questDto:AddQuestionCalculDto){
    return this.questionService.addQuestCalcul3(questDto)
  }
}
