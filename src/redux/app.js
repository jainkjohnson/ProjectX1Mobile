const TOGGLE_DRAWER = 'TOGGLE_DRAWER';
const CHANGE_VIEW = 'CHANGE_VIEW';
const initialState = {
  showDrawer: false,
  listView: true,
};

export default function drawer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_DRAWER:
      return {
        ...state,
        showDrawer: !state.showDrawer
      };
    case CHANGE_VIEW:
      return {
        ...state,
        listView: !state.listView
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

export function changeView() {
  return {
    type: CHANGE_VIEW,
  };
}
