import { r } from '../helpers/ResponseHelper.js'
import {  verifyJWT } from '../helpers/AuthHelper.js'

   const   auth_jwt= async(req, res, next)=> {
        if (typeof req.headers['x-auth-token'] === 'undefined') {
            r.rest(res, "Unauthorized Access! Auth token not found!");
        } else {
            let token = req.headers['x-auth-token'];
            //console.log(token)
            let decoded = verifyJWT(token);
            if(decoded.status) {
                req.auth = decoded.data;
                next();
            }else{
                r.rest(res, `Unauthorized Access! (${decoded.message})`);
            }
        }
    }


export { auth_jwt}
