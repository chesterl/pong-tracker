import * as types from '../constants/actionTypes';

export const userLogin = user => ({ type: types.USER_LOGIN, user });
export const userLogout = () => ({ type: types.USER_LOGOUT });
