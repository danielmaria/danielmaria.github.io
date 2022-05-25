import { SortByDatePipe } from './sort-by-date.pipe';

describe('SortByPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByDatePipe();
    expect(pipe).toBeTruthy();
  });
});
