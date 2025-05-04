
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Zap",
      title: "Молниеносные транзакции",
      description: "Наша инфраструктура обеспечивает мгновенные переводы между пользователями с минимальными комиссиями."
    },
    {
      icon: "Lock",
      title: "Надежная защита",
      description: "Безопасность и прозрачность - наши главные приоритеты. Все транзакции защищены передовыми технологиями."
    },
    {
      icon: "TrendingUp",
      title: "Потенциал роста",
      description: "Ограниченная эмиссия токенов и растущий спрос создают отличные перспективы для долгосрочных инвесторов."
    },
    {
      icon: "Users",
      title: "Активное сообщество",
      description: "Присоединяйтесь к растущему сообществу энтузиастов, которые вместе строят будущее криптоэкономики."
    },
    {
      icon: "Gift",
      title: "Эксклюзивные награды",
      description: "Держатели токенов получают доступ к уникальным возможностям, предложениям и бонусам нашей экосистемы."
    },
    {
      icon: "Layers",
      title: "Многофункциональная экосистема",
      description: "Развиваем полноценную экосистему с разнообразными сервисами, играми и приложениями."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-4">
            Особенности нашего мемкоина
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Мы создаем не просто еще один мемкоин, а целую экосистему с реальной пользой и перспективами роста
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-purple-100"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Icon name={feature.icon} className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-2">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-purple-100 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
                Токеномика и распределение
              </h3>
              <p className="text-gray-700 mb-6">
                Наш мемкоин имеет прозрачную и справедливую токеномику, разработанную для долгосрочного роста и стабильности проекта.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Общее предложение</p>
                  <p className="text-xl font-bold text-purple-900">1,000,000,000</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Цена предпродажи</p>
                  <p className="text-xl font-bold text-purple-900">$0.00012</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Ликвидность</p>
                  <p className="text-xl font-bold text-purple-900">40% заблокировано</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Дата листинга</p>
                  <p className="text-xl font-bold text-purple-900">Q3 2025</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-64">
                <div className="absolute inset-0 rounded-full bg-purple-200 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Токен" 
                    className="w-48 h-48 object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
