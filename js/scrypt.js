let eta = 15
let numChilometri = 50;
const saleYung = 0.2;
const saleOld = 0.4;

let priceForKm = 0.21;

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
console.log('entrata uno querysel', document.querySelector('#in_one'))

document.getElementById(in_one)
console.log('antrata uno getelement', in_one)
// ...sembra di si

let nome = in_one.value;

// document.getElementById(in_one)

console.log('nome', nome);

// ---------------output inserimento nome--------------------

bottonNome.addEventListener('click', function() {
let input = document.getElementById('in_one');
let output = input.value;

  document.getElementById('nome_Out').innerHTML = output;
  console.log('output bottone nome', output);
})

// ---------------output km da percorrere--------------------




// ---------------output fascia sconto--------------------






// ---------------output genera annulla--------------------