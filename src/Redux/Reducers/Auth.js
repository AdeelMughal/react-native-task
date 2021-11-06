import {LOGIN, LOGOUT} from '../Types';
const intialState = {
  user: {},
  isLogin: false,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN: {
      console.log(action.payload, 'rftyhutrfdtgyhtrfggyh');
      return {
        ...state,
        user: action.payload,
        isLogin: true,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        user: {},
        isLogin: false,
      };
    }
    default:
      return state;
  }
};
export default reducer;

function user(
  state = {
    isLoggingIn: false,
    isAuthenticated: false,
  },
  action,
) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoggingIn: true, // Show a loading indicator.
        isAuthenticated: false,
      };
    case LOGIN_FAILURE:
      return {
        isLoggingIn: false,
        isAuthenticated: false,
        error: action.error,
      };
    case LOGIN_SUCCESS:
      return {
        isLoggingIn: false,
        isAuthenticated: true, // Dismiss the login view.
        hash: action.hash, // Used in subsequent API requests.
        user: action.user,
      };
    default:
      return state;
  }
}
