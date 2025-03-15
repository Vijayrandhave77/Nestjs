import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Todos, todosSchema } from './entityTodos';
import { LoginController } from './login.controller';


@Module({
  imports: [MongooseModule.forFeature([{ name: Todos.name, schema: todosSchema }])],
  controllers: [TodoController,LoginController],
  providers: [ TodoService],
})
export class TodoModule {}
