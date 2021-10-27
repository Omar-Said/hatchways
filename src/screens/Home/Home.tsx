import { useEffect, useState } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";

// Components
import StudentCard from "./StudentCard";
import SearchBar from "./SearchBar";
import TagSearchBar from "./TagSearchBar";
import Container from "../../components/Container";

// Styles
import * as Styles from "./Home.styles";

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

  // This function filters the students by first name, last name and tags
  const filteredStudents = students?.filter((student) => {
    if (searchTag.length && !searchTerm.length) {
      return student.tags?.some((tag) =>
        tag.term.toLowerCase().includes(searchTag.toLowerCase())
      );
    }

    if (searchTerm.length && !searchTag.length) {
      return (
        student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (searchTerm.length && searchTag.length) {
      return (
        student.tags?.some((tag) =>
          tag.term.toLowerCase().includes(searchTag.toLowerCase())
        ) &&
        (student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          student.lastName.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return true;
  });

  return (
    <Container color="#fff">
      <SearchBar onSearchTerm={handleSearchTerm} />
      <TagSearchBar onSearchTerm={handleSearchTagTerm} />
      <Styles.Card>
        {loading
          ? "loading"
          : filteredStudents?.map((student: Student, index) => (
              <StudentCard key={index} student={student}></StudentCard>
            ))}
      </Styles.Card>
    </Container>
  );
}
