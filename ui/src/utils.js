export function randomDate(start, end) {
  return String(new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())));
}