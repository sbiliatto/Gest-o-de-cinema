let token = localStorage.getItem("token")

// Verifica se NÃO POSSUI um token
if(token === undefined || token === null) {
    alert("Essa Página é restrita");
    

    // Manda para a pagina de login
    window.location.href = "login.html"
}