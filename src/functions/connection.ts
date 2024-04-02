import * as sqlite3 from 'sqlite3';

export function executeQuery(sql: string, values: any[]): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const db = new sqlite3.Database(
      '../database/Natural_disasters.db',
      (err: Error | null) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log('Connected to the natural_disasters SQlite database.');

          db.all(sql, values, (err: Error | null, rows: any[]) => {
            if (err) {
              reject(err);
            } else {
              resolve(rows);
            }
          });

          db.close((err: Error | null) => {
            if (err) {
              console.error(err.message);
              reject(err);
            } else {
              console.log('Close the database connection.');
            }
          });
        }
      },
    );
  });
}
