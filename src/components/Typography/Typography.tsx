import React from "react";
import * as Styles from "./Typography.styles";
import { TypographyProps } from "./Typography.types";

const Typography: React.FC<TypographyProps> = ({
  color = "#b0b0b0",
  fontSize = 1,
  fontWeight = 300,
  capitalize = false,
  children,
}) => {
  return (
    <Styles.Root
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      capitalize={capitalize}
    >
      {children}
    </Styles.Root>
  );
};

export default Typography;
