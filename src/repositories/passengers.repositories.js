import connection from "../database/database.js"

export async function getPassengersTravelsDB(offset, limit) {
    return connection.query(`
        SELECT COUNT(*) AS travels, passengers."fullName" AS passenger
        FROM passenger_travels
        JOIN passengers ON passengers.id = passenger_travels."passengerId"
        GROUP BY passengers."fullName" 
        LIMIT $1
        OFFSET $2;
    `, [limit, offset])
}

export async function getPassengersTravelsByNameDB(offset, limit, name) {
    return connection.query(`
        SELECT COUNT(*) AS travels, passengers."fullName" AS passenger
        FROM passenger_travels
        JOIN passengers ON passengers.id = passenger_travels."passengerId"
        WHERE passengers."fullName" ILIKE $1
        GROUP BY passengers."fullName" 
        LIMIT $2
        OFFSET $3;
    `, [`%${name}%`, limit, offset])
}
// OUTRO MODO DE FAZER
/* if (name) {
    query += `
      WHERE p."fullName" ILIKE $1
    `;
    queryParams.push(`%${name}%`); // ILIKE
  } */

