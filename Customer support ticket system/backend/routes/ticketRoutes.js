const express = require("express");

const router = express.Router();

const { createTicket, getTickets, getTicketById } = require("../controllers/ticketController");

router.post("/", createTicket);

router.get("/", getTickets);
router.get("/:id", getTicketById);

module.exports = router;