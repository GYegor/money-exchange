// PLEASE DON'T change function name
module.exports = function makeExchange(currency){
    var purse = {};
  if (currency == 0) return purse;
  else if (currency > 10000) {
  purse.error = "You are rich, my friend! We don't have so much coins for exchange";
  return purse;} 
  else if (currency /50 >= 1) {
    purse.H = ~~(currency/50);
    currency = currency % 50;}
    if (currency/25 >= 1) {
    purse.Q = ~~(currency/25);
    currency = currency % 25;} 
    if (currency/10 >= 1) {
    purse.D = ~~(currency/10);
    currency = currency % 10;} 
    if (currency/5 >= 1) {
    purse.N = ~~(currency/5);
    currency = currency % 5;}
    if (currency >= 1) {
    purse.P = currency;
    }
    return purse;
  };
  
