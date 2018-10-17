import { activateLoading, addItem, addItems, deactivateLoading, generateError, generateState, removeItem } from './utils';

class ActionMock {
  payload: any;
  type: string;

  constructor(t: string, p?: any) {
    this.type = t;
    this.payload = p;
  }
}

const item1 = {id: '1', text: 'hola'};
const item2 = {id: '2', text: 'hola'};
const item3 = {id: '3', text: 'hola'};

const initialState = {
  entities: {
    [item1.id]: item1,
  },
  loading: false,
  loaded: false,
  error: null,
};

const actions = {
  'test1': activateLoading,
  'test2': [addItems, deactivateLoading],
  'test3': addItem,
  'test4': addItems,
  'test5': removeItem,
  'test6': generateError,
};

describe('Utils', () => {
  it('Should return state modified', () => {
    const action = new ActionMock('test1');
    const state = generateState(initialState, action, actions);
    expect(state.loading).toBe(true);
  });

  it('Should return state modified and composed', () => {
    const action = new ActionMock('test2', [item2]);
    const state = generateState(initialState, action, actions);
    expect(state.loading).toBe(false);
    expect(Object.keys(state.entities).length).toBe(2);
    expect(state.loaded).toBe(true);
  });

  it('Should add item', () => {
    const action = new ActionMock('test3', item2);
    const state = generateState(initialState, action, actions);
    expect(Object.keys(state.entities).length).toBe(2);
    expect(state.entities[item2.id]).toBe(item2);
  });

  it('Should add items', () => {
    const items = [item2, item3];
    const action = new ActionMock('test4', items);
    const state = generateState(initialState, action, actions);
    expect(Object.keys(state.entities).length).toBe(3);
    expect(state.entities[items[0].id]).toBe(items[0]);
  });

  it('Should remove item', () => {
    const itemId = item1.id;
    const action = new ActionMock('test5', itemId);
    const state = generateState(initialState, action, actions);
    expect(Object.keys(state.entities).length).toBe(0);
  });

  it('Should generate error', () => {
    const error = {text: 'hola'};
    const action = new ActionMock('test6', error);
    const state = generateState(initialState, action, actions);
    expect(state.error).toBe(error);
  });
});
