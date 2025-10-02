import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-background via-secondary/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            ICONTABIL LTDA
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 leading-relaxed">
            Soluções contábeis personalizadas e inovadoras para o crescimento sustentável do seu negócio
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Desde 2017, oferecemos serviços de excelência com ética, transparência e comprometimento para empresas e empreendedores de Porto União-SC, União da Vitória-PR e Cruz Machado-PR.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <a
              href="https://wa.me/554235232405"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-accent transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 w-full sm:w-auto text-center"
            >
              Solicite um orçamento
            </a>
            
            <a
              href="#contact"
              className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg hover:bg-muted transition-all duration-300 font-semibold border border-border/60 hover:border-primary/60 w-full sm:w-auto text-center"
            >
              Saiba mais
            </a>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm md:text-base">
            <a 
              href="tel:+554235232405" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Phone size={20} />
              <span>(42) 3523-2405</span>
            </a>
            
            <span className="hidden sm:block text-border">|</span>
            
            <a 
              href="mailto:icontabil01@gmail.com" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={20} />
              <span>icontabil01@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
