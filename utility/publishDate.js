const timestamp = Date.now();
const date = new Date(timestamp);

// Add ordinal suffix (st, nd, rd, th)
const day = date.getDate();
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

// Construct final string: e.g. "23rd April, 2026"
export const pubDate = `${day}${suffix(day)} ${date.toLocaleString("default", { month: "long" })}, ${date.getFullYear()}`;

//alternate
// Define options for formatting
//const options = { year: "numeric", month: "long", day: "numeric" };
// export const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
// 	date,
// );
