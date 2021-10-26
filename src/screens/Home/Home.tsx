import React, { useEffect, useState } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";
import Container from "../../components/Container";

import * as Styles from "./Home.styles";
import StudentCard from "./StudentCard";
import SearchBar from "./SearchBar";
import TagSearchBar from "./TagSearchBar";

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

  const filteredStudents = students?.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
