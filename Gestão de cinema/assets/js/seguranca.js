let token = localStorage.getItem("token") // pega o token armazenado no localStorage


if(token === undefined || token === null) { //verifica se o token esta ausente, se o usuario não ta autenticado
    Swal.fire({ //exibe um alerta de que a página é restrita
        title: "Erro!",
        text: "Essa Página é restrita!",
        icon: "error"
    }).then(() => {
        window.location.href = "login.html"; //volta para a pagina de login
    });
}





