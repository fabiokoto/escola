var tipos = 
      [  { "Id": "Fabio", "label": "10", "faltapor": "nenhuma", "faltamat": "nenhuma", "faltaing": "4.nenhuma", "faltacomp": "2 - Faltas"}, 
         { "Id": "Murillo", "label": "20", "faltapor": "nenhuma", "faltamat": "nenhuma", "faltaing": "nenhuma", "faltacomp": "nenhuma"},
         { "Id": "Gustavo", "label": "30", "faltapor": "1 - Falta", "faltamat": "1 - Falta", "faltaing": "1 - Falta", "faltacomp": "nenhuma"}, ];

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
      +"<br><strong>Nome:</strong> "+item.Id+"<br><strong>Portugues:</strong> "+item.faltapor+"<br><strong>Matematica:</strong> "+item.faltamat+"<br><strong>Ingles:</strong> "+item.faltaing+"<br><strong>Computação:</strong> "+item.faltacomp+"<br>";
   }
}