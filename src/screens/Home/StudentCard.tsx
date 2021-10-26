import React, { useState } from "react";
import { Student } from "../../types/FetchStudents";
import Typography from "../../components/Typography";
import * as Styles from "./Home.styles";
import AddTag from "./AddTag";

interface StudentCardProps {
  student: Student;
}

export default function StudentCard({ student }: StudentCardProps) {
  const [showGrades, setShowGrades] = useState(false);

  const { firstName, lastName, email, company, skill, grades } = student;
  const average =
    grades.reduce((acc, current) => Number(acc) + Number(current), 0) /
    grades.length;

  const handleShowGrades = () => {
    setShowGrades(!showGrades);
  };
  return (
    <Styles.Grid key={student.id}>
      <Styles.GridItem>
        <Styles.GridItemImage src={student.pic} alt="student image" />
      </Styles.GridItem>
      <Styles.GridItem>
        <Typography color="#000" fontSize={2} fontWeight={900} capitalize>
          {firstName} {lastName}
        </Typography>
        <Styles.DetailsContainer>
          <Typography>Email: {email}</Typography>
          <Typography>Company: {company}</Typography>
          <Typography>Skill: {skill}</Typography>
          <Typography>Average: {average}%</Typography>

          <Styles.TestContainer>
            {showGrades &&
              grades.map((item, index) => {
                return (
                  <Typography>
                    Test {index + 1}:&nbsp;&nbsp; {item}%
                  </Typography>
                );
              })}
          </Styles.TestContainer>
          <AddTag></AddTag>
        </Styles.DetailsContainer>
      </Styles.GridItem>

      <Styles.GridItem onClick={handleShowGrades} justifySelf>
        {showGrades ? "-" : "+"}
      </Styles.GridItem>
    </Styles.Grid>
  );
}
