import { CreatePsychotherapistDto } from './create-psychotherapist.dto';

describe('Psychotherapists', () => {
  it('should be defined', () => {
    expect(new CreatePsychotherapistDto()).toBeDefined();
  });
});
