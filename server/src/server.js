import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser'

import { PORT, MONGO_DB_URL, CORS_ORIGIN } from './constants.js'
//Routes.
import authRouter from './routes/auth'



const main = async () => {
    try {
        const app = express();

        await mongoose.connect(MONGO_DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true,
        })
        console.log(`connected to mongoDB ${MONGO_DB_URL}`)

        //Enable CORS_ORIGIN
        let corsOptions = {
            origin: CORS_ORIGIN.split(" "),
            optionsSuccessStatus: 200,
            credential: true
        }
        app.use(cors(corsOptions));

        app.use(cookieParser());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));

        // URI
        app.use('/api/auth', authRouter)

        app.listen(PORT, () => console.log(`listening on port ${PORT}`))
            .on('error', (err) => console.error(err.message))

    }
    catch (err) {
        console.error(err)
    }

}


main()
