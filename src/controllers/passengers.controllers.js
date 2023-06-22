import { getPassengersTravelsServices } from "../services/passengers.services.js";

export async function getPassengersTravels(req, res) {
    try {
        const { page, name } = req.query;

        const resposta = await getPassengersTravelsServices(page,name);
        if (resposta === null) {
            return res.status(400).send("Invalid page value");
        }
        const passengers = resposta.rows;

        if (passengers.length > 100) {
            return res.status(500).send("Too many results");
        }

        res.status(200).send(passengers);

    } catch (err) {
        res.status(500).send(err.message);
    }
}