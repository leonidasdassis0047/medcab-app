import {Dispatch} from 'redux';
import {TabAction, TAB_TYPES} from '../reducers/tab';

export const setSelectedTab = (selectedTab: string) => {
  return (dispatch: Dispatch<TabAction>) => {
    dispatch({
      type: TAB_TYPES.SET_SELECTED_TAB,
      payload: selectedTab,
    });
  };
};
