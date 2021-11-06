import {Navigation} from '../Types';
const intialState = {
  screenState: false,
};
const reducer = (state = intialState, action) => {
  switch (action.type) {
    case Navigation: {
      return {
        ...state,
        screenState: action.payload,
      };
    }
    default:
      return state;
  }
};
export default reducer;
