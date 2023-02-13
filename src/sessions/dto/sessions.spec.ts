import { CreateSessionsDto } from './create-session.dto';

describe('Sessions', () => {
  it('should be defined', () => {
    expect(new CreateSessionsDto()).toBeDefined();
  });
});
