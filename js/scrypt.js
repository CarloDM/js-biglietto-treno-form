


// ---------------output inserimento nome età--------------------

buttonGenerate.addEventListener('click', function() {
let inputNome = document.getElementById('in_one');
let outputNome = inputNome.value;

document.getElementById('nome_Out').innerHTML =  inputNome.value;
console.log('output bottoneNome', outputNome);

document.getElementById('tiket-name').innerHTML = outputNome;


// ---------------output inserimento km--------------------

let inputKm = document.getElementById('in_km');
let outKm = inputKm.value;
let numChilometri = outKm

console.log('output outKm', outKm);
console.log('km visualizzata dentro variabile', numChilometri);

// ---------------output inserimento  età--------------------
let inEta = document.getElementById('in_eta');
let outEta = inEta.value
let eta = outEta; 

console.log('eta visualizzata outEta', outEta);
console.log('eta visualizzata dentro variabile', eta);


// -----------calcola biglietto---------------------
// let eta = 18;
// let numChilometri = 50;
const saleYung = 0.2;
const saleOld = 0.4;
const priceForKm = 0.21;
let price = numChilometri * priceForKm;
console.log('prezzo grezzo', price)
let priceFinal = 0;

document.getElementById('tiket-type').innerHTML = 'tariffa standard';

if (eta < 18) {
  priceFinal = (price - (price * saleYung));
  document.getElementById('tiket-type').innerHTML = 'sconto giovani';
}
  else if (eta > 65) {
  priceFinal = (price - (price * saleOld))
  document.getElementById('tiket-type').innerHTML = 'sconto mobilità';
}
else priceFinal = price;

console.log('prezzofinale', priceFinal.toFixed(2) + '€')

document.getElementById('tiket-price').innerHTML =  priceFinal.toFixed(2) + ' €';
// ----------------------------------------------------

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