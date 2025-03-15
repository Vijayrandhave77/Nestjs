import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Todos } from './entityTodos';
import { Model } from 'mongoose';
@Injectable()
export class TodoService {
  constructor(@InjectModel(Todos.name) private todosModel: Model<Todos>) {}
  async getAllTodos() {
    let Alltodos = await this.todosModel.find({});
    return Alltodos;
  }

  async createtodos(req) {
    try {
      let body = req.body;
      let response = new this.todosModel(body);
      await response.save();
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

 async updateTodos(req) {
    try {
      let id = req.params.id;
       let response = await this.todosModel.updateOne({_id:id},{ $set: { name: 'updated name 2' } })
       return response;
    } catch (error) {
      return error;
    }
  }

 async delete(req){
    try {
        let id = req.params.id
        let response = await this.todosModel.deleteOne({_id:id})
        return response
    } catch (error) {
        return error
    }
  }
}
