import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "./atoms";
import "./DarkLightMode.css"

const WrapHeader = styled.header`
  padding: 20px;
  background-color: grey;
`;

const Div = styled.div` {
  display: flex;
  width: 100vw;
}
`;

const InnerDiv = styled.div`
  display: flex;
  width: 85%;
`;

const Img = styled.img` {
  width: 10%;
}
`;

const Title = styled.h1` {
  display: flex;
  padding: 20px 10px;
  font-size: 20px;
  align-item: center;
  justify-content: center;
}
`;

const LightingMode = styled.div`
  display: flex;
  align-self: center;
`;

const Button = styled.button`
  background-color: grey;
  border: none;
`;

function Header() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggledDarkAtom = () => setDarkAtom(prev => !prev)
  return (
    <WrapHeader>
      <Div>
        <InnerDiv>
          <Img src={`https://raw.githubusercontent.com/kubowania/portfolio-with-animations/main/images/react.png`} />
          <Title>CryptoCurrencies</Title>
        </InnerDiv>
        <LightingMode>
          <div className="container">
            <div className="daynight">
              <Button onClick={toggledDarkAtom}>
                <label className="container">
                  <div className="toggle">
                    <div className="cloud"></div>
                    <div className="star"></div>
                    <div className="sea"></div>
                    <div className="mountains"></div>
                  </div>
                </label>
              </Button>
            </div>
          </div>
        </LightingMode>
      </Div>
    </WrapHeader>
  );
}

export default Header;