document.getElementById('getRequest').addEventListener('click', () => {
    fetch('http://localhost:3000/api/resource')
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        });
});

document.getElementById('postRequest').addEventListener('click', () => {
    fetch('http://localhost:3000/api/resource', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: 'value' })
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        });
});

document.getElementById('putRequest').addEventListener('click', () => {
    fetch('http://localhost:3000/api/resource', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ key: 'new value' })
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        });
});