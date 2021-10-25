import React, { useEffect } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";
import Container from "../../components/Container";

export default function Home({
  handleGetStudents,
  loading,
  students,
}: HomeProps) {
  useEffect(() => {
    handleGetStudents();
  }, [handleGetStudents]);

  if (!loading && !students) {
    return <p>"Error occured"</p>;
  }
  return (
    <Container color="blue">
      {loading
        ? "loading"
        : students?.map((student: Student) => {
            return <p key={student.id}>{student.company}</p>;
          })}
    </Container>
  );
}
