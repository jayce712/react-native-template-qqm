import { handleActions } from 'redux-actions';

export default handleActions({
  'fetch/start': () => ({ status: true }),
  'fetch/end': () => ({ status: false }),
}, { status: false });
