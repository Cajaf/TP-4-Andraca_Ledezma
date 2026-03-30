export const obtenerHoraActual = () => {
  const ahora = new Date();
  
  let horas = ahora.getHours();
  let minutos = ahora.getMinutes();
  let segundos = ahora.getSeconds();
    
    return `${horas}:${minutos}:${segundos}`;
};
export default obtenerHoraActual;