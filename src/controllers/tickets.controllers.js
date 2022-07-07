import TicketServices from "../services/tickets.services.js";
import { ticketModel } from "../models/tickets.model.js";
import dayjs from "dayjs";
const ticketServices = new TicketServices(ticketModel);

export const getTickets = async (req, res) => {
    const { id } = req.params;
    if (id) {
        const ticket = await ticketServices.getTicketById(id);
        if (ticket) {
            res.status(200).send({ ticket });
        } else {
            res.send("el ticket que busco no existe");
        }
    } else {
        try {
            const tickets = await ticketServices.getTickets();
            res.status(200).send(tickets);
        } catch (error) {
            console.log(error);
        }
    }
};

export const saveTicket = async (req, res) => {
    try {
        const newTicket = req.body;
        const date = dayjs()
        newTicket.date = (date.format("MMM DDdd,YYYY - H:MMa"))
        newTicket.lastChange = new Date();
        newTicket.status = "En progreso";
        newTicket.ticketId = (Object.keys(await ticketServices.getTickets()).length)
        const ticket = await ticketServices.createTicket(newTicket);
        res.redirect('http://localhost:3000/nuevoticket')
    } catch (error) {
        console.log(error);
    }
};

export const deleteTicket = async (req, res) => {
    const ticketId = req.params.id;
    try {
        const borrado = await ticketServices.deleteTicketById({ _id: ticketId });
        if (borrado) {
            res.status(200).send({ borrado });
        } else {
            res.send("el Ticket no existe");
        }
    } catch (error) {
        console.log(error);
    }
};

export const updateTicket = async (req, res) => {
    const idOldTicket = req.params.id;
    const ticketNuevo = req.body;

    try {

        const modificado = await ticketServices.updateTicketById(
            idOldTicket,
            ticketNuevo
        );
        res.status(200).send(modificado);
    } catch (error) {
        console.log(error);
    }
};

