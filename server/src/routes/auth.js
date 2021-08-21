import { Router } from "express";
import bcrypt from "bcrypt";
import { COOKIE_NAME } from "../constants";
import { createTokens, verifyRefreshToken } from "../utils/token";
import User from '../models/User';

const router = Router();

router.get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Hello World...!'
    })
})


router.post('/refresh', async (req, res) => {
    const tokken = req.cookies[COOKIE_NAME]
    if (!tokken) {
        return res.json({
            ok: false,
            message: 'no token is provided'
        })
    }

    const payload = verifyRefreshToken(tokken)
    if (!payload) {
        return res.json({
            ok: false,
            message: 'refresh expired'
        })
    }

    const user = await User.findById(payload._id).exec()

    if (!user) {
        return res.json({ ok: false, message: 'no user exist with the token' })
    }

    if (payload.tokenVersion !== user.tokenVersion) {
        return res.json({ ok: false, message: 'invalaid token version' })
    }

    const { accessToken, refreshToken } = await createTokens(user)
    sendRefreshTokenAsCokkie(res, refreshToken)

    const { _id, username, email } = user
    return res.json({
        ok: true,
        data: { accessToken, user: { _id, username, email } }
    })
})

router.post('/login', async (req, res) => {

})

router.post('/signup', async (req, res) => {
    const payload = {
        ...req.body,
        password: await bcrypt.hash(req.body.password, 10)
    }
    console.log(payload)

})

router.post('/')

export default router;