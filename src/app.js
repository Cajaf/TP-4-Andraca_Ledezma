import express from "express";

const  app = express();

const port = 3000;

//-------------------EJ01----------------------//
app.get('/horatime', (req, res) => {
  const ahora = new Date();
  
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
    
    res.send(`Hora actual: ${horas}:${minutos}:${segundos}`);
});
//-------------------EJ02----------------------//
app.get('/', (req,res) => {
res.send("bienvenidos al tp04")
})

app.get('/hora', (req,res) => {
    const fechaAhora = new Date();
res.send(fechaAhora.toLocaleTimeString())
})

app.get('/fecha-completa', (req,res) => {
const fechaAhora = new Date();
const Semana = fechaAhora.toLocaleDateString('es-AR', { weekday: 'long' });
const mes = fechaAhora.toLocaleDateString('es-AR', { month: 'long' });

res.send(`${Semana} ${fechaAhora.getDate()} de ${mes} de ${fechaAhora.getFullYear()}, ${fechaAhora.toLocaleTimeString()}`)
})

app.use((req, res) => {
 res.status(404).send(` 404 - Ruta no encontrada. Parece que te perdiste. Acá tenés un gato para ayudarte: 
       <img src="https://http.cat/status/404.jpg" alt="Error 404 Cat" width="500"> `);})
app.listen(port, () => { 
console.log(`Listening on http://localhost:${port}`)
})



export default app