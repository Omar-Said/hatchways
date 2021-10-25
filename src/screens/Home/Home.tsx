import React, { useEffect } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";
import Container from "../../components/Container";
import Typography from "../../components/Typography";
import * as Styles from "./Home.styles";

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
              <Styles.Grid>
                <Styles.GridItem>
                  <img src={student.pic} alt="" />
                </Styles.GridItem>
                <Styles.GridItem>
                  {Object.keys(student).map((key, index) => {
                    return (
                      <Typography key={index}>
                        {key}: {student[key as keyof Student]}
                      </Typography>
                    );
                  })}
                </Styles.GridItem>
              </Styles.Grid>
            ))}
      </Styles.Card>
    </Container>
  );
}
