const client = require('node-fetch');

(async () => {
    const resp = await client('http://localhost:3000/hogRider', {
        method: 'POST',
        header: {
            'Content-Type':'application.json'
        },
        body: JSON.stringify({
            name:"Mary",
            age: 20,
            attack: 120,
            defense: 120
        })
    });

    const data = await resp.json();
    console.log(data);
})();