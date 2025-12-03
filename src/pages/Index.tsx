import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface Slide {
  id: number;
  title: string;
  content: string[];
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Правовые основы экологии',
    content: [
      'Добро пожаловать в интерактивный курс',
      'Изучите правовые аспекты охраны окружающей среды',
      'Узнайте об ответственности и правах граждан'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 2,
    title: 'Что такое экологическое право?',
    content: [
      'Экологическое право — это совокупность правовых норм, регулирующих отношения в области охраны окружающей среды',
      'Основная цель: обеспечение благоприятной окружающей среды',
      'Регулирует взаимодействие общества и природы',
      'Устанавливает правила природопользования'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/d1337243-ca92-4ef6-b02c-1e7470ebcfc8.jpg'
  },
  {
    id: 3,
    title: 'Источники экологического права',
    content: [
      'Конституция Российской Федерации',
      'Федеральные законы (ФЗ «Об охране окружающей среды»)',
      'Указы Президента РФ и постановления Правительства РФ',
      'Международные договоры',
      'Региональные и муниципальные нормативные акты'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/d1337243-ca92-4ef6-b02c-1e7470ebcfc8.jpg'
  },
  {
    id: 4,
    title: 'Конституционные основы',
    content: [
      'Статья 42: Право на благоприятную окружающую среду',
      'Статья 58: Обязанность сохранять природу и окружающую среду',
      'Статья 9: Земля и природные ресурсы как основа жизни',
      'Конституция гарантирует экологические права граждан'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/d1337243-ca92-4ef6-b02c-1e7470ebcfc8.jpg'
  },
  {
    id: 5,
    title: 'Ключевые федеральные законы',
    content: [
      'ФЗ-7 «Об охране окружающей среды» (2002)',
      'ФЗ-96 «Об охране атмосферного воздуха» (1999)',
      'Водный кодекс РФ',
      'Лесной кодекс РФ',
      'ФЗ «О животном мире»',
      'ФЗ «Об экологической экспертизе»'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 6,
    title: 'Принципы экологического права',
    content: [
      'Устойчивое развитие и охрана природы',
      'Платность природопользования',
      'Презумпция экологической опасности',
      'Обязательность оценки воздействия на окружающую среду',
      'Участие граждан в принятии экологических решений',
      'Ответственность за экологический вред'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 7,
    title: 'Объекты охраны окружающей среды',
    content: [
      'Земли, недра, почвы',
      'Поверхностные и подземные воды',
      'Леса и иная растительность',
      'Животные и другие организмы',
      'Атмосферный воздух, озоновый слой',
      'Природные комплексы и особо охраняемые территории'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/12e4acb4-11f8-4859-8fc1-221d4ce9a219.jpg'
  },
  {
    id: 8,
    title: 'Экологические права граждан',
    content: [
      'Право на благоприятную окружающую среду',
      'Право на достоверную информацию о состоянии среды',
      'Право на возмещение ущерба здоровью',
      'Право на участие в экологических мероприятиях',
      'Право обращаться в органы власти по экологическим вопросам',
      'Право на судебную защиту экологических прав'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/12e4acb4-11f8-4859-8fc1-221d4ce9a219.jpg'
  },
  {
    id: 9,
    title: 'Ответственность за экологические правонарушения',
    content: [
      'Административная ответственность (штрафы, приостановка деятельности)',
      'Уголовная ответственность (за тяжкие преступления)',
      'Гражданско-правовая (возмещение ущерба)',
      'Дисциплинарная ответственность работников',
      'Принцип: загрязнитель платит'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 10,
    title: 'Заключение и выводы',
    content: [
      'Экологическое право защищает природу и права граждан',
      'Каждый обязан бережно относиться к окружающей среде',
      'Знание своих прав помогает их защищать',
      'Экологическая грамотность — основа устойчивого развития',
      'Будущее планеты зависит от каждого из нас'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/12e4acb4-11f8-4859-8fc1-221d4ce9a219.jpg'
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const progress = ((currentSlide + 1) / slides.length) * 100;

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary to-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold text-primary">
              Правовые основы экологии
            </h1>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden"
            >
              <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>
                Модуль {currentSlide + 1} из {slides.length}
              </span>
              <span>{Math.round(progress)}% завершено</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </div>

      <div className="flex pt-32 pb-8">
        <aside
          className={`fixed lg:sticky top-32 left-0 h-[calc(100vh-8rem)] w-64 bg-white shadow-lg transition-transform duration-300 z-40 overflow-y-auto ${
            menuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
        >
          <div className="p-4">
            <h2 className="font-semibold text-lg mb-4 text-foreground">
              Содержание курса
            </h2>
            <nav className="space-y-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                    currentSlide === index
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-secondary text-foreground'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        currentSlide === index
                          ? 'bg-primary-foreground text-primary'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span className="text-sm leading-tight">{slide.title}</span>
                  </div>
                </button>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1 px-4 lg:px-8 max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-2xl animate-fade-in">
            <div className="relative h-80 overflow-hidden">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h2 className="text-4xl font-bold text-white mb-2">
                  {slides[currentSlide].title}
                </h2>
              </div>
            </div>

            <div className="p-8 lg:p-12 bg-white">
              <ul className="space-y-4">
                {slides[currentSlide].content.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-lg text-foreground animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon
                      name="CheckCircle2"
                      className="text-primary flex-shrink-0 mt-1"
                      size={24}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-center justify-between gap-4">
                <Button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  variant="outline"
                  size="lg"
                  className="gap-2"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Назад
                </Button>

                <div className="flex gap-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        currentSlide === index
                          ? 'bg-primary w-8'
                          : 'bg-muted hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Перейти к слайду ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  onClick={nextSlide}
                  disabled={currentSlide === slides.length - 1}
                  size="lg"
                  className="gap-2"
                >
                  {currentSlide === slides.length - 1 ? 'Завершить' : 'Далее'}
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </div>
          </Card>

          {currentSlide === slides.length - 1 && (
            <Card className="mt-8 p-8 bg-primary text-primary-foreground animate-fade-in">
              <div className="text-center">
                <Icon
                  name="Award"
                  className="mx-auto mb-4"
                  size={64}
                />
                <h3 className="text-2xl font-bold mb-2">
                  Поздравляем с завершением курса!
                </h3>
                <p className="text-lg opacity-90">
                  Вы изучили все модули правовых основ экологии
                </p>
              </div>
            </Card>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;
