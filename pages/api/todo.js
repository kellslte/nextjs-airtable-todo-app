import { table } from "./utils/airtable";
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const { description } = req.body;
  const { user } = await getSession(req, res);
  try {
    const records = await table.create([{ fields: { description, userId: user.sub }}]);
      const createdRecord = {
        id: records[0].id,
        fields: records[0].fields,
    }
    res.statusCode = 200;
    res.json(createdRecord);
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong", err: err });
  }
});
