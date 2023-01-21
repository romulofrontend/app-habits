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

//Escutando o form - caso haja mudança disparar a função save
form.addEventListener("change", save)

//Função a ser disparada pós clique no botão
function add() {
  //const today = | Criar variável pra armazenar o dia de hoje
  //new Date() | Método disponível no browser que retorna a data de hoje
  //.toLocaleDateString("pt-br") | Transforma o dado para String e com a data no formato Brasil
  //slice(0,5) | fatio essa informação pegando do indice 0 até a indice que ele não quer mais pegar
  const today = new Date().toLocaleDateString("pt-br").slice(0, 5)

  //Criar uma variável pra armazenar se a data já foi inserida
  const dayExists = nlwSetup.dayExists(today)

  //Condicional. Se o dia já existir exibe um alert infoamndo
  //Para a execução do código ali
  if (dayExists) {
    //Exibir um alert informando que esse dia já foi inserido
    alert("Essa data já foi inserida ❌")
    // Trava a execução do código e não permite inserir a data
    return
  }

  //Caso o dia ainda não tenha sido inserido
  //Usando a biblioteca vamos inserir today no form
  nlwSetup.addDay(today)
  //Exibir um alert informando que esse dia pode ser inserido
  alert("Data inserida com sucesso! ✔")
}

//Função a ser disparada caso haja mudança no form
function save() {
  //localStorage | Guardar os dados na memória local do browser
  //Assim, caso seja o browser seja reiniciado trará a informação que existia antes
  //.setItem('chave', transforma o json em string (dado pego pela biblioteca))
  //Assim esse dado fica setado no localStorage atraves da chave e o valor
  localStorage.setItem("romulofrontend", JSON.stringify(nlwSetup.data))
}

//const data = | Criar variável pra armazenar data
//JSON.parse() | Transforma novamente pra JSON aquilo que estiver como argumento
//localStorage | No localStorage
//getItem | vai pegar o item
//("romulofrontend") | que foi setado na chave definida
//Caso não tenha nada vai atribuir um objeto vazio, assim não dá erro
const data = JSON.parse(localStorage.getItem("romulofrontend")) || {}

//com o objeto declarado acima, inserimos esses dados no form atraves da função .setData(data)
nlwSetup.setData(data)

//Após ter inserido os dados no form, agora lemos e renderizamos o form
nlwSetup.load()
