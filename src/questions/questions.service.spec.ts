import { Test, TestingModule } from '@nestjs/testing';
import { CreateQuestionDto, QuestionType } from './dto/create-question.dto';
import { QuestionsService } from './questions.service';

describe('QuestionsService', () => {
  let service: QuestionsService;

  const exampleQuestionDTO: CreateQuestionDto = {
    text: '',
    type: QuestionType.SINGLE_CHOICE,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuestionsService],
    }).compile();

    service = module.get<QuestionsService>(QuestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be use question text on create', () => {
    const RESULT_TEXT = 'question text';
    exampleQuestionDTO.text = RESULT_TEXT;
    expect(service.create(exampleQuestionDTO)).toBe(RESULT_TEXT);
  });
});
