import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoin } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  width: 100vw;
  margin: 0 auto;  
  background-color: white;  
`;

const Header = styled.header`
  display: flex;
  justify-content: left;
  align-items: center;
`;

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
    border-bottom: 0.5px solid silver;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const CoinInfo = styled.td`
`;

const TableCol = styled.th` 
  width: 100vw;
  padding: 20px;
  text-align: left;
  border-bottom: 0.5px solid silver;
`;


const Title = styled.h1`
  font-size: 20px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 3 5px;
  margin-right: 10px;
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

interface ICoinsProps { }

function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoin);
  return (
    <Container>
      <Header>
        <Title>Cryptocurrencies</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          <thead>
            <tr>
              <TableCol>Name</TableCol>
              <TableCol>Price</TableCol>
              <TableCol>Change</TableCol>
              <TableCol>%Change</TableCol>
            </tr>
          </thead>
          <tbody>
            <td>
              {data?.slice(0, 100).map(coin =>
                <Coin key={coin.id}>
                  <CoinInfo>
                    <Link to={coin.id}>
                      <Img src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`} />
                      {coin.name} &rarr;
                    </Link>
                  </CoinInfo>
                </Coin>
              )}
            </td>
          </tbody>
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;