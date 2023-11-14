const newApiData = 'Updated API Data';

function getApiData() {
    axios.get('http://localhost:3000/api/data')
        .then(response => {
            document.getElementById('output').innerText = response.data.data;
        })
        .catch(error => {
            console.error('Error fetching API data:', error);
        });
}

function updateApiData() {
    axios.post('http://localhost:3000/api/data', { data: newApiData })
        .then(response => {
            document.getElementById('output').innerText = response.data.message;
        })
        .catch(error => {
            console.error('Error updating API data:', error);
        });
}
