import Type from './Type';

const initialState = {
  loading: false,
  userData: null,
  status: null,
  error: null,
  isLogin: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case Type.FETCH_LOGIN:
      return {
        ...state,
        loading: true,
      };
    case Type.FAILER_LOGIN:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case Type.SUCCESS_LOGIN:
      return {
        ...state,
        userData: action.payload,
        isLogin: true,
        loading: false,
        error: null,
      };
    case Type.REMOVE_LOGIN_DATA:
      return initialState;

    default:
      return state;
  }
};

export default userReducer;
