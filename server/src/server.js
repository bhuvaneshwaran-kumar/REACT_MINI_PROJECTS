import express from 'express';
import mongoose from 'mongoose';
import { PORT, MONGO_DB_URL } from './constants.js'


const main = async () => {
    try {

        await mongoose.connect(MONGO_DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: true,
        })
        console.log(`connected to mongoDB ${MONGO_DB_URL}`)

        const app = express();

        app.listen(8080, () => {
            console.log('listening on port 8080')
        })

    }
    catch (err) {
        console.error(err)
    }

}


main()
