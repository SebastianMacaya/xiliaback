import Services from "./all.services.js";
class TicketServices extends Services {
    constructor(model) {
        super(model);
    }

    getTickets = async () => await this.getAll()
    getTicketById = async (id) => await this.getById(id)
    createTicket = async (item) => await this.createDocument(item)
    deleteTicketById = async (id) => await this.deleteById(id)
    updateTicketById = async (id, item) => {
        const { date, name, subject, status, priority, lastChange, owner } = ticket
        try {
            await this.model.findByIdAndUpdate(id, {
                date,
                name,
                subject,
                status,
                priority,
                lastChange,
                owner,
            });
            const updated = await this.model.findById(id)
            return updated
        }
        catch (error) { console.log(error) }
    }
}

export default TicketServices;