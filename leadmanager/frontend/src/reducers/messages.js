import { GET_MESSAGES , CREATE_MESSAGE } from "../actions/types";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return {
         ...action.payload
      };
    case GET_MESSAGES :
      return action.payload
    default:
      return state;
  }
};
