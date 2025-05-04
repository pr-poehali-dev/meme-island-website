
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 overflow-hidden relative">
      {/* Декоративные элементы */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-400 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-900 mb-6 leading-tight">
              Откройте для себя Остров МемКоинов
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Инвестируйте в будущее цифровых активов с первым мемкоином, 
              построенным на принципах сообщества, инноваций и устойчивого роста.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Присоединиться к предпродаже
                <Icon name="Rocket" className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                Посмотреть презентацию
                <Icon name="PlayCircle" className="ml-2" size={18} />
              </Button>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center text-purple-700 font-medium">
                    {i}
                  </div>
                ))}
              </div>
              <div>
                <p className="font-medium text-purple-900">Уже <span className="text-purple-700 font-bold">1,240+</span> инвесторов</p>
                <p className="text-sm text-gray-600">Присоединяйтесь сейчас и получите бонус!</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-200">
              <img 
                src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Остров мемкоинов" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Декоративные элементы вокруг изображения */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full scale-90 rounded-3xl border-2 border-dashed border-purple-300 -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-purple-100 rounded-xl rotate-12 -z-20"></div>
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 rounded-lg -rotate-12 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
