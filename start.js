// GET REQUEST

function getTodos(){
    console.log('GET Request');
}
document.getElement
ById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodos);
document.getElementById('update').addEventListener('click', updateTodos);
document.getElementById('delete').addEventListener('click', removeTodos);
document.getElementById('sim').addEventListener('click', getTodos);
document.getElementById('headers').addEventListener('click', customHeaders);

document.getElementById('transform').addEventListener('click', transformerResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);