import { LANG_CHANGE } from './actions';

const initialState = {
  lang: 'en',
};

export const langReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANG_CHANGE:
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};

export default langReducer;
