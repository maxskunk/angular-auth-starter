import express from 'express';
import { Test } from './endpoints/test/timezone';
import { User } from './endpoints/user/user';

const app = express();
const port = 3000;

//Test
const testRoute = new Test();
app.get('/test/timezones', testRoute.getLocationsWithTimezones);
app.get('/test/test', testRoute.testFunction)

//User
const userRoute = new User();
app.get('/user', userRoute.getUser);

app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});