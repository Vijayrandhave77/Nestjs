import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
