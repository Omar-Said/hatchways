import * as Styles from "./AddTag.styles";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/actions";
import { useState } from "react";

interface AddTag {
  studentId: number;
}

export default function AddTag({ studentId }: AddTag) {
  const [tag, setTag] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let payload = {
      term: tag,
      id: studentId,
    };
    dispatch(addTag(payload));
    setTag("");
  };

  return (
    <Styles.TagForm onSubmit={(e) => handleSubmit(e)}>
      <Styles.TagInput
        name="tagInput"
        value={tag}
        placeholder="Add a tag"
        type="text"
        onChange={(e) => {
          setTag(e.target.value);
        }}
      />
    </Styles.TagForm>
  );
}
