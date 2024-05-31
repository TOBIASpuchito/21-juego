 export const htmlCarta = (carta)=>{
    const cartaImg = document.createElement('img')
         cartaImg.src=`/assets/cartas/${carta}.png`
         cartaImg.className="carta__img"
         return cartaImg
 }
 // esta funcion crea un elemento tipo imagen en el div de html 