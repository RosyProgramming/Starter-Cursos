var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];
/*
var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];
*/

function renderTodos() {

    listElement.innerHTML = '' ; 
    // Executa os elementos do array: console.log(todo);
    for(todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        //Inserir o link para remover o todos ou  uma 'li' da lista
        var linkElement = document.createElement('a');

        linkElement.setAttribute('href','#');

        var pos = todos.indexOf(todo); // o indexOf busca a posição e retonar par ao todo
        linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

        var linkText = document.createTextNode('Excluir');
        
        linkElement.appendChild(linkText);

        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);

        listElement.appendChild(todoElement);

    }
}

renderTodos();

function addTodo(){
    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
}

buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(0, 1); //o método splice remove uma quantidade de itens do array dependo da posição que for passada   
    renderTodos(); // utilizado para renderizar a lista com os novos itens
    saveToStorage();
}

//função para salvar o que foi excluido 
function saveToStorage (){
    localStorage.setItem('list_todos', JSON.stringify(todos));

}