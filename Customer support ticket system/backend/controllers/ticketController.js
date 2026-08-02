const Ticket = require("../models/Ticket");

const createTicket = async (req, res) => {

    try {

        const { title, category, priority, description } = req.body;

        const ticket = await Ticket.create({
            title,
            category,
            priority,
            description
        });

        res.status(201).json({
            message: "Ticket Created Successfully",
            ticket
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getTickets = async (req, res) => {

    try {

        const tickets = await Ticket.find();

        res.status(200).json(tickets);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

const getTicketById = async (req, res) => {

    try {

        const ticket = await Ticket.findById(req.params.id);

        res.json(ticket);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

module.exports = { createTicket, getTickets , getTicketById };