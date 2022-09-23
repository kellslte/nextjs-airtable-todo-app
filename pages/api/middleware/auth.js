import { getSession, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { table } from '../utils/airtable'

const ownsRecord = (handler) => withApiAuthRequired(async (req, res) => {
    const { user } = await getSession(req, res);

    const { id } = req.body;

    try {
        const record = await table.find(id);
        if(!record || user.sub !== record.fields.userId) {
            res.statusCode = 404;
            return res.json({ msg: 'Record not found' });
        }

        req.record = record;
        return handler(req, res);
    } catch(error) {
        console.error(error);
        res.statusCode = 500;
        return res.json({ msg: 'Something went wrong' });
    }
});

export default ownsRecord;
