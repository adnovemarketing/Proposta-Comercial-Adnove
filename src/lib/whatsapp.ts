export const WHATSAPP_NUMBER = "5519995659229";

export const getWaLink = (message: string) => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
