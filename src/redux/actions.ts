import { StudentActions } from "./constants";

export const fetchStudents = () => {
  return {
    type: StudentActions.FETCH_STUDENTS,
  };
};

export const addTag = (payload: any) => {
  console.log("FIRED", payload);
  return {
    type: StudentActions.ADD_TAGS,
    payload,
  };
};
