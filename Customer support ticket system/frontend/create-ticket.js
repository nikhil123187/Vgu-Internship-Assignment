const form = document.getElementById("ticketForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value;

    try {

        const response = await fetch("http://localhost:5000/api/tickets", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                title,
                category,
                priority,
                description
            })

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            window.location.href = "my-tickets.html";

        }

    } catch (error) {

        alert("Server Error");

    }

});