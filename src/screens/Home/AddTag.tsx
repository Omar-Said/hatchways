import * as Styles from "./AddTag.styles";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/actions";

interface AddTag {
  studentId: number;
}

export default function AddTag({ studentId }: AddTag) {
  const dispatch = useDispatch();

  const handleSubmit = (e: any, id: number) => {
    e.preventDefault();
    let payload = {
      term: e.target[0].value,
      id: id,
    };
    console.log(payload);
    dispatch(addTag(payload));
    e.target.reset();
  };

  return (
    <Styles.Form onSubmit={(e) => handleSubmit(e, studentId)}>
      <Styles.Input placeholder="Add a tag" type="text" />
    </Styles.Form>
  );
}
