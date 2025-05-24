
import { Button } from '@/components/ui/button';
import { ArrowRight, Shield, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary via-auto-black-900 to-auto-black-950 text-white">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Encontre o <span className="text-accent">Carro dos Seus Sonhos</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-auto-gray-200 animate-fade-in">
            Na AutoFácil, oferecemos os melhores carros seminovos com garantia, 
            facilidade de pagamento e atendimento personalizado.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-auto-green-600 text-white px-8 py-3 text-lg"
            >
              Ver Estoque <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Garantia Estendida</h3>
              <p className="text-auto-gray-200">Todos os carros com garantia de até 12 meses</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Qualidade Certificada</h3>
              <p className="text-auto-gray-200">Veículos revisados e aprovados por nossa equipe</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Atendimento Personalizado</h3>
              <p className="text-auto-gray-200">Equipe especializada para te ajudar na melhor escolha</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Promotional Banner */}
      <div className="bg-accent py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-semibold">
            🎉 PROMOÇÃO ESPECIAL: Financiamento em até 60x sem entrada! 
            <span className="ml-2 underline cursor-pointer">Saiba mais</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
