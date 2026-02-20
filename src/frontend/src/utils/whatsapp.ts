export function getWhatsAppLink(phoneNumber: string, message?: string): string {
  // Format phone number with country code (India: +91)
  const formattedNumber = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
  
  // Encode message if provided
  const encodedMessage = message ? encodeURIComponent(message) : '';
  
  // Construct WhatsApp link
  const baseUrl = 'https://wa.me/';
  return `${baseUrl}${formattedNumber.replace(/\+/g, '')}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
}
