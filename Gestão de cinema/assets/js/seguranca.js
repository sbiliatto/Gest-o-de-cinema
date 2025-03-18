let token = localStorage.getItem("token")

// Verifica se NÃO POSSUI um token
if(token === undefined || token === null) {
    Swal.fire({
        title: "Erro!",
        text: "Essa Página é restrita!",
        icon: "error"
    }).then(() => {
        window.location.href = "login.html";
    });
}