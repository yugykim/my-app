import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  bolderColor?: string;
}

const Contatiner = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border: 10px solid ${props => props.bolderColor};
  border-radius: 50%;
`;

interface CircleProps {
  bgColor: string;
  bolderColor?: string;
}

function Circle({ bgColor, bolderColor }: CircleProps) {
  const [value, setValue] = useState();
  return <Contatiner bgColor={bgColor} bolderColor= {bolderColor ?? "white"}/>;
}

export default Circle;

