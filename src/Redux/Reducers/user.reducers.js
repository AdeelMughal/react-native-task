import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  UPDATE_TWITTER_CONECTION,
  UPDATE_TWITTER_PROFILE,
} from '../constants';

const initialState = {
  user: {
    id: '',
    first_name: 'Coach Ashley',
    last_name: '',
    email: 'no@mail.com',
    phone: '999999',
    name: '',
    sms_number: 0,
    last_login_at: '',
    team: {
      id: 0,
      name: 'Team',
    },
    twitter_profile: {
      nickname: '',
      name: '',
      picture:
        'https://www.RecruitSuite.co/assets/no-avatar-9201633b2d1e5f06137c6a0f2b2a9af8f7a0b7c9636265ecf03bf90cec433f66.png',
    },
    photo_url: 'https://placeimg.com/300/300/people',
    url: '',
    user_id: 0,
  },
  token: '',
  linkedTwitter: false,
  isFeching: false,
  error: false,
  signedInUsers: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        user: {},
        isFeching: true,
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        ...action.data,
        isFeching: false,
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFeching: false,
        error: true,
      };
    case UPDATE_TWITTER_CONECTION:
      return {
        ...state,
        linkedTwitter: action.data,
      };
    case UPDATE_TWITTER_PROFILE:
      return {
        ...state,
        user: {
          ...state.user,
          twitter_profile: {
            name: action.data.user.name,
            nickname: action.data.user.nickname,
          },
          photo_url: action.data.user.picture,
        },
        token: action.data.token,
      };

    default:
      return state;
  }
};
