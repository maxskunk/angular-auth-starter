import { Request, Response, NextFunction } from 'express';
import { Util } from '../../utils/util';
const myModule = require('./../../firebase/shared-firebase');

const admin = myModule.admin;
const db = myModule.db;

interface LocationWithTimezone {
    location: string;
    timezoneName: string;
    timezoneAbbr: string;
    utcOffset: number;
};


export class Test {

    public async testFunction(request: Request, response: Response, next: NextFunction) {
        response.status(200).json({
            "data": "This is another test: " + Util.randomNumber()
        });
    };

    public async getLocationsWithTimezones(request: Request, response: Response, next: NextFunction) {
        let locations: LocationWithTimezone[] = [
            {
                location: 'Germany',
                timezoneName: 'Central European Time',
                timezoneAbbr: 'CET',
                utcOffset: 1
            },
            {
                location: 'China',
                timezoneName: 'China Standard Time',
                timezoneAbbr: 'CST',
                utcOffset: 8
            },
            {
                location: 'Argentina',
                timezoneName: 'Argentina Time',
                timezoneAbbr: 'ART',
                utcOffset: -3
            },
            {
                location: 'Japan',
                timezoneName: 'Japan Standard Time',
                timezoneAbbr: 'JST',
                utcOffset: 9
            }
        ];
        response.status(200).json(locations);
    }

    public async getList(request: Request, response: Response, next: NextFunction) {
        const effectSnapshot = await db.collection('userprefs').where('uid', '==', 'i').limit(1).get();

        if (effectSnapshot.empty) {
            return response.status(400).json("User Not Found");

        }
        response.status(200).send(effectSnapshot.data());
    }

}
