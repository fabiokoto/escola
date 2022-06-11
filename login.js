function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        alert('Você está logado');
        location.href = "home.html";
    }else if(login == "aluno" && senha == "aluno"){
        alert ('Você está logado');
        location.href = "aluno.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}