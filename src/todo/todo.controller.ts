import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { TodoService } from './todo.service';
import { authMiddleware } from 'src/authMiddleware';
 
@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  // @UseGuards(authMiddleware)
  @Get()
  async getAllTodos(@Req() req: Request, @Res() res: Response) {
    let todos = await this.todoService.getAllTodos();
    res
      .status(200)
      .json({ status: 'success', data: todos, user: (req as any).user });
  }

  @Post('create')
  async createTodo(@Req() req: Request, @Res() res: Response) {
    let todos = await this.todoService.createtodos(req);
    res.status(200).json({ message: 'success', data: todos });
  }

  @Put('update/:id')
  async updateTodos(@Req() req: Request, @Res() res: Response) {
    let todos = await this.todoService.updateTodos(req);
    res.status(200).json({ todos });
  }

  @Delete(':id')
  async deleteTodos(@Req() req: Request, @Res() res: Response) {
    let deleteTodos = await this.todoService.delete(req);
    res.status(200).json({ deleteTodos });
  }
}
