'use client';

import { siteConfig } from '@/config/siteConfig';
import * as Accordion from '@radix-ui/react-accordion';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React from 'react';

export function FAQ() {
    return (
        <section id="faq" className="bg-surface py-24 border-y border-accent/5">
            <div className="container mx-auto px-6 max-w-3xl">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="font-serif text-3xl font-bold text-text md:text-4xl"
                    >
                        Dúvidas Frequentes
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    <Accordion.Root
                        type="single"
                        collapsible
                        className="space-y-4"
                    >
                        {siteConfig.faq.map((item, index) => (
                            <Accordion.Item
                                key={index}
                                value={`item-${index}`}
                                className="overflow-hidden rounded-2xl border border-accent/20 bg-background shadow-sm"
                            >
                                <Accordion.Header className="flex">
                                    <Accordion.Trigger className="group flex flex-1 cursor-pointer items-center justify-between p-6 text-left outline-none transition-colors hover:bg-accent/5 focus:bg-accent/5">
                                        <span className="font-medium text-text">{item.question}</span>
                                        <ChevronDown
                                            className="text-accent transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                                            aria-hidden
                                        />
                                    </Accordion.Trigger>
                                </Accordion.Header>
                                <Accordion.Content className="overflow-hidden text-text/70 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                                    <div className="p-6 pt-0 leading-relaxed">
                                        {item.answer}
                                    </div>
                                </Accordion.Content>
                            </Accordion.Item>
                        ))}
                    </Accordion.Root>
                </motion.div>
            </div>
        </section>
    );
}
