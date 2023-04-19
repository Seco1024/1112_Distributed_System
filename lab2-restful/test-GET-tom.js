const client = require('node-fetch');

(async () => {
    const resp = await client('http://localhost:3000/hogRider/tm', {
        method: 'GET'
    });

    const data = await resp.json();
    console.log(data);
})();