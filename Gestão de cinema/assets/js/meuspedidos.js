// Adicione este código nas páginas onde os filmes são exibidos
// Este exemplo mostra um botão em cada filme que, quando clicado, adiciona o filme às reservas

// Função para adicionar seletores de filme
document.addEventListener('DOMContentLoaded', function() {
    // Encontrar todos os elementos de filme (ajuste os seletores para corresponder à sua estrutura HTML)
    var filmes = document.querySelectorAll('.filme-item'); // Ajuste conforme sua estrutura HTML
    
    // Adicionar botão a cada filme
    filmes.forEach(function(filme) {
        // Obter título do filme
        var tituloFilme = filme.querySelector('.titulo-filme').textContent; // Ajuste conforme sua estrutura HTML
        
        // Criar botão de adicionar
        var btnAdicionar = document.createElement('button');
        btnAdicionar.className = 'btn-adicionar-reserva';
        btnAdicionar.textContent = 'Reservar';
        btnAdicionar.onclick = function() {
            adicionarReserva(tituloFilme);
        };
        
        // Adicionar botão ao filme
        filme.appendChild(btnAdicionar);
    });
});

// Função para adicionar reserva
function adicionarReserva(titulo) {
    var reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    
    // Verificar se filme já existe na lista
    var filmeExistente = reservas.some(function(reserva) {
        return reserva.titulo === titulo;
    });
    
    if (filmeExistente) {
        alert("Este filme já está na sua lista de reservas!");
        return;
    }
    
    // Criar nova reserva
    var dataReserva = new Date();
    var dataFormatada = dataReserva.toLocaleDateString('pt-BR');
    
    var novaReserva = {
        titulo: titulo,
        data: dataFormatada
    };
    
    reservas.push(novaReserva);
    localStorage.setItem("reservas", JSON.stringify(reservas));
    
    // Mostrar confirmação
    alert("Filme adicionado às suas reservas!");
}


// ----------------------------------------------------------------------------------------------------------------------------------------------



// Adicione este código na sua página de login
document.addEventListener('DOMContentLoaded', function() {
    // Encontrar o formulário de login
    var loginForm = document.getElementById('form-login'); // Ajuste o ID conforme necessário
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter valores do formulário
            var nome = document.getElementById('usuario').value; // Ajuste o ID conforme necessário
            var senha = document.getElementById('senha').value; // Ajuste o ID conforme necessário
            
            // Salvar nome no localStorage
            localStorage.setItem("nome", nome);
            
            // Aqui você pode fazer sua validação de login
            // Exemplo de validação simples:
            if (nome && senha) {
                // Redirecionar para a página após login
                window.location.href = "homePoslogin.html";
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});