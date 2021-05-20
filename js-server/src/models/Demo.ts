import { Schema, model, Document } from 'mongoose';
import { IUser } from './User';

export interface IDemo extends Document {
    value: string,
    user: IUser['_id']
}

const demoSchema: Schema = new Schema({
    value: {
        type: Schema.Types.String,
        required: true,
        index: { unique: true },
        minLength: 3
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     required: true,
    //     index: { unique: true },
    // }
});

export const Demo = model<IDemo>('Demo', demoSchema);
