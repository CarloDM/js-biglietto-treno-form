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
  
  
console.log('prezzofinale', priceFinal + '€')



