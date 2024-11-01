import mysql from 'mysql2/promise';

let database_connection = null;
function set_connection() {
  if (database_connection != null)
    return database_connection;
  database_connection = mysql.createConnection({
    host: "blitz.cs.niu.edu",
    port: "3306",
    database: "csci467",
    user: "student",
    password: "student"
  });
  return database_connection;
}

export { set_connection as s };
//# sourceMappingURL=legacydb-C6Uji1Fu.js.map
