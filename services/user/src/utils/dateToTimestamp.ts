export default function dateToTimestamp(date: Date) {
    const seconds = Math.floor(date.getTime() / 1000);
    const nanos = (date.getTime() % 1000) * 1e6;
  
    return {
      seconds: seconds.toString(), // Convert seconds to string
      nanos: nanos
    };
}