import React from "react";
import * as Styles from "./Tags.styles";

interface TypographyProps {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
  capitalize?: boolean;
}

const Typography: React.FC<TypographyProps> = ({ children }) => {
  return <Styles.Root>{children}</Styles.Root>;
};

export default Typography;
