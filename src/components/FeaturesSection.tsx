
import Icon from "@/components/ui/icon";

const FeaturesSection = () => {
  const features = [
    {
      icon: "Rocket",
      title: "Экспоненциальный рост",
      description: "Мемкоин с ограниченной эмиссией и растущим спросом — идеальная формула для впечатляющего роста стоимости."
    },
    {
      icon: "Shield",
      title: "Проверенная безопасность",
      description: "Смарт-контракт прошел полный аудит безопасности, гарантируя защиту ваших инвестиций."
    },
    {
      icon: "Zap",
      title: "Быстрые транзакции",
      description: "Моментальные переводы с минимальными комиссиями благодаря современной блокчейн-инфраструктуре."
    },
    {
      icon: "Users",
      title: "Крупное сообщество",
      description: "Более 10,000 активных участников сообщества, поддерживающих проект в социальных сетях."
    },
    {
      icon: "Trophy",
      title: "Реальная польза",
      description: "В отличие от большинства мемкоинов, наш проект предлагает реальные сервисы внутри экосистемы."
    },
    {
      icon: "Gift",
      title: "Эксклюзивные бонусы",
      description: "Раннее инвестирование открывает доступ к редким NFT, эйрдропам и специальным мероприятиям."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">УНИКАЛЬНОЕ ПРЕДЛОЖЕНИЕ</span>
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mt-4 mb-4">
            Преимущества нашего мемкоина
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Мы объединили лучшие аспекты мемкоинов с профессиональным подходом к развитию проекта
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100 hover:border-purple-300"
            >
              <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Icon name={feature.icon} className="text-purple-700" size={24} />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
        
        {/* Токеномика */}
        <div className="mt-20 bg-gradient-to-r from-purple-100 to-purple-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
                Токеномика островного мемкоина
              </h3>
              <p className="text-gray-700 mb-6">
                Справедливое распределение токенов и прозрачные правила создают идеальный баланс между стабильностью и потенциалом роста.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Общий запас</p>
                  <p className="text-xl font-bold text-purple-900">1,000,000,000</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Продажа инвесторам</p>
                  <p className="text-xl font-bold text-purple-900">45%</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Листинг на биржах</p>
                  <p className="text-xl font-bold text-purple-900">Июль 2025</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-sm">
                  <p className="text-sm text-gray-600">Сжигание токенов</p>
                  <p className="text-xl font-bold text-purple-900">2% при транзакциях</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-purple-400/30 animate-pulse absolute -z-10 blur-xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80" 
                  alt="Мемкоин токен" 
                  className="w-56 h-56 object-cover rounded-full border-8 border-white shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
