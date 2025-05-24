
import { Card, CardContent } from '@/components/ui/card';
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    {
      icon: Award,
      number: '15+',
      label: 'Anos de Experiência',
      description: 'Tradição no mercado automotivo'
    },
    {
      icon: Users,
      number: '5000+',
      label: 'Clientes Satisfeitos',
      description: 'Confiança conquistada'
    },
    {
      icon: Clock,
      number: '500+',
      label: 'Carros Vendidos/Ano',
      description: 'Resultado comprovado'
    },
    {
      icon: ThumbsUp,
      number: '98%',
      label: 'Índice de Satisfação',
      description: 'Qualidade garantida'
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-gray-800 mb-4">
            Sobre a AutoFácil
          </h2>
          <p className="text-lg text-auto-gray-600 max-w-3xl mx-auto">
            Há mais de 15 anos no mercado, a AutoFácil se consolidou como uma das principais 
            concessionárias de carros seminovos da região, oferecendo qualidade, 
            transparência e o melhor atendimento aos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-auto-gray-800 mb-6">
              Nossa Missão
            </h3>
            <p className="text-auto-gray-600 mb-6">
              Facilitar a realização do sonho do carro próprio, oferecendo veículos 
              de qualidade com total transparência, preços justos e condições de 
              pagamento que cabem no seu bolso.
            </p>
            
            <h3 className="text-2xl font-bold text-auto-gray-800 mb-6">
              Por que Escolher a AutoFácil?
            </h3>
            <ul className="space-y-3 text-auto-gray-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Todos os carros passam por rigorosa revisão técnica
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Garantia estendida em todos os veículos
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Facilidade de financiamento em até 60x
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Equipe especializada e atendimento personalizado
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                Pós-venda com suporte completo
              </li>
            </ul>
          </div>
          
          <div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop" 
              alt="Loja AutoFácil"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-auto-gray-800 mb-2">{stat.label}</h4>
                <p className="text-sm text-auto-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
