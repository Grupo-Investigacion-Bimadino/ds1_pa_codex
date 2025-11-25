import { PartialType } from '@nestjs/swagger';
import { CreateInteraccionesChatbotDto } from './create-interacciones_chatbot.dto';

export class UpdateInteraccionesChatbotDto extends PartialType(CreateInteraccionesChatbotDto) {}
