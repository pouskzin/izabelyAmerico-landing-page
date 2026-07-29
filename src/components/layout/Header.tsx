'use client';

import { siteConfig } from '@/config/siteConfig';
import { handleWhatsAppClick } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 z-40 w-full border-b border-white/20 bg-white/70 backdrop-blur-md"
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-6">
                <div className="flex items-center justify-center">
                    <Image
                        src={siteConfig.global.logoImage}
                        alt={siteConfig.global.brandName}
                        width={80}
                        height={80}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full shadow-sm"
                        priority
                    />
                </div>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-text/80">
                    <a href="#servicos" className="hover:text-accent transition-colors">Serviços</a>
                    <a href="#sobre" className="hover:text-accent transition-colors">Sobre Mim</a>
                    <a href="#faq" className="hover:text-accent transition-colors">Dúvidas</a>
                </nav>

                <button
                    onClick={() => handleWhatsAppClick('header_button')}
                    className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-accent/90"
                >
                    Agendar Horário
                </button>
            </div>
        </motion.header>
    );
}