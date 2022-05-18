import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";
import { isDarkAtom } from "../atoms";
import { useRecoilValue } from "recoil";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface ChartProps {
  coinId: string;
}


function Chart({ coinId }:ChartProps) {
  const isDark = useRecoilValue(isDarkAtom);

  const {isLoading, data} = useQuery<IHistorical[]>(["ohlcv", coinId], () => fetchCoinHistory(coinId),
  {
    refetchInterval: 10000,
  });
  console.log(data);
  return (
  <div>
    {isLoading? (
      "Loading Chart..." 
      ) : (
    <ApexChart
      type="line"
      series={[
        {    
          name: "sales",
          data: data?.map(price => Math.floor(price.close)) as number[]
        },
      ]}
      options = {{
        theme: {
          mode: isDark? "dark" : "light"
        },
        chart: {
          height: 300,
          width: 500,
          toolbar: {
            show: false
          },
          background: "transparent"
        },
        grid: {
          show: true
        },
        stroke: {
          curve: "smooth",
          width: 2,
        },
        xaxis: {
          categories: data?.map(price => price.time_close.slice(5, 10)), 
        },
        fill: {
          type: "gradient",
          gradient: {gradientToColors: ["#0be881"]},
        },
        colors: ["#0fbcf9"]
      }}

      />
    )}
  </div>
  );
}

export default Chart;

