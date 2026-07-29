'use client';

import { siteConfig } from '@/config/siteConfig';
import { handleWhatsAppClick } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Sparkles, MessageCircle, CalendarCheck } from 'lucide-react';

const icons = [Sparkles, MessageCircle, CalendarCheck];

export function BookingSteps() {
    return (
        <section className="bg-surface py-24 border-y border-accent/5">
            <div className="container mx-auto px-6">
                <div className="mb-20 text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl font-bold text-text md:text-4xl"
                    >
                        Como agendar seu momento
                    </motion.h2>
                </div>

                <div className="relative mx-auto max-w-4xl">
                    <div className="grid gap-12 md:grid-cols-3 md:gap-8">
                        {siteConfig.bookingSteps.map((step, index) => {
                            const Icon = icons[index] || Sparkles;
                            
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="flex flex-col items-center text-center group"
                                >
                                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-background border-2 border-accent/20 shadow-xl shadow-accent/10 transition-transform duration-500 group-hover:scale-110">
                                        <Icon size={36} className="text-accent" />
                                    </div>

                                    <h3 className="mb-3 font-serif text-xl font-semibold text-text">
                                        <span className="text-accent mr-2">{index + 1}.</span>
                                        {step.title}
                                    </h3>
                                    
                                    <p className="text-sm leading-relaxed text-text/70">
                                        {step.description}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 flex justify-center"
                >
                    <button
                        onClick={() => handleWhatsAppClick('booking_steps')}
                        className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-medium text-white shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:bg-accent/90"
                    >
                        <MessageCircle size={20} />
                        Falar no WhatsApp
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
