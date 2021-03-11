const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/App-Pokemon'));

app.get('/*', (req,res) => {
    res.sendFile(__dirname + '/dist/api-pokemon/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado com sucesso na porta ' + PORT);
})