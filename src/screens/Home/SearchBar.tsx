import * as Styles from "./SearchBar.styles";

interface SearchBarProps {
  onSearchTerm: (value: string) => void;
}

export default function SearchBar({ onSearchTerm }: SearchBarProps) {
  return (
    <Styles.Input
      onChange={(e) => onSearchTerm(e.target.value)}
      placeholder="Search Name Here"
      type="text"
    />
  );
}
