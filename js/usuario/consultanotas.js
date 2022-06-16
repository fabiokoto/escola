var tipos = 
      [  { "Id": "Fabio", "label": "10", "notapor": "6.0", "notamat": "6.5", "notaing": "4.0", "notacomp": "8.0"}, 
         { "Id": "Murillo", "label": "20", "notapor": "6.5", "notamat": "5.0", "notaing": "5.0", "notacomp": "8.0"},
         { "Id": "Gustavo", "label": "30", "notapor": "5.0", "notamat": "6.0", "notaing": "4.0", "notacomp": "8.0"}, ];

function buscar(){
   var texto = document.body.querySelector("#texto").value;
   
   // converte em array e elimina espaços indesejados nas bordas
   // e converte para minúsculo, pare evitar o case sensitive
   var texto_array = texto.split(",").map(function(i){
      return i.trim().toLowerCase();
   });
   
   var resultado = tipos.filter(function(e){
      return ~texto_array.indexOf(e.label.toLowerCase());
   });
   
   // imprimir numa div
   var res = document.body.querySelector("#resultado");
   res.innerHTML = '';
   for(var item of resultado){
      res.innerHTML += "<strong>ID:</strong> "+item.label
      +"<br><strong>Nome:</strong> "+item.Id+"<br><strong>Portugues:</strong> "+item.notapor+"<br><strong>Matematica:</strong> "+item.notamat+"<br><strong>Ingles:</strong> "+item.notaing+"<br><strong>Computação:</strong> "+item.notacomp+"<br>";
   }
}