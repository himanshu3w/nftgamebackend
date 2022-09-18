import { r } from '../helpers/ResponseHelper.js'
import { verifyJWT } from '../helpers/AuthHelper.js'

const private_auth_jwt = async (req, res, next) => {
    if (typeof req.headers['x-auth-token'] === 'undefined') {
        r.rest(res, "Unauthorized Access! Auth token not found!");
    } else {
        let token = req.headers['x-auth-token'];
        let decoded = verifyJWT(token);
        if (decoded.status) {
            if (req.headers['private-token'] == 'admin@taskplanet') {
                req.auth = decoded.data;
                next();
            }
            else {
                r.rest(res, `Problem With Private Token!`);

            }
        } else {
            r.rest(res, `Unauthorized Access! (${decoded.message})`);
        }
    }
}


export { private_auth_jwt }
