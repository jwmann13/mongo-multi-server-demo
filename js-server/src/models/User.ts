import { Document, model, Schema } from 'mongoose';
import { IDemo } from '.';

export interface IUser extends Document {
    name: string,
    demos: IDemo[]
}

const userSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        index: { unique: true },
        minLength: 3
    },
    demos: {
        type: [Schema.Types.ObjectId]
    }
});

export const User = model<IUser>('user', userSchema);
