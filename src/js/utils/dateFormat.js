import {formatTime} from './formatTime';

export function dateFormat(time) {
  time = new Date(time);
  const year = time.getFullYear();
  const month = formatTime(time.getMonth() + 1); // т.к. нумерация с 0
  const day = formatTime(time.getDate());
  const hour = formatTime(time.getHours());
  const minutes = formatTime(time.getMinutes());
  return `${year}-${month}-${day}T${hour}:${minutes}`;
}