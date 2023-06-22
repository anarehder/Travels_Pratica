import { getPassengersTravelsByNameDB, getPassengersTravelsDB } from "../repositories/passengers.repositories.js";

export async function getPassengersTravelsServices(page, name) {

    if ((isNaN(page) || page <= 0)&& page !== undefined) {
        return null;
    }
    console.log(name)
    const limit = 25;
    const offset = page ? Number(page) * limit : 0;
    if (!name) {
        return getPassengersTravelsDB(offset, limit);
    }
    if (name) {
        return getPassengersTravelsByNameDB(offset, limit, name);
    }
}