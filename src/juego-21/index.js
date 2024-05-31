import { createDeck, tomarCarta, valorCarta, htmlCarta} from './use-cases/index'
  
     
     let types = ['C','D','H','S']
     let especials = ['A','J','Q','K']
     let puntosJugador = 0
     let puntosComputador = 0
     //referencias html
     const pararBtn = document.querySelector('#detenerBtn')
     const pedirBtn = document.querySelector('#pedirBtn')
     const nuevoBtn = document.querySelector('#nuevoBtn')
     const puntajeHtml = document.querySelectorAll('small')
     const divCartasJugador = document.querySelector('#Jugador__cartas')
     const divCartasComputador = document.querySelector('#computador__cartas')
     const mensajeFinal = document.querySelector('#mensajeFinal')
 
 
     let deck = createDeck(types, especials)
     
     
     const valor = valorCarta(tomarCarta(deck))
     console.log(valor)
 
     //turno de computadora
     const turnoCompu =(valorminimo)=>{
         do {
         const carta = tomarCarta(deck)   
         puntosComputador = puntosComputador + valorCarta(carta)
         puntajeHtml[1].innerText = puntosComputador
         
     
         
         //img de las cartas
         const cartaImg = htmlCarta(carta)
         divCartasComputador.append(cartaImg)
         
     
 
         } while ((valorminimo>puntosComputador)&& valorminimo<=21);

         // mensaje de ganar,perder o empate
         let mensaje = ''
     if(valorminimo===puntosComputador){
     mensaje = 'nadie gana'
     }else if((valorminimo>puntosComputador)&&(valorminimo<=21)){
         mensaje = 'Jugador gana'
     }else if((puntosComputador>valorminimo)&&(puntosComputador<=21)){
         mensaje = 'Computador gana'
     }else if(puntosComputador>21){
         mensaje = 'Jugador gana'
     }else if(valorminimo>21){
         mensaje = 'Computador gana'
 
     }
     
     const msj = document.createElement('h1')
     msj.append(mensaje)
     console.log(msj)
     mensajeFinal.append(msj)
     }
 
 
 
 
 
 
 
 
 
     //eventos
 
     pedirBtn.addEventListener('click',()=>{
         const carta = tomarCarta(deck)
         console.log(carta)
         puntosJugador = puntosJugador + valorCarta(carta)
         console.log(puntosJugador)
 
         puntajeHtml[0].innerText = puntosJugador
 
         //crear carta 
         const cartaImg = htmlCarta(carta)
         divCartasJugador.append(cartaImg)
 
         //si se pasa de 21
         if(puntosJugador>21){
             turnoCompu(puntosJugador)
         
             pedirBtn.disabled=true
             pararBtn.disabled=true
         } else if(puntosJugador===21){
             console.warn('21 genial')
             pedirBtn.disabled=true
             pararBtn.disabled=true
             turnoCompu(puntosJugador)
         }
 
         
         
         
     })
     pararBtn.addEventListener('click',()=>{
         pedirBtn.disabled=true
         turnoCompu(puntosJugador)
         pararBtn.disabled=true
     })
 
     nuevoBtn.addEventListener('click',()=>{
         console.clear()
         deck =[]
         deck = createDeck(types, especials)
         puntajeHtml[0].innerText=0
         puntajeHtml[1].innerText=0
         divCartasJugador.innerHTML= ''
         divCartasComputador.innerHTML= ''
         puntosComputador = 0
         puntosJugador = 0
         pararBtn.disabled=false
         pedirBtn.disabled=false
         mensajeFinal.innerText=''
 })
