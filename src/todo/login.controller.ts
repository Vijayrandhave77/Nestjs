import { Controller, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
@Controller('login')
export class LoginController {
  constructor() {}

  @Post('create')
    createTodo(@Req() req: Request, @Res() res: Response) {
    try {
      let body = req.body;
      let token = jwt.sign(JSON.stringify(body), 'secret12345');
      console.log(token);
      res.cookie('jwt', token);
      res.json({ message: 'token created', token: token });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
