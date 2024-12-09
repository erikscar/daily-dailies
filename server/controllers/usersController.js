import { database } from "../config/config.js";

export const getUsers = async (_, res) => {
    try {
        const db = await database()
        const users = db.collection('users').find().toArray()
        res.status(200).json(users)

    } catch (error) {
        res.status(500).json({message: "Error Serching for Users", error})
    }
}
