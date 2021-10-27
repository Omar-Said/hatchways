import { combineReducers } from "redux";
import { Student } from "../types/FetchStudents";
import { Tag } from "../types/FetchStudents";
import { StudentActions } from "./constants";
import { AddTagsActions, FetchStudentsAction } from "./sagas";

export interface StudentsState {
  loading: boolean;
  error: string;
  students?: Student[];
  tags?: any;
}

const initialState: StudentsState = {
  loading: false,
  error: "",
  students: [],
  tags: "",
};

const students = (state = initialState, action: FetchStudentsAction) => {
  switch (action.type) {
    case StudentActions.FETCH_STUDENTS: {
      return {
        ...state,
        loading: true,
      };
    }
    case StudentActions.FETCH_STUDENTS_SUCCESSFUL: {
      return {
        ...state,
        loading: false,
        students: action?.payload?.students,
      };
    }
    case StudentActions.FETCH_STUDENTS_FAILURE: {
      return {
        ...state,
        loading: false,
        error: "some error happened",
      };
    }
    case StudentActions.ADD_TAGS: {
      console.log("REDUCER", action.payload);
      if (state.students && state.students.length) {
        let students = [...state.students];
        if (students && students.length) {
          let studentIndex = students.findIndex((each) => {
            return each.id === (action?.payload as unknown as Tag)?.id;
          });
          if (!students[studentIndex].tags) {
            students[studentIndex]["tags"] = [];
          }
          students[studentIndex].tags.push(action?.payload as unknown as Tag);
        }
        return {
          ...state,
          students,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    default:
      return state;
  }
};

export default combineReducers({ students });
