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

    // API pública para crear datos (utilizando reqres.in para simular la creación)
    postRequestButton.addEventListener('click', () => {
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'John Doe', job: 'Developer' })
        })
            .then(response => response.json())
            .then(data => {
                responseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
            })
            .catch(error => {
                responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });

    // API pública para actualizar datos (utilizando reqres.in para simular la actualización)
    putRequestButton.addEventListener('click', () => {
        fetch('https://reqres.in/api/users/2', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: 'John Doe', job: 'Senior Developer' })
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
