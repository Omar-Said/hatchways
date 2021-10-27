import { fork, call, takeLatest, put } from "redux-saga/effects";
import fetchStudents from "./middleware";
import { StudentActions } from "./constants";
import { Students } from "../types/Students";
import { Tags } from "../types/Tags";

export interface FetchStudentsAction {
  type: StudentActions;
  payload?: Students;
}

export interface AddTagsActions {
  type: StudentActions;
  payload?: Tags;
}

function* studentsSaga(action: FetchStudentsAction): any {
  try {
    const payload = yield call(fetchStudents);
    yield put({
      type: StudentActions.FETCH_STUDENTS_SUCCESSFUL,
      payload,
    });
  } catch (error) {
    yield put({
      type: StudentActions.FETCH_STUDENTS_FAILURE,
      payload: error,
    });
  }
}

function* addTags(action: AddTagsActions): any {
  try {
    yield put({
      type: StudentActions.ADD_TAGS_SUCCESSFUL,
      payload: action.payload,
    });
  } catch (error) {
    yield put({
      type: StudentActions.ADD_TAGS_FAILURE,
      payload: error,
    });
  }
}

function* watchStudentsSaga() {
  yield takeLatest(StudentActions.FETCH_STUDENTS, studentsSaga);
}

function* watchAddTags() {
  yield takeLatest(StudentActions.ADD_TAGS, addTags);
}

export default function* rootSaga() {
  yield fork(watchStudentsSaga);
  yield fork(watchAddTags);
}
