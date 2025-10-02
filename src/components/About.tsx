import { Target, Award, Users, TrendingUp, Shield, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Qualidade e precisão",
      description: "Garantir serviços contábeis confiáveis, atualizados e executados com rigor técnico."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Atendimento personalizado",
      description: "Oferecer soluções sob medida para cada cliente, respeitando suas necessidades e particularidades."
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Ética e transparência",
      description: "Conduzir todos os processos com clareza, responsabilidade e integridade."
    },
    {
      icon: <Sparkles className="w-8 h-8 text-primary" />,
      title: "Inovação e atualização constante",
      description: "Manter-se sempre atualizado com as legislações e tecnologias para oferecer serviços modernos e eficientes."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "Parceria e proximidade",
      description: "Estar próximo do cliente, entendendo seu negócio para contribuir com seu crescimento."
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Compromisso regional",
      description: "Valorizar o desenvolvimento econômico das cidades onde atuamos, fortalecendo empresas e empreendedores locais."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sobre nós
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="max-w-5xl mx-auto mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 shadow-lg animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-10 h-10 text-primary" />
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">Nossa missão</h3>
              </div>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Prestar serviços contábeis de excelência, personalizados e inovadores, garantindo soluções sob medida para empresas e empreendedores das cidades de Porto União (SC), União da Vitória (PR) e Cruz Machado (PR). Desde 2017, atuamos com compromisso, ética e transparência, auxiliando nossos clientes a alcançarem resultados sólidos e sustentáveis.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Nossos valores
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border/60 hover:border-primary/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">{value.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
