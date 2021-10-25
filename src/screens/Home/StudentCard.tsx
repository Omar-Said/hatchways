import React from "react";
import { Student } from "../../types/FetchStudents";
import Typography from "../../components/Typography";
import * as Styles from "./Home.styles";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  const { firstName, lastName, email, company, skill, grades } = student;
  const average =
    grades.reduce((acc, current) => Number(acc) + Number(current), 0) /
    grades.length;
  return (
    <Styles.GridItem height={100} width={500}>
      <Typography color="#000" fontSize={2} fontWeight={900} capitalize>
        {firstName} {lastName}
      </Typography>
      <Typography>Email: {email}</Typography>
      <Typography>Company: {company}</Typography>
      <Typography>Skill: {skill}</Typography>
      <Typography>Average: {average}%</Typography>
    </Styles.GridItem>
  );
}
