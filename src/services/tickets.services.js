import Services from "./all.services.js";
class TicketServices extends Services {
    constructor(model) {
        super(model);
    }

    getTickets = async () => await this.getAll()
    getTicketById = async (id) => await this.getById(id)
    createTicket = async (item) => await this.createDocument(item)
    deleteTicketById = async (id) => await this.deleteById(id)
    updateTicketById = async (id, ticket) => {
        const { owner, date, type, participants, subject, status, priority, lastChange, client, detalle } = ticket
        try {
            await this.model.findByIdAndUpdate(id, {
                owner,
                date,
                type,
                participants,
                subject,
                status,
                priority,
                lastChange,
                client,
                $push: { detalle: detalle }

            })
            const updated = await this.model.findById(id);
            return updated
        }
        catch (error) { console.log(error) }
    }
}

export default TicketServices;