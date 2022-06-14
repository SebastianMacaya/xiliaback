import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        ticketId: {
            type: String,
            required: true,
        },
        owner: {
            typeo: String,
            required: false
        },
        date: {
            type: String,
            required: true
        },
        participants: {
            type: String,
            required: false
        }
        ,
        subject: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        priority: {
            type: String,
            required: true

        },
        lastChange: {
            type: String,
            required: true
        },
        client: {
            type: String,
            required: true
        }

    }

);

export const ticketModel = mongoose.model("Ticket", Schema);
