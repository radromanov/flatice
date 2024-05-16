import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(rawDate: Date) {
  const year = rawDate.getFullYear();
  const month = rawDate.getMonth();
  const date = rawDate.getDate();
  let day = rawDate.getDay().toString();
  const hour = rawDate.getHours();
  const minute = rawDate.getMinutes();

  switch (day) {
    case "1":
      day = "Mon";
      break;
    case "2":
      day = "Tue";
      break;
    case "3":
      day = "Wed";
      break;
    case "4":
      day = "Thu";
      break;
    case "5":
      day = "Fri";
      break;
    case "6":
      day = "Sat";
      break;
    default:
      day = "Sun";
      break;
  }

  return `${day}, ${date}/${month}/${year}, ${hour}:${minute}`;
}
