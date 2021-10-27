import * as Styles from "./SearchBar.styles";

interface TagSearchBar {
  onSearchTerm: (value: string) => void;
}

export default function TagSearchBar({ onSearchTerm }: TagSearchBar) {
  return (
    <Styles.Input
      onChange={(e) => onSearchTerm(e.target.value)}
      placeholder="Search by tag"
      type="text"
    />
  );
}
