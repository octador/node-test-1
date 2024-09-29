const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

// Middleware pour parser les données du formulaire
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/ma-page', (req, res) => {
    res.send('Page 2');
});

app.get('/mon-formulaire', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="fr">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Mon formulaire</title>
        </head>
        <form action="/traitement-formulaire" method="POST">
        <h1>Formulaire</h1>
        <div>
        <label for="texte">Texte :</label>
         </div>
        <input type="text" id="texte" name="texte" required>
        <div>
        <button type="submit">Soumettre</button>
        </div>
        </form>

        <body>
    `);
});

app.post('/traitement-formulaire', (req, res) => {
    try {
        const texte = req.body.texte;
        res.send(`Vous avez soumis : ${texte}
           <p
           <button onclick="window.location.href='/mon-formulaire'">Retour</button>
           </p>
           `);

    } catch (error) {
        console.error(error);
        res.status(500).send('Une erreur est survenue lors du traitement du formulaire.');
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
