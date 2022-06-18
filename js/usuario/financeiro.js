function imagem(){
    var img = document.getElementById("img")
    var imagem = document.getElementById("imagem")
    if(img.style.display == "none") { //verifica se a imagem está sendo exibida, se não estiver vai executar os comandos abaixo e se tiver vai executar o else
      img.style.display="block" //exibe a imagem
      imagem.innerHTML = "CLIQUE DE NOVO" //altera o texto
    }
    else { //se a imagem estiver sendo exibida vai executar os comandos abaixo
      img.style.display="none"; //oculta a imagem
      imagem.innerHTML = "CLIQUE AQUI" //altera o texto
    }
}