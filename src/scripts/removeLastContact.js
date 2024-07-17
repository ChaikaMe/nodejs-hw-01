import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    if (contacts.length > 0) {
      contacts.pop();
    } else return;

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error(error);
  }
};

removeLastContact();
