const axios = require('axios').default;

axios.post('http://localhost:3000/books', {
    ID: 3,
    name: 'My Boook',
    author: 'Me and only me'
})
    .then((res) => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err.response.data);
    });

axios.post('http://localhost:3000/books', {
    ID: 2,
    name: 'Os Lusiadas',
    author: 'Luis de Camoes'
})
    .then((result) => {
        console.log(result.data);
    })
    .catch(error => {
        console.log(error.response.data);
    });

axios.get('http://localhost:3000/books')
    .then((response) => {
        response.data.map((aux) => {
            axios.get('http://localhost:3000/books/' + aux.ID)
                .then((response) => {
                    console.log(response.data);
                });
        });
    });
    
axios.get('http://localhost:3000/log')
    .then((response) => {
        console.log(response.data);
    });