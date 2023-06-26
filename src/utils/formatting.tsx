export const formatDate = (d: string) => {
  const date = new Date(d);
  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'UTC',
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }
  return date.toLocaleString('en-US', options);
}