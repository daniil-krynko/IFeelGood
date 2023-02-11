import { PatientsException } from './patients.exception';

describe('PatientsException', () => {
  it('should be defined', () => {
    expect(new PatientsException()).toBeDefined();
  });
});
