

async function loadDashboard() {

    try {

        const response = await fetch("http://localhost:5000/api/tickets");

        const tickets = await response.json();

        document.getElementById("totalTickets").innerText = tickets.length;

        const open = tickets.filter(ticket => ticket.status === "Open").length;
        const pending = tickets.filter(ticket => ticket.status === "Pending").length;
        const resolved = tickets.filter(ticket => ticket.status === "Resolved").length;

        document.getElementById("openTickets").innerText = open;
        document.getElementById("pendingTickets").innerText = pending;
        document.getElementById("resolvedTickets").innerText = resolved;

        // const recentTable = document.getElementById("recentTickets");

        // recentTable.innerHTML = "";

        // tickets.slice(-3).reverse().forEach((ticket, index) => {

        //     recentTable.innerHTML += `
        //         <tr>
        //             <td>${tickets.length - index}</td>
        //             <td>${ticket.title}</td>
        //             <td>${ticket.status}</td>
        //             <td>${ticket.priority}</td>
        //         </tr>
        //     `;

        // });
        const recentTable = document.getElementById("recentTickets");

recentTable.innerHTML = "";

tickets.slice().reverse().forEach((ticket, index) => {

    recentTable.innerHTML += `
        <tr>
            <td>${index + 1}</td>
            <td>${ticket.title}</td>
            <td>${ticket.status}</td>
            <td>${ticket.priority}</td>
        </tr>
    `;

});

    } catch (error) {

        console.log(error);

    }

}

const user = JSON.parse(localStorage.getItem("user"));

if (user) {
    document.getElementById("welcome").innerText =
        `Welcome ${user.name} 👋`;
}

loadDashboard();
