import React from "react";
import * as Styles from "./Typography.styles";

interface TypographyProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
}

const Typography: React.FC<TypographyProps> = ({
  color = "#b0b0b0",
  fontSize = 1,
  fontWeight = 300,
  children,
}) => {
  return (
    <Styles.Root color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Styles.Root>
  );
};

export default Typography;
