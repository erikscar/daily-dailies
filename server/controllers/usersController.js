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

export const searchForUser = async(req, res) => {
    try {
        const user = {
            email: req.body.email,
            password: req.body.password
        }
        const db = await database()
        const foundUser = await db.collection('users').findOne(user)

        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(foundUser)
    } catch (error) {
        res.status(500).json({ message: "Error During Searching: ", error})
    }
}
