import { SessionsException } from './sessions.exception';

describe('SessionsException', () => {
  it('should be defined', () => {
    expect(new SessionsException()).toBeDefined();
  });
});
