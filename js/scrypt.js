


// ---------------output inserimento nome età--------------------

buttonGenerate.addEventListener('click', function() {
let inputNome = document.getElementById('in_one');
let outputNome = inputNome.value;

document.getElementById('nome_Out').innerHTML = outputNome;
console.log('output bottoneNome', outputNome);

let inputKm = document.getElementById('in_km');
let outKm = inputKm.value;
let numChilometri = outKm

console.log('output outKm', outKm);
console.log('km visualizzata dentro variabile', numChilometri);

// --------------------------------------
let inEta = document.getElementById('in_eta');
let outEta = inEta.value

let eta = outEta; 

console.log('eta visualizzata outEta', outEta);
console.log('eta visualizzata dentro variabile', eta);

// let numChilometri = 50;

const saleYung = 0.2;
const saleOld = 0.4;
const priceForKm = 0.21;

let price = numChilometri * priceForKm;

let priceFinal = 0;

if (eta < 18) {
  priceFinal = (price - (price * saleYung))
}

  else if (eta > 65) {
  priceFinal = (price - (price * saleOld))
}

else priceFinal = price
  
// ----------------------------------------------------
console.log('prezzofinale', priceFinal + '€')

// rispondono uguali?
// console.log('entrata uno querysel', document.querySelector('#in_one'))

document.getElementById(in_one)
// console.log('antrata uno getelement', in_one)
// ...sembra di si

let nome = in_one.value;

// document.getElementById(in_one)

console.log('nome', nome);
})

// ---------------output km da percorrere--------------------




// ---------------output fascia sconto--------------------






// ---------------output genera annulla--------------------