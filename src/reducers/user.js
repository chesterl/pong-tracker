function user(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, ...action.user }
    case 'USER_LOGOUT':
      return { user: null }
    default:
      return state
  }
}

export default user
