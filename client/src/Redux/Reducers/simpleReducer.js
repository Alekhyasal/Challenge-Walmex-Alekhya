import { GET_USERRS, GET_ITEMS, GET_USERRS_WITH } from "./../Actions/types";
const INITIAL_STATE = {
  users: [],
  loading: true,
  items: [],
  usersWith: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERRS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case GET_USERRS_WITH:
      return {
        ...state,
        usersWith: action.payload,
      };
    default:
      return state;
  }
};
