import { FetchStudentsActions, AddTagsToStudents } from "./constants";

export const fetchStudents = () => {
  return {
    type: FetchStudentsActions.FETCH_STUDENTS,
  };
};

export const addTag = (payload: any) => {
  console.log("FIRED", payload);
  return {
    type: AddTagsToStudents.ADD_TAGS,
    payload,
  };
};
