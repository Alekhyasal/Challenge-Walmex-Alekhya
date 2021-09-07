import axios from "axios";
import { GET_USERRS, USERS_ERROR, GET_ITEMS, GET_USERRS_WITH } from "./types";

export const simpleAction = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://localhost:3001/users`);

    dispatch({
      type: GET_USERRS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: e,
    });
  }
};

export const getItems = () => (dispatch) => {
  const result = [
    "carrot",
    "apple",
    "grapes",
    "cake",
    "crackers",
    "chips",
    "tv",
    "ham",
    "beef",
  ];
  dispatch({
    type: GET_ITEMS,
    payload: result,
  });
};

export const ageDemographic = (item) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:3001/users/age?itemToLookup=${item}`
    );

    dispatch({
      type: GET_USERRS_WITH,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: e
    });
  }
};
