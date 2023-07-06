import express from 'express';
import { getUsersByEmail,createUser } from '../db/users';
import { authentication, random } from '../helpers';

export const register = async(req: express.Request, res: express.Response)=> {
    try{
        const {email,password,username} = req.body;
        if(!email || !password || !username) return res.sendStatus(400);

        const exisitingUser = await getUsersByEmail(email);
        const salt=random();
        const user = await createUser({
            email,username,
            authentication: {
                 salt,
                 password: authentication(salt,password),
            }
        });

        return res.sendStatus(200).json(user).end();
    }
    catch(error){
        console.log(error);
        res.sendStatus(417);
    }
}


