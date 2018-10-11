export const generateState = (state, action, actions) => {
  actions.default = generateDefault;

  if (actions[action.type] && actions[action.type] instanceof Array) {
    let newState = {};

    for (const composableState of actions[action.type]) {
      newState = {
        ...newState,
        ...composableState(newState, action),
      };
    }
    return newState;
  }

  return (actions[action.type] || actions.default)(state, action);
};

export const generateDefault = (state, action) => state;

export const activateLoading = (state, action) => {
  return {
    ...state,
    loading: true,
    error: null,
  };
};

export const deactivateLoading = (state, action) => {
  return {
    ...state,
    loading: false,
  };
};

export const addItem = (state, { payload }) => {
  return {
    ...state,
    entities: {
      [payload.id]: payload,
    },
    loaded: true,
  };
};

export const addItems = (state, { payload }) => {
  const entities = payload.reduce(
    (list, item) => {
      return {
        ...list,
        [item.id]: item,
      };
    },
    {
      ...state.entities,
    },
  );
  return {
    ...state,
    loaded: true,
    entities,
  };
};

export const removeItem = (state, { payload }) => {
  const {[payload]: removed, ...others} = state.entities;

  return {
    ...state,
    entities: others,
  };
};

export const generateError = (state, { payload }) => {
  return {
    ...state,
    error: payload,
  };
};
