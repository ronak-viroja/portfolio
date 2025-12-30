import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: string): string {
  // Handle YYYY-MM format
  if (date.match(/^\d{4}-\d{2}$/)) {
    const [year, month] = date.split("-")
    const dateObj = new Date(parseInt(year), parseInt(month) - 1)
    return dateObj.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    })
  }
  // Handle full date format
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
  })
}

