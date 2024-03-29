import { useEffect, useState } from "react";
import { Student } from "../../types/Students";
import { HomeProps } from ".";

// Components
import StudentCard from "./StudentCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import TagSearchBar from "../../components/TagSearchBar/TagSearchBar";
import Container from "../../components/Container";

// Styles
import * as Styles from "./Home.styles";
import Typography from "../../components/Typography";

export default function Home({
  handleGetStudents,
  loading,
  students,
}: HomeProps) {
  useEffect(() => {
    handleGetStudents();
  }, [handleGetStudents]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchTag, setSearchTag] = useState("");

  const handleSearchTerm = (value: string) => {
    setSearchTerm(value);
  };

  const handleSearchTagTerm = (value: string) => {
    setSearchTag(value);
  };

  if (!loading && !students) {
    return <p>"Error occured"</p>;
  }

  // Filter students by search term
  const filteredStudents = students?.filter((student) => {
    if (searchTag.length && !searchTerm.length) {
      return student.tags?.some((tag) =>
        tag.term.toLowerCase().trim().includes(searchTag.toLowerCase().trim())
      );
    }

    if (searchTerm.length && !searchTag.length) {
      return (
        student.firstName
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim()) ||
        student.lastName
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim())
      );
    }

    if (searchTerm.length && searchTag.length) {
      return (
        student.tags?.some((tag) =>
          tag.term.toLowerCase().trim().includes(searchTag.toLowerCase().trim())
        ) &&
        (student.firstName
          .toLowerCase()
          .trim()
          .includes(searchTerm.toLowerCase().trim()) ||
          student.lastName
            .toLowerCase()
            .trim()
            .includes(searchTerm.toLowerCase().trim()))
      );
    }

    return true;
  });

  return (
    <Container color="#fff">
      <SearchBar onSearchTerm={handleSearchTerm} />
      <TagSearchBar onSearchTerm={handleSearchTagTerm} />
      <Styles.Card>
        {loading ? (
          "loading"
        ) : filteredStudents?.length ? (
          filteredStudents?.map((student: Student, index) => (
            <StudentCard key={index} student={student}></StudentCard>
          ))
        ) : (
          <Styles.Grid>
            <Typography textAlignCenter>No Results</Typography>
          </Styles.Grid>
        )}
      </Styles.Card>
    </Container>
  );
}
