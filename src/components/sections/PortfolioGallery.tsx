'use client';

import { siteConfig } from '@/config/siteConfig';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function PortfolioGallery() {
    return (
        <section id="portfolio" className="bg-background py-24">
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl font-bold text-text md:text-4xl"
                    >
                        Portfólio Editorial
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mx-auto mt-4 max-w-xl text-text/70"
                    >
                        Arte, precisão e luxo em cada detalhe.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="columns-2 gap-4 md:columns-3 space-y-4"
                >
                    {siteConfig.portfolio.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // Alternar entre proporções para um efeito Masonry real
                            className={`group relative overflow-hidden rounded-2xl break-inside-avoid shadow-md border border-text/5 ${
                                index % 3 === 0 ? 'aspect-[3/4]' : index % 2 === 0 ? 'aspect-[4/5]' : 'aspect-square'
                            }`}
                        >
                            <Image
                                src={imgSrc}
                                alt={`Trabalho de Nail Design ${index + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                                draggable={false}
                                onContextMenu={(e) => e.preventDefault()}
                            />
                            {/* Overlay escuro elegante no hover */}
                            <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
