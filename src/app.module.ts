import { MiddlewareConsumer, Module } from '@nestjs/common';
import { authMiddleware } from './authMiddleware';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo/todo.controller';
import { FilesModule } from './todo/Files/files.module';
@Module({
  imports: [TodoModule,FilesModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestjstodos')],
  controllers: [ ],
  providers: [ ],
})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(authMiddleware).forRoutes(TodoController);
  // }
}
