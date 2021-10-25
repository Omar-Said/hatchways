import React, { useEffect } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";
import Container from "../../components/Container";

import * as Styles from "./Home.styles";
import StudentCard from "./StudentCard";

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
    <Container color="#fff">
      <Styles.Card>
        {loading
          ? "loading"
          : students?.map((student: Student) => (
              <Styles.Grid key={student.id}>
                <Styles.GridItem height={85} width={85}>
                  <img src={student.pic} alt="" />
                </Styles.GridItem>
                <StudentCard student={student}></StudentCard>
              </Styles.Grid>
            ))}
      </Styles.Card>
    </Container>
  );
}
