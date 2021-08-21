import mongoose from 'mongoose';

const { Schema, model } = mongoose

const UserSchema = new Schema({
    username: String,
    email: String,
    password: String,
    tokenVersion: {
        type: Number,
        default: 1
    }
})

const User = model("User", UserSchema)

export default User;