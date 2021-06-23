const SEC = 1000;
const MN = SEC * 60;
const H = MN * 60;
const D = H * 24;
const W = D * 7;
const MO = D * 30.436875; //avg
const Y = MO * 12;

const suffixes = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
const magnitudes = [SEC, MN, H, D, W, MO, Y];

export function when(then: Date | number | string): string;

export function when(date: Date | number | string) {
  const now = new Date();
  const then = typeof date === 'object' ? date : new Date(date);

  //@ts-ignore its fiiiiine
  const delta = Math.abs(now - then);

  let i = 0;
  while (i < magnitudes.length && magnitudes[i] < delta) {
    i++;
  }

  const duration = Math.floor(delta / magnitudes[i - 1]);
  const suffix = duration === 1 ? suffixes[i - 1] : suffixes[i - 1] + 's';

  if (suffix === 'second' || delta <= 1000) return 'Seconds ago';

  return `${duration} ${suffix} ago`;
}
