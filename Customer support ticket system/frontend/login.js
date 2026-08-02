const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        const response = await fetch("http://localhost:5000/api/users/login", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                email,
                password
            })

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            if (data.user.role === "Customer") {
                localStorage.setItem("user", JSON.stringify(data.user));
                window.location.href = "dashboard.html";

            } else {

                window.location.href = "dashboard.html";

            }

        }

    } catch (error) {

        alert("Server Error");

    }

});