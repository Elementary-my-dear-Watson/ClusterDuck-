import User from '../models/User.js';
import Thought from '../models/Thought.js';
const cleanDB = async (): Promise<void> => {
  try {
    console.log('HELP, database NEEDS cleaning');
    await User.deleteMany({});
    await Thought.deleteMany({});
    console.log('YAY! The database is cleaned');
  } catch (err) {
    console.error('There are ERRORS with cleaning database:', err);
    process.exit(1);
  }
};
export default cleanDB;