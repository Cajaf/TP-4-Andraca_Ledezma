
import express from "express";
import obtenerHoraActual from "./src/time.js";
const app = express();
const port = 3000;
app.get('/', (req, res) => {
    const hora = obtenerHoraActual();
    res.send(`Hora actual: ${hora}`);
});
app.listen(port, () => { // Inicio el servidor WEB (escucha
console.log(`Listening on http://localhost:${port}`)
})