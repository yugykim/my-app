import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import Change from "./Change";


interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
  oneDay: string;
  sevenDays: string;
  price: string;
  chart: string;
}

interface ChartProps {
  coinId: string;
  reqName: keyof IHistorical;
}

export const CoinInfoInner: React.FC<ChartProps> = ({ coinId, reqName }) => {
  const { data } = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId));
  
  let result:number | undefined;
  let stringResult: string | undefined;
  if (reqName === "price") {
    result = Number((data?.[13]?.open)?.toFixed(2));
    stringResult = "$" + result;
  } else if (reqName === "oneDay") {
    result = Number((((Number(data?.[13]?.open) - Number(data?.[13]?.close)) / (Number(data?.[13]?.open))) * 100).toFixed(2));
    stringResult = result + "%";
  } else if (reqName === "sevenDays") {
    result = Number((((Number(data?.[13]?.close) - Number(data?.[7]?.close)) / (Number(data?.[7]?.close))) * 100).toFixed(2));
    stringResult = result + "%";
  } else if (reqName === "volume") {
    result = Number(data?.[13].volume);
    stringResult = result.toString();
  } else if (reqName === "market_cap") {
    result = Number(data?.[13].market_cap);
    stringResult = result.toString();
  }

  let priceOrNot: boolean | undefined;
  if (reqName === "oneDay" || reqName === "sevenDays"){
    priceOrNot = true;
  } else {
    priceOrNot = false;
  }

  let plusOrNot: boolean | undefined;
  if (result !== undefined){
    plusOrNot = result > 0? true : false;
  } 

  return (
    <>
      {priceOrNot ? (<Change dataInfo={`${stringResult}`} plusOrNot={plusOrNot} />) : (<p>{ stringResult }</p> )}
    </>
  );
}

export default CoinInfoInner;
