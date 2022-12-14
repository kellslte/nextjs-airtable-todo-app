import { table, minifyRecord } from "./utils/airtable";
import ownsRecord from './middleware/auth'

export default ownsRecord(async (req, res) => {
  const { id, fields } = req.body;
  try {
    const record = await table.update([{ id, fields }]);
    res.statusCode = 200;
    res.json(minifyRecord(record[0]));
  } catch (err) {
    res.statusCode = 500;
    res.json({ msg: "Something went wrong", err: err });
  }
});
