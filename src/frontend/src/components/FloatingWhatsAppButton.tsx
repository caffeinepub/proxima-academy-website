import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '@/utils/whatsapp';

export default function FloatingWhatsAppButton() {
  const handleClick = () => {
    const message = 'Hello! I would like to inquire about admissions at Proxima Academy.';
    window.open(getWhatsAppLink('9137201158', message), '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} className="animate-pulse" />
      <span className="absolute right-full mr-3 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg font-semibold">
        Chat with us!
      </span>
    </button>
  );
}
