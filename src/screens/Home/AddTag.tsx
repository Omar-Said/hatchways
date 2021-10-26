import * as Styles from "./AddTag.styles";
import { useDispatch } from "react-redux";
import { addTag } from "../../redux/actions";

export default function AddTag() {
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addTag(e.target[0].value));
    e.target.reset();
  };

  return (
    <Styles.Form onSubmit={(e) => handleSubmit(e)}>
      <Styles.Input placeholder="Add a tag" type="text" />
    </Styles.Form>
  );
}
