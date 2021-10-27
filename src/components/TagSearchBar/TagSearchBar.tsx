import * as Styles from "../SearchBar/SearchBar.styles";
import { TagSearchBarProps } from "./TagSearchBar.types";

export default function TagSearchBar({ onSearchTerm }: TagSearchBarProps) {
  return (
    <Styles.Input
      onChange={(e) => onSearchTerm(e.target.value)}
      placeholder="Search by tag"
      type="text"
    />
  );
}
