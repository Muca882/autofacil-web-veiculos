
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Gauge, Phone } from 'lucide-react';

interface CarCardProps {
  id: number;
  name: string;
  price: number;
  year: number;
  mileage: number;
  image: string;
  description: string;
  isPromotional?: boolean;
}

const CarCard = ({ 
  name, 
  price, 
  year, 
  mileage, 
  image, 
  description, 
  isPromotional = false 
}: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO', {
      style: 'currency',
      currency: 'AOA'
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('pt-AO').format(mileage);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-auto-gray-200">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        {isPromotional && (
          <Badge className="absolute top-3 left-3 bg-accent text-white">
            PROMOÇÃO
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-auto-black-950 mb-2">{name}</h3>
        <p className="text-auto-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-auto-gray-500 text-sm">
            <Calendar className="h-4 w-4 mr-1" />
            {year}
          </div>
          <div className="flex items-center text-auto-gray-500 text-sm">
            <Gauge className="h-4 w-4 mr-1" />
            {formatMileage(mileage)} km
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-accent">{formatPrice(price)}</p>
            <p className="text-sm text-auto-gray-500">À vista ou financiado</p>
          </div>
          <Button className="bg-primary hover:bg-auto-black-900 text-white">
            <Phone className="h-4 w-4 mr-2" />
            Contato
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CarCard;
