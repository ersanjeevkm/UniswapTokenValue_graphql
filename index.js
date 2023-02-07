const prompt = require("prompt-sync")({ sigint: true });
const axios = require("axios");
const uniswapURL = "https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2";

const main = async () => {
  try {
    console.log(
      "Enter token names for which you want values for (, seperated)"
    );
    var tokens = prompt();

    var query = `
    {
      tokens(where:{symbol_in: [${tokens}]}) {
        id
        name
        derivedETH
        symbol
      }
    }
    `;

    await axios.post(uniswapURL, { query: query }).then((result) => {
      console.log(result.data.data);
    });
  } catch (err) {
    console.log(err);
  }
};

main();
