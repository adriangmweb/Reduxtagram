// a reducer takes in two things:

// 1. the action or what happened
// 2. copy of the current state

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;
