import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';
@Schema()
export class Todos {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  age: number;

  @Prop()
  phone: number;
}
export const todosSchema = SchemaFactory.createForClass(Todos);
todosSchema.plugin(mongoosePaginate);

todosSchema.pre('find',function(next){
  this.populate('name')
  next();
})
