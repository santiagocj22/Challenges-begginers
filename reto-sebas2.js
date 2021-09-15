//Tenemos un mercado volatil donde cada dia suben y bajan precios,
// este es un stock de precios y vamos a determinar que dia es mejor compar y vender;
const stockPrices = [ 150, 256, 635, 452, 143, 954, 332];
//usamos las funciones Math.max y Math.min para Extraer el mayor y el menor precio respectivamente;
const daySale = Math.max(...stockPrices);
const dayBuy = Math.min(...stockPrices);
//Ahora que ya tenemos ubicados el valor maximo y el valor minimo,
// procedemos a buscar los dias en que estan ubicados usando el metodo indexOf pasando como parametros la ubicacion del mayor precio y el menor precio,
//le sumamos el +1 ya que los arrays cuentan los objetos desde 0,
//asi determinamos que el dia 1 es el valor 0 de nuestro array
const locationBuy = stockPrices.indexOf(dayBuy) + 1;
const locationSale = stockPrices.indexOf(daySale) + 1;
//ahora tenemos ubicados el precio maximo, el minimo y en que dias fueron, ahora vamos a imprimir en consola el resultado. 
const stockBuySale = ["buy on day " + locationBuy, "sale on day " + locationSale];
console.log(stockBuySale);


  


