import { CreatePatientDto } from './create-patient.dto';

describe('Patients', () => {
  it('should be defined', () => {
    expect(new CreatePatientDto()).toBeDefined();
  });
});
