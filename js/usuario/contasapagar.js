var tipos = 
      [  { "Id": "Fabio", "label": "10", "matricula": "OK"}, 
         { "Id": "Murillo", "label": "20", "matricula": "OK"},
         { "Id": "Gustavo", "label": "30", "matricula": "OK"}, ];

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
      +"<br><strong>Nome:</strong> "+item.Id+"<br><strong>Mensalidade:</strong> "+item.matricula+"<br>";
   }
}