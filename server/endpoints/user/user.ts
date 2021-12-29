import { Request, Response, NextFunction } from 'express';

export class User {
    public async getUser(request: Request, response: Response, next: NextFunction) {

        response.status(200).json({
            "user": "test"
        });
    };
}