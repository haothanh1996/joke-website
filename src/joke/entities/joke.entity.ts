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
  @AutoMap()
  @Prop({ required: true })
  content: string;

  @AutoMap()
  @Prop({ required: true, default: 0 })
  like: number;

  @AutoMap()
  @Prop({ required: true, default: 0 })
  dislike: number;
}

export const JokeSchema = SchemaFactory.createForClass(Joke);
