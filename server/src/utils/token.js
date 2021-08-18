import jwt from 'jsonwebtoken'
import { PROD, SECERET1, SECERET2, COOKIE_NAME } from '../constants'

export const createTokens = async (user) => {
    const { username, _id, tokenVersion } = user
    const payload = { username, _id }

    const accessToken = jwt.sign(payload, SECERET1, {
        expiresIn: '7d',
    })

    payload.tokenVersion = tokenVersion

    const refreshToken = jwt.sign(payload, SECERET2, {
        expiresIn: "15d"
    })

    return { accessToken, refreshToken }
}


export const verifyAccessToken = (accessToken) => {
    try {
        const data = jwt.verify(accessToken, SECERET1)
        return data
    } catch (err) {
        return null
    }
}

export const verifyRefreshToken = (refreshToken) => {
    try {
        const data = jwt.verify(refreshToken, SECERET2)
        return data
    } catch (err) {
        return null
    }
}

export const sendRefreshTokenAsCokkie = (res, refreshToken) => {
    res.cookie(COOKIE_NAME, refreshToken, {
        httpOnly: true,
        path: '/api/auth',
        secure: PROD,
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    })
}