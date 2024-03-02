import React, { ReactNode } from "react";
import Header from "../global/Header";
import styled from "styled-components";
type AppProps = {
  children: ReactNode;
};

const AppLayout: React.FC<AppProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Contents>{children}</Contents>
    </>
  );
};
const Contents = styled.div`
  padding: 100px 16px;
  min-height: 100vh;
`;
export default AppLayout;
