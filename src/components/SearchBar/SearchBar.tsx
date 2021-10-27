import * as Styles from "./SearchBar.styles";
import { SearchBarProps } from "./SearchBar.types";

export default function SearchBar({ onSearchTerm }: SearchBarProps) {
  return (
    <Styles.Input
      onChange={(e) => onSearchTerm(e.target.value)}
      placeholder="Search Name Here"
      type="text"
    />
  );
}
