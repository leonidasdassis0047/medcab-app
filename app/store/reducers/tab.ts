export enum TAB_TYPES {
  SET_SELECTED_TAB = 'SET_SELECTED_TAB',
}

interface SET_SELECTED_TAB {
  type: 'SET_SELECTED_TAB';
  payload: string;
}
export type TabAction = SET_SELECTED_TAB;

const initialState: {selectedTab: string} = {
  selectedTab: '',
};

export const tabReducer = (state = initialState, action: TabAction) => {
  switch (action.type) {
    case 'SET_SELECTED_TAB':
      return {
        ...state,
        selectedTab: action.payload,
      };

    default:
      return state;
  }
};
