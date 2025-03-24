let token = localStorage.getItem("token") // pega o token armazenado no localStorage
let tipo = localStorage.getItem("tipo")

if(token === undefined || token === null) { //verifica se o token esta ausente, se o usuario não ta autenticado
    Swal.fire({ //exibe um alerta de que a página é restrita
        title: "Erro!",
        text: "Essa Página é restrita!",
        icon: "error"
    }).then(() => {
        window.location.href = "login.html"; //volta para a pagina de login
    });
} else {

    if (tipo !== "adm") {
        Swal.fire({ //exibe um alerta de que a página é restrita
            title: "Erro!",
            text: "Essa Página é restrita ao ADM!",
            icon: "error"
        }).then(() => {
            window.location.href = "login.html"; //volta para a pagina de login
        });
    }

}