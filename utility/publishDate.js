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

// Function to format date from dd/mm/yyyy to "23rd April, 2026"
export const pubDate = (dateString) => {
  const [day, month, year] = dateString.split("/").map(Number);
  const date = new Date(year, month - 1, day);

  return `${day}${suffix(day)} ${date.toLocaleString("default", { month: "long" })}, ${year}`;
};

//alternate
// Define options for formatting
//const options = { year: "numeric", month: "long", day: "numeric" };
// export const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
// 	date,
// );
