// valor cada carta
export const valorCarta = (carta)=>{
 
    let valor = carta.substring(0,carta.length -1)   // esta funcion crea la variable valor y le agrega el valor 
    return (isNaN(valor))?                           // de la carta usando el valor de subsrting 0, -1
            (valor==='A')? 11:10
            :valor * 1
    }