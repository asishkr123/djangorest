import axios from "axios";
import { GET_LEADS, DELETE_LEADS, ADD_LEAD} from "./types";
import {createMessage, returnErrors} from './messages';

export const getLeads = () => dispatch => {
  axios
    .get("/api/leads/")
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch((err) =>{dispatch(returnErrors(err.response.data , err.response.status))})
};

export const deleteLeads = id => dispatch => {
  axios
    .delete(`/api/leads/${id}`)
    .then(res => {
      dispatch(createMessage({deleteLead : "Lead Deleted"}))
      dispatch({
        type: DELETE_LEADS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

export const addLead = data => dispatch => {
  axios
    .post("/api/leads/", data)
    .then(res => {
       dispatch(createMessage({addLead : "Lead Added"}))
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err => {dispatch(returnErrors(err.response.data , err,response.status))});
};
