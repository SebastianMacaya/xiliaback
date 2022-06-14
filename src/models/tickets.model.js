import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        owner: {
            type: String,
            required: true
        },
        ticketId: {
            type: String,
            required: true,
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
            required: false
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
            required: false
        }

    }

);

export const ticketModel = mongoose.model("Ticket", Schema);
