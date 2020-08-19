// AJAX requisição assicrono realizada para o backend
// Requisitada para o servidor em precisa atualizar a página
/*
var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://api.github.com/users/RosyProgramming');
xhr.send(null);

xhr.onreadystatechange = function() {
    if (xhr.readyState === 4){
        console.log(JSON.parse(xhr.responseText));
    }
}
*/

//Aprendendo sobre as promises
/*
var minhaPromise = function() {
    return new Promise(function(resolve, reject)  {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/RosyProgramming');
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject('Erro na requisição');
                }
            }
        }
    });
}

 minhaPromise()
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });
*/

// Aprendendo axios 
axios.get('https://api.github.com/users/RosyProgramming')
.then(function(response) {
    console.log(response);
})
.catch(function(error) {
    console.warn(error);
});