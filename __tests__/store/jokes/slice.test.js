import jokesReducer, { fetchJokeAsync } from '../../../src/store/jokes/slice';

describe('counter reducer', () => {
  const initialState = {
    joke: undefined,
    error: undefined,
    isLoading: false
  };

  it('should handle initial state', () => {
    expect(jokesReducer(undefined, { type: 'unknown' })).toEqual({
      joke: undefined,
      error: undefined,
      isLoading: false
    });
  });

  it('should handle fetchJoke pending', async () => {
    const action = { type: fetchJokeAsync.pending.type };
    const { isLoading } = jokesReducer(initialState, action);
    expect(isLoading).toEqual(true);
  });

  it('should handle toggleLocale fulfilled', async () => {
    const newJoke = 'joke';
    const action = { type: fetchJokeAsync.fulfilled.type, payload: newJoke };
    const { joke } = jokesReducer(initialState, action);
    expect(joke).toEqual(newJoke);
  });
});
