import mongoose from 'mongoose';

export type UserDocument = mongoose.Document & {
    name: string,
    email: string,
    password: string,
    createdAt: Date,
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
});

export const user = (mongoose.models.users || mongoose.model<UserDocument>('user', userSchema))
