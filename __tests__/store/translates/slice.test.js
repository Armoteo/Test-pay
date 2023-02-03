import translatesReducer, { toggleLocaleAsync } from '../../../src/store/translates/slice';

describe('counter reducer', () => {
  const initialState = {
    locale: 'en',
    isLoading: false
  };

  it('should handle initial state', () => {
    expect(translatesReducer(undefined, { type: 'unknown' })).toEqual({
      locale: 'en',
      isLoading: false
    });
  });

  it('should handle toggleLocale pending', async () => {
    const action = { type: toggleLocaleAsync.pending.type };
    const { isLoading } = translatesReducer(initialState, action);
    expect(isLoading).toEqual(true);
  });

  it('should handle toggleLocale fulfilled', async () => {
    const newLanguage = 'ua';
    const action = { type: toggleLocaleAsync.fulfilled.type, payload: newLanguage };
    const { locale } = translatesReducer(initialState, action);
    expect(locale).toEqual(newLanguage);
  });
});
