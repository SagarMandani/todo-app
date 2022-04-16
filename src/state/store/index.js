import { createStore, createHook } from 'react-sweet-state';
import * as actions from '../actions'
import { getTodoListSelector, getTodoLoadingSelector, getTodoErrorSelector } from '../selectors'

const initialState = {
    toDoTask: [],
    loading: false,
    errorMsg: ''
};

export const Store = createStore({
    initialState,
    actions,
    name: 'TodoTaskStore'
});

export const useToDoTaskState = createHook(Store, {
    toDoListSelector: getTodoListSelector,
    toDoLoadingSelector: getTodoLoadingSelector,
    toDoErrorSelector: getTodoErrorSelector
});