import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getWhatsAppUrl(phoneNumber: string, message?: string): string {
  const baseUrl = "https://wa.me/";
  const cleanNumber = phoneNumber.replace(/[^0-9]/g, "");
  const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : "";
  return `${baseUrl}${cleanNumber}${encodedMessage}`;
}

export function formatPhoneDisplay(phone: string): string {
  // Format: +971-XXX-XXXX -> +971 XXX XXXX
  return phone.replace(/-/g, " ");
}
