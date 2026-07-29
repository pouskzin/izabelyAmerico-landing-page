'use client';

import { siteConfig } from '@/config/siteConfig';
import { handleWhatsAppClick } from '@/lib/whatsapp';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import Image from 'next/image';

// Define explicit types to avoid TS inference issues when mapping
type ServiceItem = {
    id: string;
    name: string;
    description: string;
    duration: string;
    price: string;
    maintenancePrice?: string;
    whatsappMessage: string;
    image?: string;
};

type AdditionalService = {
    name: string;
    price: string;
};

export function ServicesGrid() {
    // Assert types safely sem modificar a inferência global
    const services = siteConfig.services as ServiceItem[];
    const additionalServices = siteConfig.additionalServices as AdditionalService[] | undefined;

    return (
        <section id="servicos" className="py-24 bg-surface border-t border-accent/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl font-bold text-text mb-4">Serviços Exclusivos</h2>
                    <p className="text-text/70 max-w-xl mx-auto">Técnicas especializadas para realçar a beleza natural das suas mãos.</p>
                </div>

                {/* Grid Principal */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col justify-between rounded-2xl border border-accent/20 bg-background shadow-sm transition-shadow hover:shadow-xl overflow-hidden"
                        >
                            {/* Imagem do Serviço */}
                            {service.image && (
                                <div className="relative h-48 w-full bg-surface/50">
                                    <Image
                                        src={service.image}
                                        alt={service.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover pointer-events-none select-none"
                                        draggable={false}
                                        onContextMenu={(e) => e.preventDefault()}
                                    />
                                </div>
                            )}

                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="font-serif text-2xl font-semibold text-text mb-2">{service.name}</h3>
                                <p className="text-sm text-text/70 mb-6 flex-1">{service.description}</p>

                                <div className="flex flex-col border-b border-text/5 pb-4 mb-6 gap-3">
                                    <div className="flex items-center justify-between">
                                        <span className="flex items-center gap-2 text-sm text-text/60">
                                            <Clock size={16} className="text-accent" /> {service.duration}
                                        </span>
                                        <div className="text-right">
                                            {service.maintenancePrice ? (
                                                <span className="text-xs text-text/60 uppercase tracking-wider block mb-0.5">Aplicação</span>
                                            ) : null}
                                            <span className="font-medium text-accent">{service.price}</span>
                                        </div>
                                    </div>

                                    {service.maintenancePrice && (
                                        <div className="flex items-center justify-between pt-2 border-t border-text/5">
                                            <span className="text-sm text-text/60"></span>
                                            <div className="text-right">
                                                <span className="text-[0.65rem] text-text/50 uppercase tracking-wider block mb-0.5">Manutenção</span>
                                                <span className="text-sm font-medium text-text/80">{service.maintenancePrice}</span>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <button
                                    onClick={() => handleWhatsAppClick(`service_${service.id}`, service.whatsappMessage)}
                                    className="w-full rounded-xl bg-accent py-3 font-medium text-white shadow-md shadow-accent/20 transition-all hover:bg-accent/90 mt-auto"
                                >
                                    Agendar este serviço
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Serviços Adicionais */}
                {additionalServices && additionalServices.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-24 max-w-2xl mx-auto"
                    >
                        <div className="text-center mb-10">
                            <h3 className="font-serif text-3xl font-bold text-text mb-2">Serviços Adicionais</h3>
                        </div>

                        <div className="bg-background rounded-3xl p-8 border border-accent/20 shadow-sm">
                            <ul className="space-y-5">
                                {additionalServices.map((item, index) => (
                                    <li key={index} className="flex items-end gap-4">
                                        <span className="font-medium text-text/90">{item.name}</span>
                                        <div className="flex-1 border-b-2 border-dotted border-text/15 mb-1.5"></div>
                                        <span className="font-medium text-accent">{item.price}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 text-center">
                                <button
                                    onClick={() => handleWhatsAppClick('additional_services', 'Olá! Gostaria de agendar um dos serviços adicionais.')}
                                    className="rounded-full bg-accent px-8 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-all hover:scale-105 hover:bg-accent/90"
                                >
                                    Agendar Serviço Adicional
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
}