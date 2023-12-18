const axios = require("axios");
const _ = require("lodash");

// Fetch LIFI_API from the environment variables
const lifi_api = process.env.LIFI_API;

const url = "https://li.quest/v1/tokens";

const headers = { accept: "application/json" };

axios
  .get(url, { headers: headers })
  .then((response) => {
    const tokens = response.data.tokens;
    console.log(Object.keys(tokens).length);

    let df = [];

    for (let chain_id in tokens) {
      console.log(chain_id);
      for (let token of tokens[chain_id]) {
        df.push(token);
      }
    }

    console.log(df);
  })
  .catch((error) => {
    console.error(error);
  });
