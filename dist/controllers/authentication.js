"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const users_1 = require("../db/users");
const helpers_1 = require("../helpers");
const register = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username)
            return res.sendStatus(400);
        const exisitingUser = await (0, users_1.getUsersByEmail)(email);
        const salt = (0, helpers_1.random)();
        const user = await (0, users_1.createUser)({
            email, username,
            authentication: {
                salt,
                password: (0, helpers_1.authentication)(salt, password),
            }
        });
        return res.sendStatus(200).json(user).end();
    }
    catch (error) {
        console.log(error);
        res.sendStatus(417);
    }
};
exports.register = register;
