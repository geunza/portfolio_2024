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
const Contents = styled.div``;
export default AppLayout;
