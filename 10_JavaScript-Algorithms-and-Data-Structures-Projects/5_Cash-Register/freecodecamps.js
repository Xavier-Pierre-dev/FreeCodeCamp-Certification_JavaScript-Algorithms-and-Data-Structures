/*
cid => cash in drawer
cash => money given for the payment
price => price
*/
function checkCashRegister(price, cash, cid) {
  // Js have some trouble for deal with float number
  // console.log(2.05 - 0.05) // => 1.9999999999999998
  // So we multpily each value by 100 for work with integer only
  const CurrencyUnit = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000],
  ];
  //console.log(CurrencyUnit);

  let needToReturn = Math.round(cash * 100 - price * 100);
  let cashOnHand = {};
  let cashToGive = {};

  // transform an array to a dict for dealing easier with the data
  cid.forEach((value, index) => {
    cashOnHand[value[0]] = Math.round(value[1] * 100);
  });

  console.log(needToReturn, CurrencyUnit[3]);

  for (let index = CurrencyUnit.length - 1; index >= 0; index--) {
    let CurrencyValue = CurrencyUnit[index][1];
    let CurrencyName = CurrencyUnit[index][0];

    if (needToReturn >= CurrencyValue) {
      cashToGive[CurrencyName] = 0;

      while (cashOnHand[CurrencyName] > 0 && needToReturn >= CurrencyValue) {
        cashOnHand[CurrencyName] -= CurrencyValue;
        cashToGive[CurrencyName] += CurrencyValue;
        needToReturn -= CurrencyValue;
      }
      console.log(cashToGive);
    }
  }

  let change = [];
  Object.keys(cashToGive).map((element) => {
    change.push([element, cashToGive[element] / 100]);
  });

  let totalCashOnHand = 0;
  Object.keys(cashOnHand).map((element) => {
    totalCashOnHand += cashOnHand[element];
  });

  if (needToReturn === 0) {
    if (totalCashOnHand === 0) {
      return { status: "CLOSED", change: cid };
    } else {
      return { status: "OPEN", change: change };
    }
  } else {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

}

checkCashRegister(19.5, 20, [
  ["PENNY", 0.6],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
