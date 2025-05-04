
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
              Остров Мемкоинов — Новая Эра Криптоинвестиций
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Добро пожаловать на самый перспективный криптоостров! Наш мемкоин объединяет 
              креативность интернет-культуры с реальной пользой и инвестиционным потенциалом.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-700 hover:bg-purple-800">
                Инвестировать сейчас
                <Icon name="Rocket" className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                Whitepaper
                <Icon name="FileText" className="ml-2" size={18} />
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
                <p className="font-medium text-purple-900">Уже <span className="text-purple-700 font-bold">2,500+</span> инвесторов</p>
                <p className="text-sm text-gray-600">Присоединяйтесь к сообществу мемкоинов!</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-purple-200">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Остров мемкоинов" 
                className="w-full h-auto"
              />
            </div>
            
            {/* Информация о токене */}
            <div className="absolute -bottom-6 right-10 bg-white rounded-lg shadow-lg p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="bg-purple-100 rounded-full p-2">
                  <Icon name="Coins" className="text-purple-700" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600">Текущая цена</p>
                  <p className="font-bold text-purple-900">$0.00045</p>
                </div>
              </div>
            </div>
            
            {/* Плашка роста */}
            <div className="absolute -top-4 left-8 bg-green-100 rounded-lg shadow-lg p-3 z-20">
              <div className="flex items-center gap-2">
                <Icon name="TrendingUp" className="text-green-600" size={16} />
                <span className="font-bold text-green-700">+125% за неделю</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
