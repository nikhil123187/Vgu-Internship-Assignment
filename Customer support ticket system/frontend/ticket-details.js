async function loadTicket() {

    const id = localStorage.getItem("ticketId");

    const response = await fetch(`http://localhost:5000/api/tickets/${id}`);

    const ticket = await response.json();

    document.getElementById("ticketId").innerText = "Ticket";

    document.getElementById("title").innerText = ticket.title;

    document.getElementById("category").innerText = ticket.category;

    document.getElementById("priority").innerText = ticket.priority;

    document.getElementById("status").innerText = ticket.status;

    document.getElementById("description").innerText = ticket.description;

}

loadTicket();