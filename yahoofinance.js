import yahooFinance from "yahoo-finance";
import moment from "moment";

async function price(ticker, date) {
  let finalDate = date;
  if (date === undefined) {
    console.log("inside");
    const d = new Date();
    finalDate = moment(d).format("YYYY-MM-DD");
    // let myDate = moment(d).format("DD");
    // console.log(myDate - 1);
  }

  let x = await yahooFinance.historical({
    symbol: `${ticker}`,
    from: `${finalDate}`,
    // to: "2022-09-16",
    // period: 'd'  // 'd' (daily), 'w' (weekly), 'm' (monthly), 'v' (dividends only)
  });
  let tempObject = x[x.length - 1];
  let { close, open } = tempObject;
  let finalPriceChangePercentage = ((close - open) * 100) / open;

  console.log(finalPriceChangePercentage.toFixed(2));
  return (finalPriceChangePercentage.toFixed(2))
}

// price("7203.T", "2022-09-16");
console.log(price("7203.T"));

// console.log(x)
// console.log(x.length)
// const d = new Date();
// console.log("d", moment(d).format("YYYY-MM-DD"));
// console.log(x[0]);
// let y = x[0].date;
// console.log(y);
// console.log(moment(y).format("MM/DD/YYYY"));
// RELIANCE.NS
// TCS.NS
// CSCO

// i. Team A
// 1. CISCO Systems (Nasdaq - US)	CSCO => CSCO
// 2. Tata Consultancy (NSE - India)	TCS => TCS.NS
// 3. Reliance Industries (NSE - India)	RELIANCE => RELIANCE.NS
// 4. Saudi Arabian Oil Company (Saudi - Saudia Arabia)	=>  2222.SR
// 5. China Western Power Industrial Co., Ltd. (Shenzen - China) ii.=> 002630.SZ

// Team B
// 1. Banco do Brasil S.A. (Sao Paulo - Brazil)	BBAS3 => BBAS3.SA
// 2. Balfour Beatty plc (LSE - UK)	BBY => BBY.L
// 3. Zomato (NSE - India)	ZOMATO => ZOMATO.NS
// 4. Jiangsu Zhongchao Holding Co., Ltd. (Shenzen - China)	"002471" => 002471.SZ
// 5. Toyota Motor Corporation (Tokyo - Japan)	TM

// console.log(x)

// input = ticker

// abc.com/price=?ticker=CSCO&date=12-11-2022
