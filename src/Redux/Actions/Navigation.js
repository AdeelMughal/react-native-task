import {Navigation} from '../Types';

import {
  UPDATE_TWITTER_CONECTION,
  FETCHING_DATA_SUCCESS,
  UPDATE_TWITTER_PROFILE,
  FETCHING_LOGGEDIN_DATA_SUCCESS,
  FETCHING_TEAM,
  FETCHING_TEAM_FAILURE,
  FETCHING_DATA_TEAM_SUCCESS,
  FETCHING_DATA_CONTACT_SUCCESS,
  SET_CONTACT_PAGES,
  SET_PERSONAL_MESSAGES,
  SET_TEAM_PAGES,
} from '../constants';

export const startFetchTeam = () => ({
  type: FETCHING_TEAM,
});

export const endFetchTeamWithError = () => ({
  type: FETCHING_TEAM_FAILURE,
});

export const updateTwitterConection = data => {
  return {type: UPDATE_TWITTER_CONECTION, data};
};

export const fetchUser = data => {
  return {type: FETCHING_DATA_SUCCESS, data};
};

export const fetchLoggedInUser = data => {
  return {type: FETCHING_LOGGEDIN_DATA_SUCCESS, data};
};

export const fetchTwitterProfile = data => {
  return {type: UPDATE_TWITTER_PROFILE, data};
};

export const fetchTeam = data => {
  return {type: FETCHING_DATA_TEAM_SUCCESS, data};
};

export const setTeamPage = data => {
  return {type: SET_TEAM_PAGES, data};
};

export const fetchContact = data => {
  return {type: FETCHING_DATA_CONTACT_SUCCESS, data};
};

export const setContactPage = data => {
  return {type: SET_CONTACT_PAGES, data};
};

export const setPersonalMessages = data => {
  return {type: SET_PERSONAL_MESSAGES, data};
};

export const setScreenState = payload => {
  return {
    type: Navigation,
    payload,
  };
};
