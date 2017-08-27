const TOGGLE_LOADER = 'TOGGLE_LOADER';

export default function loader(state = false, action = {}) {
  switch (action.type) {
    case TOGGLE_LOADER:
      return action.value;
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
