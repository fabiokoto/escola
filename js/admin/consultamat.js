var tipos = 
      [  { "Id": "Fabio", "label": "10", "matricula": "22.153.876", "curso": "ADS"}, 
         { "Id": "Murillo", "label": "20", "matricula": "82.648.221", "curso": "ADS"},
         { "Id": "Gustavo", "label": "30", "matricula": "54.827.286", "curso": "ADS"}, ];

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
      +"<br><strong>Nome:</strong> "+item.Id+"<br><strong>Matricula:</strong> "+item.matricula+"<br><strong>Curso:</strong> "+item.curso+"<br>";
   }
}