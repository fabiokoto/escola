var tipos = 
      [  { "Id": "Fabio", "label": "10", "datapor": "Prova - 24/06/2022", "datamat": "Prova - 25/06/2022", "dataing": "Prova - 13/06/2022", "datacomp": "Prova - 14/06/2022"}, 
         { "Id": "Murillo", "label": "20", "datapor": "Prova - 24/06/2022", "datamat": "Prova - 25/06/2022", "dataing": "Prova - 13/06/2022", "datacomp": "Prova - 14/06/2022"},
         { "Id": "Gustavo", "label": "30", "datapor": "Prova - 24/06/2022", "datamat": "Prova - 25/06/2022", "dataing": "Prova - 13/06/2022", "datacomp": "Prova - 14/06/2022"}, ];

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
      +"<br><strong>Nome:</strong> "+item.Id+"<br><strong>Portugues:</strong> "+item.datapor+"<br><strong>Matematica:</strong> "+item.datamat+"<br><strong>Ingles:</strong> "+item.dataing+"<br><strong>Computação:</strong> "+item.datacomp+"<br>";
   }
}