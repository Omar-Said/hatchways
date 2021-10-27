import React from "react";
import * as Styles from "./Tags.styles";
import { TagProps } from "./Tags.types";

const Tags: React.FC<TagProps> = ({ title, children }) => {
  return <Styles.Root title={title}>{children}</Styles.Root>;
};

export default Tags;
