
import { Car, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-auto-black-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-accent" />
              <span className="text-2xl font-bold">AutoFácil</span>
            </div>
            <p className="text-auto-gray-300">
              Sua concessionária de confiança há mais de 15 anos. 
              Realizando sonhos com qualidade e transparência.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-auto-gray-400 hover:text-accent cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-auto-gray-400 hover:text-accent cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-auto-gray-400 hover:text-accent cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-auto-gray-300 hover:text-accent transition-colors">Início</a></li>
              <li><a href="#estoque" className="text-auto-gray-300 hover:text-accent transition-colors">Estoque</a></li>
              <li><a href="#sobre" className="text-auto-gray-300 hover:text-accent transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-auto-gray-300 hover:text-accent transition-colors">Contato</a></li>
              <li><a href="#" className="text-auto-gray-300 hover:text-accent transition-colors">Financiamento</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-auto-gray-300 text-sm">
                  Rua Kwame Nkrumah, 234<br />Maianga - Luanda/Angola
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-auto-gray-300 text-sm">+244 923 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-auto-gray-300 text-sm">contato@autofacil.ao</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-accent" />
                <div className="text-auto-gray-300 text-sm">
                  <p>Seg - Sex: 8h às 18h</p>
                  <p>Sábado: 8h às 16h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-auto-gray-700 mt-12 pt-8 text-center">
          <p className="text-auto-gray-400 text-sm">
            © 2024 AutoFácil. Todos os direitos reservados. 
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-accent transition-colors">Termos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
