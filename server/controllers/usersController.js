import { database } from "../config/config.js";

export const getUsers = async (_, res) => {
    try {
        const db = await database()
        const users = await db.collection('users').find().toArray()
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({message: "Error Serching for Users: ", error})
    }
}

export const postUser = async(req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        }

        const db = await database()
        await db.collection('users').insertOne(user)
        res.status(200).json({message: "User Created", user: user})
    } catch (error) {
        res.status(500).json({ message: "Error During Insertion: ", error})
    }
}
