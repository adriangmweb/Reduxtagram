// a reducer takes in two things:

// 1. the action or what happened
// 2. copy of the current state

function posts(state = [], action) {
  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('liked!');
      const i = action.index;
      return [
        ...state.slice(0, i), // all before the one that we are updating
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1), // all after the one that we are updating
      ]
    default:
      return state;
  }
}

export default posts;
