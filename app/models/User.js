import mongoose from "mongoose";
import Email from "next-auth/providers/email";
import username from "../[username]/page";
const { Schema, model } = mongoose;

const UseSchema = new Schema({
    email: {type: String, required: true },
    name: {type: String },
    username: { type: String, required: true },
    profilepic: { type: String},
    coverpic: { type: String},
    createdAt: { type:Date, default:Date.now},
    updatedAt: { type:Date, default:Date.now},
});

export default mongoose.models.User || model("User", UserSchema);