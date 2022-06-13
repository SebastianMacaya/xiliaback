import mongoose from "mongoose";
const Schema = mongoose.Schema(
    {
        ticketId: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
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
        owner: {
            typeo: String,
            required: false
        }

    }

);

export const ticketModel = mongoose.model("Ticket", Schema);
