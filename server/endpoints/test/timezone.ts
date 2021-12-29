import { Request, Response, NextFunction } from 'express';
import { Util } from '../../utils/util';

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

    getLocationsWithTimezones(request: Request, response: Response, next: NextFunction) {
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
}
