import { Module } from '@nestjs/common';
import { QuestionService } from './question.service';
import { QuestionController } from './question.controller';
import { SequelizeModule } from "@nestjs/sequelize";
import { Question1 } from "./question_1.model";
import { Question2 } from "./question_2.model";
import { Question1Calcul } from "./questionCalculation_1.model";
import { Question2Calcul } from "./questionCalculation_2.model";
import { Question3Calcul } from "./questionCalculation_3.model";


@Module({
  imports: [SequelizeModule.forFeature([Question1, Question2, Question1Calcul, Question2Calcul, Question3Calcul])],
  providers: [QuestionService],
  controllers: [QuestionController]
})
export class QuestionModule {}
