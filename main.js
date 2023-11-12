// AXIOS GLOBALS
axios.default.headers.common['x-Aurh-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'

// GET REQUEST
function getTodos() {
    axios
        .get('https://jsonplaceholder.typicode.com/todos')
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// POST REQUEST
function addTodos() {
    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
    axios
        .put('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'New Todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
    axios
        .delete('https://jsonplaceholder.typicode.com/todos/1', {
            title: 'New Todo',
            completed: false
        })
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// SIMULITATIONS DATA
function getData() {
    axios.all([
        axios.get('https://jsonplaceholder.typicode.com/todos?_limlit=5'),
        axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])
        .then(axios.spread((todos, posts) => showOutput(posts)))
        .catch(err => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'sometoken'
        }
    }

    axios
        .post('https://jsonplaceholder.typicode.com/todos', {
            title: 'New Todo',
            completed: false
        }, config)
        .then(res => showOutput(res))
        .catch(err => console.log(err));
}

// TRANSFORMER REQUESTS & RESPONSE
function transformerResponse() {
    const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
        title: 'Hello World'
    },
    transformerResponse: axios.defaults.transformerResponse.concat(data => {
        data.title = data.title.toUpperCase();
        return data;
    })
    }
}

// ERROR HANDLING
function errorHandling() {
    axios.get('https://jsonplaceholder.typicode.com/todoss')
    .then(res => showOutput(res))
    .catch(err => {
        if(error.response){
        console.logg(err.response.data);
        console.logg(err.response.status);
        console.logg(err.response.headers);

        if(err.response.status === 404){
        alert('Error: Page Not Found');
        }
        }else if(err.length){
            console.log(err.request);
        }else{
            console.log(err.message);
        }
    });
}

// CANCEL TOKEN
function cancelToken() {
    const source = axios.CancelToken.source();

    axios.get('https://jsonplaceholder.typicode.com/todoss', {
        cancelToken: source.token
    })
    .then(res => showOutput(res))
    .catch(thrown => {
        if(axios.isCancel(thrown)){
         console.log('Request canceled', thrown.message);
        }
    });
    if(true){
        source.cancel('Request camceled');
    }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
 config => {
    console.log(
        `${config.method.toUpperCase()} request sent to ${
            config.url
        }at ${new Date().getTime()}`
    );
    return config;
 },
 error => {
    return Promise.reject(error);
 }   
);

// AXIOS INSTANCE
const axiosInstance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com'
});
axiosInstance.get('/comments').then(res => showoutput(res));
