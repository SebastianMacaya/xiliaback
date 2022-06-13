import { Router } from "express";
const router = Router();
import Users from "../../users.js";

import { ticketControllers } from "../controllers/index.js"

//Routes users
router.get("/api/users", Users.getAll);
router.get("/api/users/:id", Users.findById);
router.put("/api/users/:id", Users.updateById);
router.delete("/api/users/:id", Users.deleteById);
router.post("/api/users", Users.create);



//Mongo db test
router
    .get("/api/tickets/:id?", ticketControllers.getTickets)
    .post("/api/tickets", ticketControllers.saveTicket)
    .delete("/api/tickets/:id", ticketControllers.deleteTicket)
    .put("/api/tickets/:id", ticketControllers.updateTicket);

export default router;
