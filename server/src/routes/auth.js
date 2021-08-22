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
    try {
        const checkUserExit = await User.findOne({ email: req.body.email }).exec()
        if (!checkUserExit) {
            const user = new User(payload)
            await user.save()
            res.json({
                ok: true,
                message: 'Account created successfully, login to your account.'
            })
        } else {
            throw {
                code: 420, message: 'User already Exist with the email...'
            }
        }
    } catch (err) {
        console.log(err)
        if (err.code === 420) {
            res.json({
                ok: false, message: err.message,
            })
        } else {
            res.json({ ok: false, message: 'Unable to create an account, please try again later' })
        }

    }
})

router.post('/')

export default router;
