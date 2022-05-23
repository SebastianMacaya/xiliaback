const { Router } = require("express");
const router = Router();
const Users = require("../../users");
const Tickets = require("../../tickets");

//Routes users
router.get("/api/users", Users.getAll);
router.get("/api/users/:id", Users.findById);
router.put("/api/users/:id", Users.updateById);
router.delete("/api/users/:id", Users.deleteById);
router.post("/api/users", Users.create);

//Routes tickets
router.get("/api/tickets", Tickets.getAll);
router.get("/api/tickets/:id", Tickets.findById);
router.put("/api/tickets/:id", Tickets.updateById);
router.delete("/api/tickets/:id", Tickets.deleteById);
router.post("/api/tickets", Tickets.create);




module.exports = router;
