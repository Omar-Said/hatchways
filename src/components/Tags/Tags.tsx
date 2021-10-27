import React from "react";
import * as Styles from "./Tags.styles";

interface TagProps {
  title: string;
}

const Tags: React.FC<TagProps> = ({ title, children }) => {
  return <Styles.Root title={title}>{children}</Styles.Root>;
};

export default Tags;
