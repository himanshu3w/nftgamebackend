import { r } from "../helpers/ResponseHelper.js";
// # PUBLIC API #01, TYPE : GET, Status : DONE,  URL : /
const rootAPI = (req, res) => {
  r.rest(res, true, "PlayVERSE STOCK API is Running FINE", {
    health: "PlayVERSE STOCK API is Running FINE",
    system_time: new Date().toString(),
  });
};
const info = (req, res) => {
  res.status(200).send({
    name: "Exchange Name",
    description:
      "An PlayVerse exchange description of at least 1000 characters in plain text",
    location: "Country Name",
    logo: "https://example.com/exchange-logo.png",
    website: "http://localhost:7000",
    twitter: "example",
    version: "1.0",
    capability: {
      markets: true,
      trades: true,
      ordersSnapshot: true,
      candles: false,
      ticker: false,
    },
  });
};

function getRandomArbitrary(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

// let x =getRandomArbitrary(-10,5);

const markets = (req, res) => {
  console.log(req.query)
  switch(req.query.stock) {
    case "CSCO":
      res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.CISCO",
      });
      // code block
      break;
    case "TCS":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.TATA CONSULTANCY",
      });
      // code block
      break;
    case "RELIANCE":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.RELIANCE INDUSTRIES",
      });
      // code block
      break;
    case "2222":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.SAUDI_ARABIAN_OIL_COMPANY(Saudi - Saudia Arabia)",
      });
      // code block
      break;
    case "002630":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.CHINA_WESTERN_POWER_INDUSTRIAL_CO_LTD",
      });
      // code block
      break;
    case "BBAS3":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.BANCO_DO_BRASIL_SA(Sao Paulo - Brazil)",
      });
      // code block
      break;
    case "BBY":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.BALFOUR_BEATTY_PLC(LSE - UK",
      });
      // code block
      break;
    case "ZOMATO":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.ZOMATO(NSE - India)",
      });
      // code block
      break;
    case "002471":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.JIANGSU_ZHONGCHAO_HOLDING_CO_LTD(Shenzen - China)",
      });
      // code block
      break;
    case "TM":
       res.status(200).send({
        "price": getRandomArbitrary(-10,10),
        "STOCK": "STOCK.TOYOTA_MOTOR_CORPORATION(Tokyo - Japan)",
      });
      // code block
      break;
  }

// Team A
// 1. CISCO Systems (Nasdaq - US)	CSCO
// 2. Tata Consultancy (NSE - India)	TCS
// 3. Reliance Industries (NSE - India)	RELIANCE
// 4. Saudi Arabian Oil Company (Saudi - Saudia Arabia)	2222
// 5. China Western Power Industrial Co., Ltd. (Shenzen - China) ii.	"002630"
	
// Team B	
// 1. Banco do Brasil S.A. (Sao Paulo - Brazil)	BBAS3
// 2. Balfour Beatty plc (LSE - UK)	BBY
// 3. Zomato (NSE - India)	ZOMATO
// 4. Jiangsu Zhongchao Holding Co., Ltd. (Shenzen - China)	"002471"
// 5. Toyota Motor Corporation (Tokyo - Japan)	TM

 
  
  
};

// # PUBLIC API #02, TYPE : GET, Status : DONE, URL : /health
const healthAPI = (req, res) => {
  r.rest(res, true, "API is Running Fine!", {
    health: "Running",
    system_time: new Date().toString(),
  });
};

export {
  rootAPI,
  info,
  markets,
  healthAPI,
};
