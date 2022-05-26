import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoin } from "../api";
import CoinInfoInner from "../components/CoinInfoInner";

const Container = styled.div``;

const CoinsList = styled.div``;

const Coin = styled.tr`
  color: ${(props) => props.theme.textColor};
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
    display: block;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const CoinInfo = styled.td`
  padding: auto;
  text-align: left;
  border-bottom: 0.5px solid silver;
  &:hover {
    background-color: #f5f6fa;
  }
`;

const TableCol = styled.th` 
  width: 100vw;
  padding: 20px;
  text-align: left;
  border-bottom: 0.5px solid silver;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 25px;
  height: 3 5px;
  margin-right: 10px;
`;

const TitleBackground = styled.div`
  display: flex;
  background-color: ${props => props.theme.subBgColor};
  flex-direction: row;
  width: 100vw;
  height: 35vh;
  font-size: 25px;
  font-weight: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
`;


//making response very fast
interface CoinInterface {
  id: string,
  name: string,
  symbol: string,
  rank: number,
  is_new: boolean,
  is_active: boolean,
  type: string,
}

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

interface ICoinsProps { }

function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoin);

  return (
    <Container>
      <TitleBackground>
        <h2>Simple price, Simple chart for Cryptocurrencies</h2>
      </TitleBackground>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          <thead>
            <tr>
              <TableCol>Name</TableCol>
              <TableCol>Last Price</TableCol>
              <TableCol>24h</TableCol>
              <TableCol>7d</TableCol>
              <TableCol>Volume</TableCol>
              <TableCol>MartketCap</TableCol>
            </tr>
          </thead>
          <tbody>
            {data?.slice(0, 10).map(coin =>
              <Coin key={coin.id}>
                <CoinInfo>
                  <Link to={coin.id}>
                    <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                    {coin.name}
                  </Link>
                </CoinInfo>
                <CoinInfo>
                  <CoinInfoInner coinId={`${coin.id}`} reqName="price" />
                </CoinInfo>
                <CoinInfo>
                  <CoinInfoInner coinId={`${coin.id}`} reqName="oneDay" />
                </CoinInfo>
                <CoinInfo>
                  <CoinInfoInner coinId={`${coin.id}`} reqName="sevenDays" />
                </CoinInfo>
                <CoinInfo>
                  <CoinInfoInner coinId={`${coin.id}`} reqName="volume" />
                </CoinInfo>
                <CoinInfo>
                  <CoinInfoInner coinId={`${coin.id}`} reqName="market_cap" />
                </CoinInfo>

              </Coin>
            )}
          </tbody>
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;