import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import { Question1 } from "./question_1.model";
import { Question2 } from "./question_2.model";
import { AddQuestionDto } from "../question/dto/addQuestion.dto";
import { Question1Calcul } from "./questionCalculation_1.model";
import { Question2Calcul } from "./questionCalculation_2.model";
import { Question3Calcul } from "./questionCalculation_3.model";
import { AddQuestionCalculDto } from "./dto/addQuestionCalcul.dto";


@Injectable()
export class QuestionService {

  constructor( @InjectModel(Question1)
               private questionRepository1: typeof Question1,
               @InjectModel(Question2)
               private questionRepository2: typeof Question2,
               @InjectModel(Question1Calcul)
               private questionRepositoryCalcul1: typeof Question1Calcul,
               @InjectModel(Question2Calcul)
               private questionRepositoryCalcul2: typeof Question2Calcul,
               @InjectModel(Question3Calcul)
               private questionRepositoryCalcul3: typeof Question3Calcul) {}

  async addQuest1(dto: AddQuestionDto) {
    const quest = await this.questionRepository1.create(dto);
    return quest;
  }
  async addQuest2(dto: AddQuestionDto) {
    const quest = await this.questionRepository2.create(dto);
    return quest;
  }

  async addQuestCalcul1(dto: AddQuestionCalculDto) {
    const quest = await this.questionRepositoryCalcul1.create(dto);
    return quest;
  }
  async addQuestCalcul2(dto: AddQuestionCalculDto) {
    const quest = await this.questionRepositoryCalcul2.create(dto);
    return quest;
  }
  async addQuestCalcul3(dto: AddQuestionCalculDto) {
    const quest = await this.questionRepositoryCalcul3.create(dto);
    return quest;
  }

  async getAllQuest1() {
    const quest = await this.questionRepository1.findAll({include:{all:true}});
    return quest;
  }
  async getAllQuest2() {
    const quest = await this.questionRepository2.findAll({include:{all:true}});
    return quest;
  }

  async getAllQuestCalcul1() {
    const quest = await this.questionRepositoryCalcul1.findAll({include:{all:true}});
    return quest;
  }

  async getAllQuestCalcul2() {
    const quest = await this.questionRepositoryCalcul2.findAll({include:{all:true}});
    return quest;
  }

  async getAllQuestCalcul3() {
    const quest = await this.questionRepositoryCalcul3.findAll({include:{all:true}});
    return quest;
  }
}
