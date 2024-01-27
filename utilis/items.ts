/* eslint-disable @typescript-eslint/no-var-requires */
const fruit_0 = require("../assets/money_saving.webp");
const fruit_1 = require("../assets/invest_in.webp");
const fruit_2 = require("../assets/track_investments.webp");

export const fruitItems = [fruit_0, fruit_2, fruit_1];

export const ImageItems = [
  {
    image: require("../assets/save.webp"),
    title: "Save your money like never before",
    desc: "Get investment suggestions as a beginer and multiple your capital",
  },
  {
    image: require("../assets/invest-teal.webp"),
    title: "Invest in high return mutual fund and smallcases",
    desc: "Get the top performing mutual funds and customized smallcases to cater your goals",
  },
  {
    image: require("../assets/track_teal.webp"),
    title: "Track your investments in a single click",
    desc: "Get the real time value all your stocks, mutual funds and smallcases at single place",
  },
];

export const preferenceList = [
  "Equity",
  "Mutual fund",
  "Commodities",
  "F&O",
  "Intraday",
  "Curriencies",
  "Smallcases",
];
