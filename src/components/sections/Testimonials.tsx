'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Mariana Silva',
        role: 'Empresária',
        text: 'Melhor alongamento de fibra que já fiz! Muito natural e durou mais de 25 dias sem lascar. O ambiente é super higienizado, me senti muito segura.',
    },
    {
        name: 'Camila Rodrigues',
        role: 'Advogada',
        text: 'A Iza é super detalhista. O banho de gel salvou minhas unhas naturais, que antes quebravam por qualquer coisa. Recomendo de olhos fechados!',
    },
    {
        name: 'Juliana Costa',
        role: 'Arquiteta',
        text: 'Atendimento impecável desde o agendamento até o momento de sair do estúdio. As unhas ficam fininhas, elegantes e com um brilho incrível.',
    }
];

export function Testimonials() {
    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl font-bold text-text md:text-4xl"
                    >
                        O que dizem nossas clientes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 max-w-xl text-text/70"
                    >
                        Histórias reais de mulheres que transformaram sua autoestima através das nossas técnicas exclusivas.
                    </motion.p>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative flex flex-col rounded-3xl bg-surface p-8 shadow-sm border border-accent/20"
                        >
                            <div className="mb-6 text-accent">
                                <Quote size={40} className="opacity-20" />
                            </div>

                            <p className="mb-8 flex-1 italic text-text/80">
                                {`"${testimonial.text}"`}
                            </p>

                            <div className="mt-auto">
                                <div className="mb-3 flex gap-1 text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={16} className="fill-accent text-accent" />
                                    ))}
                                </div>
                                <h4 className="font-serif font-semibold text-text">{testimonial.name}</h4>
                                <span className="text-sm text-text/60">{testimonial.role}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
