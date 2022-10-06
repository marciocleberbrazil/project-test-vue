const { utcToZonedTime, format } = require('date-fns-tz');

export const convertCentsToDollar = (target) => target > 0 ? (target / 100).toFixed(2) : 0;

export const convertDateFromUtcToZonedTime = (utcDate, timeZone) => {
  const date = new Date(utcDate);
  return utcToZonedTime(date, timeZone);
};

export const getFormattedDate = (startDate, endDate, timeZone) => {
  const startDateFormatted = format(startDate, 'LLL d, E H:mm a', { timeZone });
  const endDateFormatted = format(endDate, 'H:mm a ', { timeZone });
  
  return `${startDateFormatted} - ${endDateFormatted} PDT`.toUpperCase();
};

export const formatUSAPhoneNumber = (phoneNumberString) => {
  const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]} ${match[3]}`;
  }
  return null;
};