import React, { useEffect, useState } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";
import Container from "../../components/Container";

import * as Styles from "./Home.styles";
import StudentCard from "./StudentCard";
import SearchBar from "./SearchBar";

export default function Home({
  handleGetStudents,
  loading,
  students,
}: HomeProps) {
  useEffect(() => {
    handleGetStudents();
  }, [handleGetStudents]);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTerm = (value: string) => {
    setSearchTerm(value);
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
      <Styles.Card>
        {loading
          ? "loading"
          : filteredStudents?.map((student: Student) => (
              <StudentCard student={student}></StudentCard>
            ))}
      </Styles.Card>
    </Container>
  );
}
