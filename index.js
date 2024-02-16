function createJSON() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    var usuario = {
        nome: nome,
        email: email,
        senha: senha,
    }

    usuario = JSON.stringify(usuario, null, 2)

    var blob = new Blob([usuario], { type: 'application/json' });

    var url = URL.createObjectURL(blob);
    var link = document.createElement('a');
    link.href = url;

    link.download = 'user.json';
    document.body.appendChild(link);

    link.click();
    console.log(usuario);
}