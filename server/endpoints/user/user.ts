import { Request, Response, NextFunction } from 'express';
import { admin, authDb } from './../../firebase/shared-firebase';

export class User {



    public async getUser(request: Request, response: Response, next: NextFunction) {
        const idToken = request.headers['authorization'];
        if (!idToken) {
            response.status(401).json("NO TOKEN");
        }
        admin.auth()
            .verifyIdToken(idToken)
            .then(async (decodedToken) => {
                const uid = decodedToken.uid;
                const hostCodeRef = authDb.collection('hostcodes').where('uid', '==', uid);
                const snapshot = await hostCodeRef.get();

                response.status(200).json({
                    "user": "test"
                });
            });
    }
}