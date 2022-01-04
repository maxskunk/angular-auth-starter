import express from 'express';
import { Test } from './endpoints/test/timezone';
import { User } from './endpoints/user/user';

const app = express();
const PORT = Number(process.env.PORT) || 8080;

app.use(function (req, res, next) {
    if (process.env.NODE_ENV === 'development') {
        res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    }
    else {
        res.header("Access-Control-Allow-Origin", "https://www.auth.zokyamedia.com/");
    }
    res.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization ");
    next();
});

app.use(express.urlencoded(
    {
        extended: true
    }
));

//Test
const testRoute = new Test();
app.get('/test/timezones', testRoute.getLocationsWithTimezones);
app.get('/test/test', testRoute.testFunction);
app.get('/test', testRoute.getList);

//User
const userRoute = new User();
app.get('/user', userRoute.getUser);

app.listen(PORT, () => {
    console.log(`Node Server Running on Port ${PORT}.`);
});