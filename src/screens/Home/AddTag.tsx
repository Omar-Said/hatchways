import * as Styles from "./AddTag.styles";

interface AddTagProps {
  onTagCreation: (value: string) => void;
}

export default function AddTag({ onTagCreation }: AddTagProps) {
  return (
    <Styles.Input
      onChange={(e) => onTagCreation(e.target.value)}
      placeholder="Add a tag"
      type="text"
    />
  );
}
