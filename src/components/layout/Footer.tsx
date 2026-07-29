import { siteConfig } from "@/config/siteConfig";
import { MessageCircle, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
    // Formata o link do WhatsApp com o número vindo do siteConfig
    const whatsappLink = `https://wa.me/${siteConfig.global.whatsappNumber}`;

    return (
        <footer className="bg-surface py-12 text-text/80 border-t border-accent/10">
            <div className="container mx-auto px-6 grid gap-8 md:grid-cols-3">
                <div>
                    <div className="mb-4">
                        <Image
                            src={siteConfig.global.logoImage}
                            alt={siteConfig.global.brandName}
                            width={64}
                            height={64}
                            className="w-16 h-16 object-contain rounded-full shadow-sm"
                        />
                    </div>
                    <p className="text-sm max-w-xs text-text/60">Unhas impecáveis para você se sentir ainda mais confiante todos os dias.</p>
                </div>

                <div className="space-y-3 text-sm">
                    {/* Link do Instagram */}
                    <a href={siteConfig.global.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg> Instagram
                    </a>

                    {/* Substituído o E-mail pelo WhatsApp */}
                    <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
                        <MessageCircle size={18} /> WhatsApp: +55 (14) 98137-3898
                    </a>

                    {/* Endereço / Localização */}
                    <p className="flex items-center gap-2"><MapPin size={18} /> {siteConfig.global.location.address} {siteConfig.global.location.neighborhood}, {siteConfig.global.location.city}</p>
                </div>

                <div className="text-sm text-text/60 md:text-right flex flex-col justify-end">
                    <p>&copy; {new Date().getFullYear()} {siteConfig.global.brandName}. Todos os direitos reservados.</p>
                </div>
                <p className="mt-2 text-xs">
                    Desenvolvido por{" "}
                    <a
                        href="https://pouskdev.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold font-medium hover:text-gold-dark transition-colors underline-offset-2 hover:underline"
                    >
                        pouskDEV
                    </a>
                </p>
            </div>
        </footer>
    );
}