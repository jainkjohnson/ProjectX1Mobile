const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const initialState = {
  showDrawer: false
};

export default function drawer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        showDrawer: !state.showDrawer
      };
    default:
      return state;
  }
}

export function toggleDrawer() {
  return {
    type: TOGGLE_DRAWER,
  };
}
