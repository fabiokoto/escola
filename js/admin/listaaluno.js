
const root = document.getElementById('root')

const pessoas = [
  {id: 10, name: 'Fabio', sobrenome: 'Makoto'},
  {id: 20, name: 'Murillo', sobrenome: 'Viebrantz'},
  {id: 30, name: 'Gustavo', sobrenome: 'Soarez'}
]
function buscar(){
const tableBody = pessoas.map((pessoa) => {
  return `<tr>
    <td>${pessoa.id}</td>
    <td>${pessoa.name}</td>
    <td>${pessoa.sobrenome}</td>
  </tr>`
}).join('')

const table = `<table>
  <tr>
    <td>Id</td>
    <td>Nome</td>
    <td>Sobrenome</td>
  </tr>
  ${tableBody}
</table>`;

root.insertAdjacentHTML('beforeend', table)
}