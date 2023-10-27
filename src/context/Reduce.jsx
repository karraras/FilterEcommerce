function Reduce(state, action) {
  if (action.type === "Loading") {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === "setBrand") {
    return {
      ...state,
      data: state.data,
      Brand: action.payload,
    };
  }

  return state;
}

export default Reduce;
