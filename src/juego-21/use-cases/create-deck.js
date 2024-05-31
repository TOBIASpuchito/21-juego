import _ from 'underscore'
// funcion para crear deck
 export const createDeck = (types , especials)=> {
    let deck = []
    for(let i=2; i<=10; i++){
        for(let type of types){
            deck.push(i + type)
        }
    
    }
for(let type of types){
    for(let esp of especials){
        deck.push(esp+type)
    }
}
    

deck = _.shuffle(deck);
return deck
}




