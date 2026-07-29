'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { useState } from 'react';

const formSchema = z.object({
    name: z.string().min(2, 'Nome deve ter no mínimo 2 caracteres'),
    phone: z.string().min(11, 'WhatsApp inválido'),
});

export function LeadForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        // Simular chamada de API/Supabase (aqui você conecta seu endpoint /api/leads)
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Lead captured:", data);
        setIsSubmitted(true);
    };

    return (
        <section className="bg-background py-24">
            <div className="container mx-auto px-6 max-w-xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-3xl bg-white p-10 shadow-2xl text-center"
                >
                    <h2 className="font-serif text-3xl font-bold text-text mb-4">Lista VIP</h2>
                    <p className="text-text/70 mb-8">Não quer agendar agora? Deixe seu contato para receber dicas, novas tendências e promoções exclusivas.</p>

                    {isSubmitted ? (
                        <div className="p-6 bg-green-50 text-green-700 rounded-xl">
                            Obrigada! Seu contato foi salvo com sucesso. 💕
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">
                            <div>
                                <label className="block text-sm font-medium text-text mb-1">Seu Nome</label>
                                <input
                                    {...register('name')}
                                    className="w-full rounded-xl border border-text/10 bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                    placeholder="Como gostaria de ser chamada?"
                                />
                                {errors.name && <span className="text-xs text-red-500 mt-1">{errors.name.message?.toString()}</span>}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text mb-1">WhatsApp</label>
                                <input
                                    {...register('phone')}
                                    className="w-full rounded-xl border border-text/10 bg-background px-4 py-3 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                                    placeholder="(00) 00000-0000"
                                />
                                {errors.phone && <span className="text-xs text-red-500 mt-1">{errors.phone.message?.toString()}</span>}
                            </div>

                            <div className="flex items-start gap-2 pt-2">
                                <input type="checkbox" required className="mt-1" id="consent" />
                                <label htmlFor="consent" className="text-xs text-text/60">
                                    Concordo em receber mensagens pelo WhatsApp. Seus dados estão seguros.
                                </label>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full rounded-xl bg-accent py-4 font-medium text-white shadow-md shadow-accent/20 transition-all hover:opacity-90 disabled:opacity-50 mt-4"
                            >
                                {isSubmitting ? 'Enviando...' : 'Quero entrar para a Lista VIP'}
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
}