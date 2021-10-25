import React, { useEffect } from "react";
import { Student } from "../../types/FetchStudents";
import { HomeProps } from ".";
import Container from "../../components/Container";
import Typography from "../../components/Typography";

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
      <div>
        {loading
          ? "loading"
          : students?.map((student: Student) => {
              return (
                <div key={student.id}>
                  <img src={student.pic} alt="student image" />
                  <Typography color={"#000"} fontSize={2} fontWeight={700}>
                    {student.firstName + student.lastName}
                  </Typography>
                  <Typography>Email: {student.email}</Typography>
                  <Typography>Company: {student.company}</Typography>
                  <Typography>Skill: {student.skill}</Typography>
                  <Typography>Average: {student.grades}</Typography>
                </div>
              );
            })}
      </div>
    </Container>
  );
}
