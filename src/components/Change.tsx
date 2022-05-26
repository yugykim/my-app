import styled from "styled-components";

const MinusData = styled.h2`
color: red;
`;

const PlusData = styled.h2`
color: green;
`;

interface ChangeProp {
  dataInfo: string;
  plusOrNot: boolean | undefined;
}
export const Change: React.FC<ChangeProp> = ({ dataInfo, plusOrNot }) => {
  return (
    (plusOrNot ? (<PlusData>{ dataInfo }</PlusData>) : (<MinusData>{ dataInfo }</MinusData>))
  );
}

export default Change;