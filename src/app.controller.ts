import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { authMiddleware } from './authMiddleware';
import { Request, Response } from 'express';

@UseGuards(authMiddleware)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('pipline')
  pipline() {
     return this.appService.pipline()
  }
}
