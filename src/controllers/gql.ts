import express from 'express';

export const gqlEndpoint = async(req: express.Request, res: express.Response)=> {
   res.sendStatus(200).json("GQL");
}


