import { FETCH_USER } from "./actionType";

const urlBase = "http://localhost:3000";

export const fetchUser = (payload) => {
  return {
    type: FETCH_USER,
    payload,
  };
};

export const fetchDataUser = (name, gender, address) => {
  return (dispatch, getState) => {
    fetch(`${urlBase}/users?name=${name}&gender=${gender}&address=${address}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then((data) => {
        dispatch(fetchUser(data));
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
};
