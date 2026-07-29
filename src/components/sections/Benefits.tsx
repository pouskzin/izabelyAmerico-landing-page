'use client';

import { siteConfig } from '@/config/siteConfig';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Heart } from 'lucide-react';

const icons = [Heart, Sparkles, Clock]; // Mapeando ícones para os 3 benefícios

export function Benefits() {
    return (
        <section className="bg-surface py-24 border-y border-accent/5">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 md:grid-cols-3">
                    {siteConfig.benefits.map((benefit, index) => {
                        const Icon = icons[index];
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center space-y-4"
                            >
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background border border-accent/20 text-accent shadow-sm">
                                    <Icon size={28} />
                                </div>
                                <h3 className="font-serif text-xl font-semibold text-text">{benefit.title}</h3>
                                <p className="text-text/70">{benefit.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}