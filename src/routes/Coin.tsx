import { useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchCoinInfo, fetchCoinTickers } from "../api";
import Chart from "./Chart";

const Container = styled.div`
  
`;

const InnerContaine = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;    
`;

const TableTitle = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.textColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: ${props => props.theme.subBgColor};
   padding: 10px 20px;
   border-radius: 10px;
 `;
const OverviewItem = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   span:first-child {
     font-size: 10px;
     font-weight: 400;
     text-transform: uppercase;
     margin-bottom: 5px;
   }
 `;
const Description = styled.p`
   margin: 20px 0px;
 `;

const NavTitle = styled.div`
 display: flex;
 align-items: center;
 background-color: #f5f6fa;
 height: 10vh;
 width: 100vw;
`;

const Logo = styled.div`
 display: flex;
 align-items: center;
 padding: 13px;
 background-color: ${props => props.theme.subBgColor};
 margin-left: 10px;
 cursor: pointer;
`;

const SmallLogo = styled.div`
 padding: 15px;
 background-color: #2f3640;
`;

const H1 = styled.h1`
 font-size: 30px;
 color: #2f3640;
 margin-left: 50px;
`;

interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  links: object;
  links_extended: object;
  whitepaper: object;
  first_data_at: string;
  last_data_at: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: any;
}

interface ICoinsProps { }

function Coin({ }: ICoinsProps) {
  const { coinId } = useParams();
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(`${coinId}`)
  );
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(`${coinId}`),
    {
      refetchInterval: 10000,
    }
  );

  console.log(infoData);
  const loading = infoLoading || tickersLoading;

  return (
    <Container>
      <NavTitle>
        <Link to="/">
          <Logo>
            <SmallLogo></SmallLogo>
          </Logo>
        </Link>
        <H1>Cryptocurrencies</H1>
      </NavTitle>
      <InnerContaine>
      <TableTitle>
        <Title>
          {infoData?.name}
        </Title>
      </TableTitle>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price:</span>
              <span>${tickersData?.quotes.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Chart coinId={`${coinId}`} />
        </>
      )}
      </InnerContaine>
    </Container>
  );
}

export default Coin;
