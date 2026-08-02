async function loadTickets() {

    try {

        const response = await fetch("http://localhost:5000/api/tickets");

        const tickets = await response.json();

        const table = document.getElementById("ticketTable");

        table.innerHTML = "";

        // tickets.forEach((ticket, index) => {

        //     table.innerHTML += `
        //         <tr>
        //             <td>${index + 1}</td>
        //             <td>${ticket.title}</td>
        //             <td>${ticket.category}</td>
        //             <td>${ticket.priority}</td>
        //             <td>${ticket.status}</td>
        //         </tr>
        //     `;

        // });
        tickets.forEach((ticket, index) => {

    table.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${ticket.title}</td>
            <td>${ticket.category}</td>
            <td>${ticket.priority}</td>
            <td>${ticket.status}</td>
            <td>
    <button onclick="viewTicket('${ticket._id}')">

            View
                </button>
            </td>
        </tr>
    `;

});

    } catch (error) {

        alert("Unable to Load Tickets");

    }

}

loadTickets();

function viewTicket(id){

    localStorage.setItem("ticketId", id);

    window.location.href = "ticket-details.html";

}