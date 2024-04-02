import { executeQuery } from './connection';

export function addNewDisasters(
  disasterType: string,
  location: string,
  dateTime: string,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql =
      'INSERT INTO Disasters (disaster_type, location, date_time) VALUES (?, ?, ?)';
    const values = [disasterType, location, dateTime];
    executeQuery(sql, values)
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function addNewStructures(
  disasterId: number,
  structureType: string,
  damageExtent: string,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO Structures (disaster_id, structure_type, damage_extent) VALUES (?, ?, ?)`;
    const values = [disasterId, structureType, damageExtent];
    executeQuery(sql, values)
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function addNewVictims(
  disasterId: number,
  numberInjured: number,
  numberDeceased: number,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO Victims (disaster_id, number_injured, number_deceased) VALUES (?, ?, ?)`;
    const values = [disasterId, numberInjured, numberDeceased];
    executeQuery(sql, values)
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function addNewActionItems(
  disasterId: number,
  actionItem: string,
  status: string,
): Promise<any[]> {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO ActionItems (disaster_id, action_item, status) VALUES (?, ?, ?)`;
    const values = [disasterId, actionItem, status];
    executeQuery(sql, values)
      .then((rows: any[]) => {
        resolve(rows);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
