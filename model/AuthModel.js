import mongoose from "mongoose";

const AuthSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String
})

const AuthModel = mongoose.model("users", AuthSchema)

export default AuthModel