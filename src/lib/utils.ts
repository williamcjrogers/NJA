export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatPhoneForDisplay(phone: string): string {
  return phone;
}

export function formatPhoneForHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
