// Add ordinal suffix (st, nd, rd, th)
const suffix = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

// Function to format date and handle optional formatting options
export const pubDate = (dateValue, options = {}) => {
  let date;

  // Check if it's in the old dd/mm/yyyy format
  if (typeof dateValue === "string" && dateValue.includes("/")) {
    const [day, month, year] = dateValue.split("/").map(Number);
    date = new Date(year, month - 1, day);
  } else {
    // Handle timestamps (like Date.now() from MongoDB) or ISO strings
    date = new Date(Number(dateValue) || dateValue);
  }

  // If date is invalid, just return the raw string
  if (isNaN(date.getTime())) {
    return dateValue;
  }

  // // If formatting options are passed in, use them
  // if (Object.keys(options).length > 0) {
  //   return new Intl.DateTimeFormat("en-US", options).format(date);
  // }

  // Otherwise fallback to default "23rd April, 2026" format
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day}${suffix(day)} ${date.toLocaleString("default", { month: "long" })}, ${year}`;
};

//alternate
// Define options for formatting
//const options = { year: "numeric", month: "long", day: "numeric" };
// export const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
// 	date,
// );
