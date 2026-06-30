import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getAuthSession() {
  if (typeof window === "undefined") return null;

  try {
    return JSON.parse(localStorage.getItem("hotel-auth"));
  } catch {
    return null;
  }
}

export function saveAuthSession(user) {
  if (typeof window === "undefined") return;
  localStorage.setItem("hotel-auth", JSON.stringify(user));
}

export function clearAuthSession() {
  if (typeof window === "undefined") return;
  localStorage.removeItem("hotel-auth");
}

export function isAuthenticated() {
  const session = getAuthSession();
  return Boolean(session?.isLoggedIn);
}

export function getUserRole() {
  return getAuthSession()?.role ?? "guest";
}
