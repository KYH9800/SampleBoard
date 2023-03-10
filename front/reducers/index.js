import { combineReducers } from 'redux'; // 여러 리듀서들을 하나로 합쳐준다.
import { HYDRATE } from 'next-redux-wrapper';

import user from './user';
import post from './post';

// HYDRATE가 동작할 때 initStates들이 index user post 자체를 덮어씌울 수 있도록 구조를 작성
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log('HYDRATE', action);
      // return { ...state, ...action.payload };
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
        post,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer; // _app.js에서 reducer로 사용된다!
