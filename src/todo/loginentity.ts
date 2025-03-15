import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Login {
  @Prop()
  email: string;

  @Prop()
  password: number;

}

export const loginSchema = SchemaFactory.createForClass(Login);
