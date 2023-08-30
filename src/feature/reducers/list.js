export const listInitialState =
  JSON.parse(window.localStorage.getItem("list")) || [];

export const LIST_ACTION_TYPES = {
  ADD_TO_LIST: "ADD_TO_LIST",
  REMOVE_FROM_LIST: "REMOVE_FROM_LIST",
  CLEAR_LIST: "CLEAR_LIST",
};

// update localStorage with state for List
export const updateLocalStorage = (state) => {
  window.localStorage.setItem("list", JSON.stringify(state));
};

const UPDATE_STATE_BY_ACTION = {
  [LIST_ACTION_TYPES.ADD_TO_LIST]: (state, action) => {
    // Una forma seria usando structuredClone
    // const { id } = actionPayoad;

    // const bookInListIndex = state.findIndex(item => item.id === id);

    // if(bookInListIndex >= 0){
    //     const newState = structuredClone(state);
    //     newState[bookInListIndex].quantity += 1;
    // updateLocalStorage(newState);
    //     return newState;
    // }
    
    // Facil Usando el map
    // const newState = state.map(item => {
    //     if(item.id === id){
    //         return {
    //             ...item,
    //             quantity: item.quantity + 1,
    //         }
    //     }
    // });

    // Fast usando el sprend operator y slice
    // const newState = [
    //     ...state.slice(0, bookInListIndex),
    //     { ...state[bookInListIndex], quantity: state[bookInListIndex].quantity + 1 },
    //     ...state.slice(bookInListIndex + 1);
    // ];
    const newState = [
      ...state,
      {
        ...action.payload,
        // quantity:1
      },
    ];

    updateLocalStorage(newState);
    return newState;
  },

  [LIST_ACTION_TYPES.REMOVE_FROM_LIST]: (state, action) => {
    const { id } = action.payload;
    const newState = state.filter((item) => item.id !== id);
    updateLocalStorage(newState);
    return newState;
  },

  [LIST_ACTION_TYPES.CLEAR_LIST]: () => {
    updateLocalStorage([]);
    return [];
  },
};

export const listReducer = (state, action) => {
  const { type: actionType } = action;

    const updateState = UPDATE_STATE_BY_ACTION[actionType];
    return updateState ? updateState(state, action) : state;
};
