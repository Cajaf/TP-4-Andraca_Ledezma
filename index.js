import express from "express";
import obtenerHoraActual from "./src/time.js";
import app2 from "./src/app.js"
const app = express();
const port = 3000;
app.get('/horatime', (req, res) => {
    const hora = obtenerHoraActual();
    res.send(`Hora actual: ${hora}`);
});

app.use((req, res) => {
    // Definimos el estado 404 y enviamos el HTML con la imagen del gato
 res.status(404).send(` 404 - Ruta no encontrada. Parece que te perdiste. Acá tenés un gato para ayudarte: 
       <img src="https://http.cat/status/404.jpg" alt="Error 404 Cat" width="500"> `);})
app.listen(port, () => { // Inicio el servidor WEB (escucha
console.log(`Listening on http://localhost:${port}`)
})

