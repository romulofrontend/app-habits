//Documentação de referência
// https://maykbrito.github.io/libs/NLWSetup/documentation/NLWSetup.html

//Criar variavel pra armazenar o form
const form = document.querySelector("#form-habits")

//Usando construtor pra criar variavel inicializar biblioteca
const nlwSetup = new NLWSetup(form)

//Criar variavel pra armazenar o botão
const buttonRegistrar = document.querySelector("header button")
//Escutando esse botão - Ao clicar dispara a função add() pra incluir o dia de hoje
buttonRegistrar.addEventListener("click", add)

//Função a ser disparada pós clique no botão
function add() {
  //const today = | Criar variável pra armazenar o dia de hoje
  //new Date() | Método disponível no browser que retorna a data de hoje
  //.toLocaleDateString("pt-br") | Transforma o dado para String e com a data no formato Brasil
  //slice(0,5) | fatio essa informação pegando do indice 0 até a indice que ele não quer mais pegar
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)

  //Usando a biblioteca vamos inserir today no form
  nlwSetup.addDay(today)
}

//Criar variável pra armazenar objeto data
//Objeto contém arrays referentes a cada hábito
//De acordo com a doc da biblioteca, declarar as datas que aparecem checked (formato mm-dd)
/*const data = {
  run: ["01-01", "01-07", "01-08"],

  water: [
    "01-01",
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06",
    "01-07",
    "01-08",
  ],

  gym: ["01-02", "01-04", "01-06"],

  sleep: ["01-01", "01-02", "01-03", "01-04", "01-05", "01-08"],

  pets: [
    "01-01",
    "01-02",
    "01-03",
    "01-04",
    "01-05",
    "01-06",
    "01-07",
    "01-08",
  ],

  food: ["01-02", "01-03", "01-04", "01-05", "01-06", "01-07"],
}*/

//com o objeto declarado acima, inserimos esses dados no form atraves da função .setData(data)
nlwSetup.setData(data)

//Após ter inserido os dados no form, agora lemos e renderizamos o form
nlwSetup.load()
