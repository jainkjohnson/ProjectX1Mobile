const TOGGLE_LOADER = 'TOGGLE_LOADER';
const initialState = {
  showLoader: false
};

export default function loader(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return !state.initialState;
    default:
      return state;
  }
}

export function toggleLoader(value) {
  return {
    type: TOGGLE_LOADER,
    value
  };
}
