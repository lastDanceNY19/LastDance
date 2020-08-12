const { Pool } = require('pg');

const myURI = 'postgres://ocabvaom:x4Yyu54Esj_hRdMflhbACql_6rwp6MUM@isilo.db.elephantsql.com:5432/ocabvaom';
const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: myURI
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};