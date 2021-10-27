import { StudentActions } from "./constants";

export const fetchStudents = () => {
  return {
    type: StudentActions.FETCH_STUDENTS,
  };
};

export const addTag = (payload: any) => {
  return {
    type: StudentActions.ADD_TAGS,
    payload,
  };
};
