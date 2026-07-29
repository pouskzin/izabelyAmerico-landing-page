'use client';

import { MessageCircle } from 'lucide-react';
import { handleWhatsAppClick } from '@/lib/whatsapp';
import { motion } from 'framer-motion';

export function WhatsAppFloatingButton() {
    return (
        <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
            onClick={() => handleWhatsAppClick('floating_button')}
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-110 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-500/50"
            aria-label="Agendar pelo WhatsApp"
        >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <MessageCircle size={28} className="relative z-10" />
        </motion.button>
    );
}