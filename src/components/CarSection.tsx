
import CarCard from './CarCard';

const CarSection = () => {
  const cars = [
    {
      id: 1,
      name: "Honda Civic 2.0 EXL",
      price: 89000,
      year: 2020,
      mileage: 35000,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      description: "Sedã executivo com motor 2.0, câmbio CVT, completo com bancos de couro.",
      isPromotional: true
    },
    {
      id: 2,
      name: "Toyota Corolla Cross XRE",
      price: 95000,
      year: 2021,
      mileage: 28000,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      description: "SUV compacto, flex, automático, central multimídia e câmera de ré."
    },
    {
      id: 3,
      name: "Volkswagen T-Cross Highline",
      price: 78000,
      year: 2020,
      mileage: 42000,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      description: "SUV urbano com motor 1.4 TSI, turbo, ideal para cidade e viagens."
    },
    {
      id: 4,
      name: "Hyundai HB20S Evolution",
      price: 65000,
      year: 2021,
      mileage: 25000,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      description: "Sedã compacto econômico, automático, ar condicionado e direção elétrica.",
      isPromotional: true
    },
    {
      id: 5,
      name: "Jeep Renegade Sport",
      price: 105000,
      year: 2021,
      mileage: 38000,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      description: "SUV robusto, automático, tração dianteira, perfeito para aventuras."
    },
    {
      id: 6,
      name: "Chevrolet Onix Premier",
      price: 72000,
      year: 2022,
      mileage: 15000,
      image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?w=500&h=300&fit=crop",
      description: "Hatch top de linha, turbo, automático, central multimídia de 8 polegadas."
    }
  ];

  return (
    <section id="estoque" className="py-16 bg-auto-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-auto-gray-800 mb-4">
            Nosso Estoque de Carros
          </h2>
          <p className="text-lg text-auto-gray-600 max-w-2xl mx-auto">
            Confira nossa seleção de carros seminovos revisados e com garantia. 
            Todos os veículos passam por rigorosa inspeção de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <CarCard key={car.id} {...car} />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-auto-gray-600 mb-6">
            Não encontrou o que procura? Temos mais opções disponíveis!
          </p>
          <a 
            href="#contato"
            className="inline-block bg-primary hover:bg-auto-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Ver Estoque Completo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CarSection;
