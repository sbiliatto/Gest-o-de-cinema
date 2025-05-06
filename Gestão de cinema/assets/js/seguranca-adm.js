let token = localStorage.getItem("token");
let tipo = localStorage.getItem("tipo");

if (token === undefined || token === null) {
    Swal.fire({
        title: "Erro!",
        text: "Essa Página é restrita!",
        icon: "error"
    }).then(() => {
        localStorage.clear(); // Limpa tudo
        window.location.href = "login.html";
    });
} else {
    if (tipo !== "adm") {
        Swal.fire({
            title: "Erro!",
            text: "Essa Página é restrita ao ADM!",
            icon: "error"
        }).then(() => {
            localStorage.clear(); // Limpa tudo
            window.location.href = "login.html";
        });
    }
}
