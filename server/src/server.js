import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { PORT, MONGO_DB_URL } from './constants.js'
import AuthRoute from './routes/auth.js'



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
            origin: ['http://localhost:3001', 'http://localhost:3000'],
            optionsSuccessStatus: 200,
            credential: true
        }
        app.use(cors(corsOptions));

        // URI
        app.use('/api/auth', AuthRoute)

        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}`)
        })

    }
    catch (err) {
        console.error(err)
    }

}


main()
