import { executeQuery } from './connection';

export function selectAllDisasters(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM disasters';
    executeQuery(sql, [])
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function selectAllStructures(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Structures';
    executeQuery(sql, [])
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function selectAllVictims(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM Victims';
    executeQuery(sql, [])
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function selectAllActionItems(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM ActionItems';
    executeQuery(sql, [])
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
