import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names with Tailwind conflict resolution
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

/**
 * Formats a date string
 */
export function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}

/**
 * Truncates text to a specified length
 */
export function truncate(text, length) {
    if (!text || text.length <= length) return text;
    return text.slice(0, length) + "...";
}
