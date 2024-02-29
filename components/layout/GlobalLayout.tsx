import React, { ReactNode } from "react";
import styled from "styled-components";
import BackLayout from "./BackLayout";
type GlobalProps = {
  children: ReactNode;
};

const GlobalLayout: React.FC<GlobalProps> = ({ children }) => {
  return (
    <div id="wrap">
      {children}
      <BackLayout />
    </div>
  );
};
export default GlobalLayout;
