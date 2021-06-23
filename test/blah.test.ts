import { when } from '../src';

describe('blah', () => {
  it('works', () => {
    expect(when(new Date())).toEqual('Seconds ago');
  });
  it('whens', () => {
    expect(when(new Date('June 26, 2020'))).toEqual('11 months ago');
  });

  it('whens2', () => {
    expect(when(new Date(1623643200000))).toEqual('1 week ago');
  });
});
