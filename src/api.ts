const BASE_URL = `https://api.coinpaprika.com/v1`;

 export function fetchCoin() {
   return fetch(`${BASE_URL}/coins`).then((response) => response.json());
 }

 export function fetchCoinHistory(coinId: string) {
   return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
     response.json()
   );
 }

 export function fetchCoinTickers(coinId: string) {
   return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =>
     response.json()
   );
 }