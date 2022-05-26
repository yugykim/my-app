import { createGlobalStyle, ThemeProvider } from "styled-components";
import Router from "./Router";
import { ReactQueryDevtools } from 'react-query/devtools'
import { HelmetProvider } from "react-helmet-async";
import { Helmet } from "react-helmet";
import { darkTheme, lightTheme } from "./theme";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "./atoms";
import styled from "styled-components";

const Globalstyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;1,200&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  `;

  const Header = styled.header`
  display: flex;
  height: 10vh;
  width: 100vh;
  flex-direction: column;
`;

const Title = styled.div`
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

function App() {
  const isDark = useRecoilValue(isDarkAtom);
  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>Coin Chart - cryptocurrency price, charts made by Yugi</title>
        </Helmet>
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <Globalstyle />
          <Header>
            <Title>
              <Logo>
                <SmallLogo></SmallLogo>
              </Logo>
              <H1>Cryptocurrencies</H1>
            </Title>
          </Header>
          <Router />
          <ReactQueryDevtools initialIsOpen={true} />
        </ThemeProvider>
      </>
    </HelmetProvider>
  );
}



export default App;
