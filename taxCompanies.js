var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];



function calculateSalesTax(salesData, taxRates) {
  var data = {};

  for(var i = 0; i < salesData.length; i++) {

  var companyName = salesData[i]["name"];
  var companyProvince = salesData[i]["province"];
  var companySales = sum(salesData[i]["sales"]);

  if (!data[companyName]) {
    data[companyName] = {
      totalTax: taxRates[companyProvince] * companySales,
      totalSales: companySales
    };
  } else {
    data[companyName]["totalTax"] += taxRates[companyProvince] * companySales;
    data[companyName]["totalSales"] += companySales;
  }
}
  return data;

}
function sum(arr){
  var total = 0;

  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }

  return total;
}
  // Implement your code here
var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/