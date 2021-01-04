import { Test, TestingModule } from '@nestjs/testing';
import { JwtStratgy } from './jwt.strategy';

describe('JwtService', () => {
  let service: JwtStratgy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JwtStratgy],
    }).compile();

    service = module.get<JwtStratgy>(JwtStratgy);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
