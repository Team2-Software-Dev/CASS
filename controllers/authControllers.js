import AuthModel from "../model/AuthModel.js"
import bcrypt from "bcryptjs"

export const login = async (req, res) => {
    const userInfo = await req.body

    const user = await AuthModel.findOne({ username: userInfo.username })

    if (user && (await bcrypt.compare(userInfo.password, user.password))) {

        const { password, ...others } = user._doc
        return res.status(200).json(others)
    }
    else {
        return res.status(400).json({ message: "Username or Password was incorrect" })
    }

}

export const register = async (req, res) => {
    const userInfo = await req.body

    const isUsernameExists = await AuthModel.findOne({ username: userInfo.username })
    if (isUsernameExists) {
        return res.status(400).json({ message: "Username already used" })
    }

    const isEmailExists = await AuthModel.findOne({ email: userInfo.email })
    if (isEmailExists) {
        return res.status(400).json({ message: "Email already used" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(userInfo.password, salt)
    const user = await AuthModel.create({ username: userInfo.username, email: userInfo.email, password: hashedPassword })

    if (user) {
        const { password, ...others } = user._doc
        return res.status(200).json(others)
    }
    else {
        return res.status(400).json({ message: "Something went wrong" })
    }

}