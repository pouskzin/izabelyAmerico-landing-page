'use client';

import { siteConfig } from '@/config/siteConfig';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function About() {
    return (
        <section id="sobre" className="bg-background py-24">
            <div className="container mx-auto px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Coluna 1: Imagem */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none order-first"
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-white/40 shadow-xl backdrop-blur-sm border border-white/50">
                            <Image
                                src="/izaAmerico.png"
                                alt={siteConfig.global.professionalName}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                draggable={false}
                                onContextMenu={(e) => e.preventDefault()}
                                className="object-cover pointer-events-none select-none"
                            />
                        </div>
                    </motion.div>

                    {/* Coluna 2: Conteúdo */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex flex-col space-y-8"
                    >
                        <h2 className="font-serif text-4xl font-bold leading-tight text-text md:text-5xl">
                            {siteConfig.about.title.split('Izabely').map((part, i, arr) => (
                                <span key={i}>
                                    {part}
                                    {i < arr.length - 1 && <span className="text-accent italic">Izabely</span>}
                                </span>
                            ))}
                        </h2>

                        <p className="text-lg leading-relaxed text-text/80">
                            {siteConfig.about.bio}
                        </p>

                        <div className="space-y-4 pt-4">
                            <h3 className="text-sm font-medium uppercase tracking-wider text-text/60">
                                Especialidades
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {siteConfig.about.specialties.map((specialty, index) => (
                                    <span
                                        key={index}
                                        className="rounded-full bg-background border border-accent/30 px-4 py-2 text-sm font-medium text-accent shadow-sm"
                                    >
                                        {specialty}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
