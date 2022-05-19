export const CHANGE_TEXT = "CHANGE_TEXT";
export const CHANGE_TITLE = "CHANGE_TITLE";
export const CHANGE_PRIORITY = "CHANGE_PRIORITY";

//action creator
export function changeText(value) {
  return {
    type: CHANGE_TEXT,
    payload: value,
  };
}

export function changeTitle(value) {
  return {
    type: CHANGE_TITLE,
    payload: value,
  };
}
export function changePriority(value) {
  return {
    type: CHANGE_PRIORITY,
    payload: value,
  };
}

const initialState = {
  text: "",
  title: "",
  priority: false
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    case CHANGE_TITLE:
      return {
        ...state,
        title: action.payload,
      };
    case CHANGE_PRIORITY:
      return {
        ...state,
        priority: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;