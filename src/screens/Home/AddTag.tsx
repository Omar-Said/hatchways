import { useState } from "react";
import * as Styles from "./AddTag.styles";

export default function AddTag() {
  const [addTag, setAddTag] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setAddTag(e.target[0]?.value);
    e.target.reset();
  };

  return (
    <Styles.Form onSubmit={(e) => handleSubmit(e)}>
      <Styles.Input placeholder="Add a tag" type="text" />
    </Styles.Form>
  );
}
