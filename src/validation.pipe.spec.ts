import { ValidationPipe } from './validation.pipe';

describe('UserPipe', () => {
  it('should be defined', () => {
    expect(new ValidationPipe()).toBeDefined();
  });
});
