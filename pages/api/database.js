import { v4 as uuidv4 } from 'uuid';
import database from '../../db';

const withId = database.map((entry) => {
  return {
    ...entry,
    uid: uuidv4().slice(0, 5),
  }
});

export default function handler(_req, res) {
  res.status(200).json(withId);
}

