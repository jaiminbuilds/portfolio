import * as dotenv from 'dotenv';
dotenv.config();
import { CovalentClient } from "@covalenthq/client-sdk";

const covalent_api = process.env.COVALENT_API;

if (!covalent_api) {
    console.error("Covalent API key is not set in the environment variables.");
    process.exit(1);
}

const ApiServices = async () => {
    try {
        const client = new CovalentClient(covalent_api);
        // Assuming you have a valid wallet address to pass as an argument
        const walletAddress = '0x89d9Dd2e85ecC305E276f51BB21fd4C708Be9487'
        const resp = await client.BalanceService.getTokenBalancesForWalletAddress("eth-mainnet", walletAddress);
        console.log(resp.data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

ApiServices();
