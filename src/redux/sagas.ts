import { fork, call, takeLatest, put } from "redux-saga/effects";
import fetchStudents from "./middleware";
import { FetchStudentsActions, AddTagsToStudents } from "./constants";
import { Students } from "../types/FetchStudents";
import { Tags } from "../types/Tags";

export interface FetchStudentsAction {
  type: FetchStudentsActions;
  payload?: Students;
}

export interface AddTagsToStudent {
  type: AddTagsToStudents;
  payload?: Tags;
}

function* studentsSaga(action: FetchStudentsAction): any {
  try {
    const payload = yield call(fetchStudents);
    yield put({
      type: FetchStudentsActions.FETCH_STUDENTS_SUCCESSFUL,
      payload,
    });
  } catch (error) {
    yield put({
      type: FetchStudentsActions.FETCH_STUDENTS_FAILURE,
      payload: error,
    });
  }
}

function* addTags(action: AddTagsToStudent): any {}

function* watchStudentsSaga() {
  yield takeLatest(FetchStudentsActions.FETCH_STUDENTS, studentsSaga);
}

function* watchAddTags() {
  yield takeLatest(AddTagsToStudents.ADD_TAGS, addTags);
}

export default function* rootSaga() {
  yield fork(watchStudentsSaga);
  yield fork(watchAddTags);
}
