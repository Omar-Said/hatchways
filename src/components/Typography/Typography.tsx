import React from "react";
import * as Styles from "./Typography.styles";

interface TypographyProps {
  color?: string;
}

const Container: React.FC<TypographyProps> = ({
  color = "white",
  children,
}) => {
  return <Styles.Root color={color}>{children}</Styles.Root>;
};

export default Container;
