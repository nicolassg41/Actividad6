document.addEventListener('DOMContentLoaded', () => {
    const getRequestButton = document.getElementById('getRequest');
    const postRequestButton = document.getElementById('postRequest');
    const putRequestButton = document.getElementById('putRequest');
    const responseDiv = document.getElementById('response');

    // API pública para obtener datos
    getRequestButton.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                responseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });

    // API pública para crear datos (esta API no guarda los datos, pero simula la creación)
    postRequestButton.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
        })
            .then(response => response.json())
            .then(data => {
                responseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });

    // API pública para actualizar datos (esta API no guarda los datos, pero simula la actualización)
    putRequestButton.addEventListener('click', () => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: 1, title: 'foo', body: 'bar', userId: 1 })
        })
            .then(response => response.json())
            .then(data => {
                responseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });
});