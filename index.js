const userInfo = require("./information");
const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: `Hi, my name is ${userInfo.monNom} and I'm from ${userInfo.campus} 2023`,
    e: "oO",
    T: "U ",
  })
);
