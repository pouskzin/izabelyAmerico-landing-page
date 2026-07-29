'use client';

import { siteConfig } from '@/config/siteConfig';
import { handleWhatsAppClick } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Star, ArrowRight, Check, Sparkles } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center pt-20 overflow-hidden bg-background">
            <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2 items-center relative z-10 py-12">
                {/* Coluna Esquerda: Conteúdo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl space-y-8"
                >
                    <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-text shadow-sm">
                        <Star size={16} className="text-accent fill-accent" />
                        {siteConfig.hero.badge}
                    </div>

                    <h1 className="font-serif text-5xl leading-tight text-text md:text-6xl lg:text-7xl">
                        {siteConfig.hero.title.split('Naturalidade').map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && <span className="text-accent italic">Naturalidade</span>}
                            </span>
                        ))}
                    </h1>

                    <p className="text-lg text-text/80 md:text-xl max-w-xl">
                        {siteConfig.hero.subtitle}
                    </p>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                        <button
                            onClick={() => handleWhatsAppClick('hero_primary')}
                            className="rounded-full bg-accent px-8 py-4 font-medium text-white shadow-xl shadow-accent/20 transition-all hover:scale-105 hover:bg-accent/90"
                        >
                            {siteConfig.hero.ctaPrimary}
                        </button>
                        <a
                            href="#portfolio"
                            className="group flex items-center gap-2 font-medium text-text transition-colors hover:text-text/70"
                        >
                            {siteConfig.hero.ctaSecondary}
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                        {siteConfig.hero.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 shadow-sm border border-accent/20">
                                    <Check size={14} className="text-accent" />
                                </div>
                                <span className="text-sm font-medium text-text/90">{feature}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Coluna Direita: Imagem e Badges */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative w-full aspect-[4/5] max-w-lg mx-auto lg:ml-auto"
                >
                    <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                            src="/fibra-de-vidro.jpeg" 
                            alt={siteConfig.hero.title}
                            className="w-full h-full object-cover pointer-events-none select-none"
                            draggable={false}
                            onContextMenu={(e) => e.preventDefault()}
                        />
                    </div>

                    {/* Badge Flutuante 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                        className="absolute -left-6 top-20 flex items-center gap-3 rounded-full bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md border border-white/50"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-md shadow-accent/30">
                            <Sparkles size={20} />
                        </div>
                        <span className="font-serif font-bold text-text">{siteConfig.global.professionalName}</span>
                    </motion.div>

                    {/* Badge Flutuante 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="absolute -right-6 bottom-32 flex items-center gap-3 rounded-full bg-white/70 px-6 py-3 shadow-lg backdrop-blur-md border border-white/50"
                    >
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-md shadow-accent/30">
                            <Star size={18} className="fill-current" />
                        </div>
                        <span className="font-serif font-bold text-text">{siteConfig.hero.features[0]}</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}