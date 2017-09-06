export function dateConvertor(timestamp) {
  const now = new Date(parseInt(timestamp));
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const date = now.getDate();
  const day = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();
  const dayArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthArray = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const resultArray = [date, monthArray[month], year, dayArray[day], `${hour}:${minute} `];

  return resultArray;
}

module.exports = {
  dateConvertor
};
