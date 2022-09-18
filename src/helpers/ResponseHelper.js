const HttpStatusCodeOK = 200;
const HttpStatusCodeBADREQUEST = 400;

const r = {

    rest: (resObj, s = false, m, d = null) => {
        resObj.status(HttpStatusCodeOK).send({
            status: s,
            message: m,
            data: d,
            error: s ? null : HttpStatusCodeBADREQUEST
        });
    }

};

export { r }