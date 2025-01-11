var addButton = document.getElementById("add-button");

addButton.addEventListener("click", addItem);

var sellUsdTransactions = [];
var buyUsdTransactions = [];



function addItem() {
  var lbpAmount = document.getElementById("lbp-amount").value;
  var usdAmount = document.getElementById("usd-amount").value; //value of input 
  var transactionType = document.getElementById("transaction-type").value;
  

  var exchangeRate = lbpAmount / usdAmount;


  if (transactionType === "usd-to-lbp") {
    sellUsdTransactions.push({ lbpAmount, usdAmount, exchangeRate });
  } else if (transactionType === "lbp-to-usd") {
    buyUsdTransactions.push({ lbpAmount, usdAmount, exchangeRate });
  }

  document.getElementById("lbp-amount").value = "";
  document.getElementById("usd-amount").value = "";


  updateRates();


}

function updateRates() {
    // Get the span elements
  var buyUsdRateSpan = document.getElementById("buy-usd-rate");
  var sellUsdRateSpan = document.getElementById("sell-usd-rate");

   // Calculate the average exchange rate for buying USD (LBP to USD)
  // reduce mtl for loop bt5ales calculation la kl array
  //.innerhtml aam n8ayer ltext laal website
   if (buyUsdTransactions.length > 0) {
    const totalBuyRate = buyUsdTransactions.reduce((sum, transaction) => sum + transaction.exchangeRate, 0);
    const avgBuyRate = (totalBuyRate / buyUsdTransactions.length).toFixed(2); // Round to 2 decimal places
    buyUsdRateSpan.innerHTML = `${avgBuyRate} LBP/USD`;
  } else {
    buyUsdRateSpan.innerHTML = "No transactions available";
  }


  // Calculate the average exchange rate for selling USD (USD to LBP)
  if (sellUsdTransactions.length > 0) {
    const totalSellRate = sellUsdTransactions.reduce((sum, transaction) => sum + transaction.exchangeRate, 0);
    const avgSellRate = (totalSellRate / sellUsdTransactions.length).toFixed(2); // Round to 2 decimal places
    sellUsdRateSpan.innerHTML = `${avgSellRate} LBP/USD`;
  } else {
    sellUsdRateSpan.innerHTML = "No transactions available";
  }



}
