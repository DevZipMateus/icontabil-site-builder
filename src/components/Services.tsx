import { Calculator, FileText, TrendingUp, Users, Building2, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Calculator className="w-10 h-10 text-primary" />,
      title: "Contabilidade geral",
      description: "Escrituração contábil completa, incluindo balancetes, balanços patrimoniais e demonstrativos de resultados para sua empresa."
    },
    {
      icon: <FileText className="w-10 h-10 text-primary" />,
      title: "Assessoria tributária",
      description: "Planejamento tributário estratégico para otimização fiscal e cumprimento de todas as obrigações acessórias."
    },
    {
      icon: <Users className="w-10 h-10 text-primary" />,
      title: "Departamento pessoal",
      description: "Gestão completa de folha de pagamento, admissões, demissões, férias e todas as obrigações trabalhistas."
    },
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      title: "Abertura de empresas",
      description: "Assessoria completa para abertura de empresas, desde o registro até o enquadramento tributário mais adequado."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-primary" />,
      title: "Consultoria empresarial",
      description: "Análise de viabilidade, planejamento financeiro e orientações estratégicas para o crescimento do seu negócio."
    },
    {
      icon: <ClipboardCheck className="w-10 h-10 text-primary" />,
      title: "Regularização fiscal",
      description: "Apoio na regularização de pendências fiscais e adequação às normas contábeis e tributárias vigentes."
    }
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-gradient-to-br from-secondary/30 via-background to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Oferecemos uma gama completa de serviços de assessoria contábil, personalizados para atender as necessidades específicas do seu negócio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-scale-in group border-border/60 hover:border-primary/40"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Precisa de uma solução específica para o seu negócio?
          </p>
          <a
            href="https://wa.me/554235232405"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-accent transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
          >
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
