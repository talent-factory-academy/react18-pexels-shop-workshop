export function convertSecondsInHumanTime (seconds: number) {
  const isGreaterThanAnHour = seconds > 3600;
  return isGreaterThanAnHour ?
    new Date(seconds * 1000).toISOString().slice(11, 19) :
    new Date(seconds * 1000).toISOString().slice(14, 19)
}
