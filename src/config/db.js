// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config();
// }
require('dotenv').config();

const mysql = require('mysql2');
const util = require('util');
const connectionString = process.env.DATABASE_URL;
const db = {};
db.exec = async (sql, values) => {
  const conn = mysql.createConnection(connectionString);
  const query = util.promisify(conn.query).bind(conn);
  try {
    const rows = await query(sql, values);
    return rows;
  } catch (e) {
    console.log(e);
    return [];
  } finally {
    conn.end();
  }
};

module.exports = db;
