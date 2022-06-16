function adicionar(){
    
    let text = document.getElementById("texto").value;
    let list = document.getElementById("listar").innerHTML;

    list += "<li>" +text+ "</li>"

    document.getElementById("listar").innerHTML = list;

    document.getElementById("texto").value = null;
}