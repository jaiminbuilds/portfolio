import dotenv from "dotenv";
dotenv.config();

const zerion_api = process.env.ZERION_API;
console.log(zerion_api);
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    authorization: zerion_api,
  },
};

fetch(
  "https://api.zerion.io/v1/wallets/address/portfolio?currency=usd",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
