import { table } from "./utils/airtable";

export default async (req, res) => {
    const { description } = req.body;
  try {
    const records = await table.create([{ fields: { description }}]);
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
};
