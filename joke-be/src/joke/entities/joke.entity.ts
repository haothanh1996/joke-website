import { AutoMap } from '@automapper/classes';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export type JokeDocument = Joke & Document;

@Schema({
  collection: 'jokes',
  timestamps: true,
  toJSON: {
    transform: function (_doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Joke {
  @Prop({ required: true })
  content: string;

  @Prop({ required: true, default: 0 })
  like: number;

  @Prop({ required: true, default: 0 })
  dislike: number;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
