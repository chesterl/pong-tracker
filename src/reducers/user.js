function user(state = {}, action) {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, user: action.user }
    default:
      return state
  }
}

export default user
