import express from 'express';
import { Test } from './endpoints/test/timezone';
import { User } from './endpoints/user/user';

const app = express();
const PORT = Number(process.env.PORT) || 8080;

//Test
const testRoute = new Test();
app.get('/test/timezones', testRoute.getLocationsWithTimezones);
app.get('/test/test', testRoute.testFunction)

//User
const userRoute = new User();
app.get('/user', userRoute.getUser);

app.listen(PORT, () => {
    console.log(`Node Server Running on Port ${PORT}.`);
});