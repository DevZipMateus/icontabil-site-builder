import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Endereço",
      content: "Rua Quintino Bocaiuva, 27 - Cidade Nova",
      content2: "Porto União - SC, CEP 89400-000"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefone",
      content: "(42) 3523-2405",
      link: "tel:+554235232405"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-mail",
      content: "icontabil01@gmail.com",
      link: "mailto:icontabil01@gmail.com"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Horário de atendimento",
      content: "Segunda a Sexta",
      content2: "8:00 às 17:30"
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Entre em contato
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground">
            Estamos prontos para atender você e oferecer as melhores soluções contábeis para o seu negócio.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index}
                className="hover:shadow-lg transition-all duration-300 animate-slide-up border-border/60 hover:border-primary/40"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">{info.icon}</div>
                  <h3 className="font-semibold text-foreground mb-3">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <>
                      <p className="text-sm text-muted-foreground">{info.content}</p>
                      {info.content2 && (
                        <p className="text-sm text-muted-foreground">{info.content2}</p>
                      )}
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <Card className="overflow-hidden animate-scale-in shadow-lg">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.8889!2d-51.0797!3d-26.2392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e6508da6e0b8f9%3A0x7e8f8c8f8f8f8f8f!2sRua%20Quintino%20Bocaiuva%2C%2027%20-%20Cidade%20Nova%2C%20Porto%20Uni%C3%A3o%20-%20SC%2C%2089400-000!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização ICONTABIL LTDA"
                  className="w-full"
                ></iframe>
              </CardContent>
            </Card>

            <div className="space-y-6 animate-fade-in">
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Agende uma reunião
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Entre em contato conosco pelo WhatsApp e agende uma reunião para conhecer nossas soluções contábeis personalizadas.
                  </p>
                  <a
                    href="https://wa.me/554235232405"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg hover:bg-accent transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105 w-full"
                  >
                    <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6" />
                    Falar no WhatsApp
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    Siga-nos nas redes sociais
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/icontabil_/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-muted transition-all duration-300 flex-1 justify-center border border-border/60 hover:border-primary/60"
                      aria-label="Instagram da ICONTABIL"
                    >
                      <Instagram className="w-5 h-5" />
                      <span className="font-medium">Instagram</span>
                    </a>
                    <a
                      href="https://www.facebook.com/icontabil.contabilidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-muted transition-all duration-300 flex-1 justify-center border border-border/60 hover:border-primary/60"
                      aria-label="Facebook da ICONTABIL"
                    >
                      <Facebook className="w-5 h-5" />
                      <span className="font-medium">Facebook</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
