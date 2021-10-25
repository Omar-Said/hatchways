import React from "react";
import * as Styles from "./Container.styles";

interface ContainerProps {
  color?: string;
}

const Container: React.FC<ContainerProps> = ({ color = "white", children }) => {
  return <Styles.Root color={color}>{children}</Styles.Root>;
};

export default Container;
