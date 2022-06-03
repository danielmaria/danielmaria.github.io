import { TestBed } from '@angular/core/testing';
import { HoursAvgPipe } from './hours-avg.pipe';

describe('HoursAvgPipe', () => {

  let pipe: HoursAvgPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoursAvgPipe]
    })
    pipe = TestBed.inject(HoursAvgPipe);
  });

  it('create an instance', () => {
    const pipe = new HoursAvgPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return 1 if was informed 60 minutes', () => {
    const result = pipe.transform(60);
    expect(result).toBe(1);
  });

  it('should return 1 if was informed 50 minutes', () => {
    const result = pipe.transform(50);
    expect(result).toBe(1);
  });

  it('should return 2 if informed more than 90 minutes', () => {
    const result = pipe.transform(91);
    expect(result).toBe(2);
  });
});
