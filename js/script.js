let costoTotale

const tariffa = 0.21;
const scontoVenti = 20/100;
const scontoQuaranta = 40/100


const button = document.querySelector('.btn-primary');
console.log(button);

button.addEventListener('click', function(){
    const name = document.getElementById('nameInput').value;
    const km = parseInt(document.getElementById('km').value);
   if(name === '' || typeof name === 'number'){
       alert('Devi inserire valori corretti')
       console.log(name);
       console.log(km);
   }else if(km === '' || isNaN(km)){
       alert('Devi inserire valori corretti')
       console.log(name);
       console.log(km);
   } else{
       console.log(name);
       console.log(km);
   }
})
// if(parseInt(km)){  
//  }else{
//      alert('Questo non è un kilometraggio valido, reinserire il valore')
//      window.location.reload()
// }


// if(parseInt(età)){  
// }else{
//     alert('Questo non è un valore valido, reinserire il valore corretto')
//     window.location.reload()
// }

// let costo = (km * tariffa);
// console.log(costo);

// if(età < 18){
//     costoTotale = costo - (costo * scontoVenti);

// }else if (età >= 65){
//     costoTotale = costo - (costo * scontoQuaranta);

// }else {
//     costoTotale = costo
// }

// document.getElementById('text').innerHTML = `
// ${costoTotale.toFixed(2)}
// `