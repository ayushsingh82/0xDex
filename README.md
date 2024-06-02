# 0x Swap Task

Ankr Api to fetch last 24 hrs Uni token prize . You can change the address if you want to track any other token.
 
```
 import { AnkrProvider } from '@ankr.com/ankr.js';
 const provider = new AnkrProvider('https://rpc.ankr.com/multichain/7d47913bb91e53342197adaf63ee31b0dbc7c5dab2ecbb3588e48dbd36f3d47f');

 const getUniprices = async () => {
   try {
     const result = await provider.getTokenPriceHistory({
       blockchain: "eth",
       contractAddress: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
       //uni token
       fromTimestamp: 1667195581,
       interval: 86400, // 24h
       limit: 337
     });
     console.log(result);
   } catch (error) {
     console.log('Error fetching price history');
     throw error;
   }
};
 ```

