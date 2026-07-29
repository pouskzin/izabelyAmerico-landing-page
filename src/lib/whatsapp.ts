import { siteConfig } from "@/config/siteConfig";

// Declaração global para o TypeScript reconhecer o dataLayer sem usar 'any'
declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
    }
}

export const createWhatsAppLink = (customMessage?: string) => {
    const baseNumber = siteConfig.global.whatsappNumber;
    const defaultMessage = "Olá! Acessei o site e gostaria de realizar um agendamento.";

    const text = customMessage || defaultMessage;
    const encodedText = encodeURIComponent(text);

    return `https://wa.me/${baseNumber}?text=${encodedText}`;
};

export const handleWhatsAppClick = (eventName: string, customMessage?: string) => {
    // Disparo de evento de Analytics (GTM/GA4/Meta Pixel)
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'whatsapp_click',
            interaction_type: eventName
        });
    }

    const link = createWhatsAppLink(customMessage);
    window.open(link, '_blank', 'noopener,noreferrer');
};