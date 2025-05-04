
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      {/* Навигационная панель */}
      <nav className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Coins" className="text-purple-600" size={28} />
            <span className="font-bold text-xl text-purple-900">МемКоин Остров</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-purple-900 hover:text-purple-700 font-medium">Главная</Link>
            <Link to="/" className="text-purple-900 hover:text-purple-700 font-medium">О проекте</Link>
            <Link to="/" className="text-purple-900 hover:text-purple-700 font-medium">Дорожная карта</Link>
            <Link to="/" className="text-purple-900 hover:text-purple-700 font-medium">Команда</Link>
          </div>
          
          <Button className="bg-purple-700 hover:bg-purple-800">
            Инвестировать
            <Icon name="ArrowRight" className="ml-2" size={16} />
          </Button>
        </div>
      </nav>

      {/* Основной контент */}
      <main>
        <HeroSection />
        <FeaturesSection />
        
        {/* Секция почему стоит инвестировать */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-12">
              Почему стоит инвестировать в наш мемкоин?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-purple-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Высокий потенциал роста</h3>
                <p className="text-gray-700">Наш мемкоин находится на ранней стадии развития, что предоставляет уникальную возможность для раннего входа и максимизации потенциальной прибыли.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Shield" className="text-purple-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Надежная экосистема</h3>
                <p className="text-gray-700">Мы строим целый остров возможностей на базе нашего мемкоина с различными утилитами, проектами и интеграциями.</p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-purple-700" size={24} />
                </div>
                <h3 className="text-xl font-bold text-purple-900 mb-2">Сильное сообщество</h3>
                <p className="text-gray-700">За нашим проектом стоит активное сообщество энтузиастов, которые поддерживают развитие и популяризацию нашего мемкоина.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Призыв к действию */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Готовы присоединиться к нашему острову мемкоинов?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Не упустите шанс стать частью революционного проекта, который меняет будущее цифровых активов.</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-800 hover:bg-gray-100">
                Купить токены
                <Icon name="CreditCard" className="ml-2" size={18} />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Подробнее о проекте
                <Icon name="FileText" className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Подвал */}
      <footer className="bg-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Coins" size={24} />
                <span className="font-bold text-xl">МемКоин Остров</span>
              </div>
              <p className="max-w-md text-purple-200">Присоединяйтесь к нашему сообществу и станьте частью революции мемкоинов, которая меняет будущее цифровых активов.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">Проект</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-purple-200 hover:text-white">О нас</Link></li>
                  <li><Link to="/" className="text-purple-200 hover:text-white">Дорожная карта</Link></li>
                  <li><Link to="/" className="text-purple-200 hover:text-white">Команда</Link></li>
                  <li><Link to="/" className="text-purple-200 hover:text-white">Токеномика</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4">Ресурсы</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-purple-200 hover:text-white">Whitepaper</Link></li>
                  <li><Link to="/" className="text-purple-200 hover:text-white">FAQ</Link></li>
                  <li><Link to="/" className="text-purple-200 hover:text-white">Блог</Link></li>
                  <li><Link to="/" className="text-purple-200 hover:text-white">Поддержка</Link></li>
                </ul>
              </div>
              
              <div className="col-span-2 md:col-span-1">
                <h3 className="font-bold mb-4">Контакты</h3>
                <div className="flex gap-4 mb-4">
                  <a href="#" className="hover:text-purple-300"><Icon name="Twitter" size={20} /></a>
                  <a href="#" className="hover:text-purple-300"><Icon name="Telegram" size={20} /></a>
                  <a href="#" className="hover:text-purple-300"><Icon name="Github" size={20} /></a>
                  <a href="#" className="hover:text-purple-300"><Icon name="Instagram" size={20} /></a>
                </div>
                <p className="text-purple-200">Email: info@memcoin-island.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-purple-800 pt-6 text-center text-purple-300">
            <p>© 2025 МемКоин Остров. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
