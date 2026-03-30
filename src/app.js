import express from "express";

const  app = express();

const port = 3000;


//-------------------EJ02----------------------//
app.get('/', (req,res) => {
res.send("bienvenidos al tp04")
})

app.get('/hora', (req,res) => {
const horaAhora = new Date();
res.send(horaAhora.toLocaleTimeString())
})

app.get('/fecha-completa', (req,res) => {
const fechaAhora = new Date();
const Semana = fechaAhora.toLocaleDateString('es-AR', { weekday: 'long' });
const mes = fechaAhora.toLocaleDateString('es-AR', { month: 'long' });

res.send(`${Semana} ${fechaAhora.getDate()} de ${mes} de ${fechaAhora.getFullYear()}, ${fechaAhora.toLocaleTimeString()}`)
})

app.listen(port,() => {
    console.log(`Listening on http://localhost:${port}`)
})

export default app