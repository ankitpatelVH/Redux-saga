import Type from './Type';

export const fetchUser = payload => ({
  type: Type.FETCH_LOGIN,
  payload,
});

export const sucessCall = payload => ({
  type: Type.SUCCESS_LOGIN,
  payload,
});
export const failerCall = payload => ({
  type: Type.FAILER_LOGIN,
  payload,
});
export const setUserData = payload => ({
  type: Type.SET_LOGIN_DATA,
  payload,
});
export const removeUserData = payload => ({
  type: Type.REMOVE_LOGIN_DATA,
  payload,
});
