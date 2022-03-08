import { ActionTypes } from "../actions/action-types";

const initiaState = {
  products: [],
};

export const productReducer = (state = initiaState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };

    default:
      return state;
  }
};
