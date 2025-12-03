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
  updates?: string[];
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Quiz {
  slideId: number;
  questions: Question[];
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'Правовые основы экологии',
    content: [
      'Добро пожаловать в интерактивный курс по правовым основам экологии',
      'Курс разработан для изучения системы правового регулирования охраны окружающей среды в Российской Федерации',
      'Вы узнаете о конституционных гарантиях экологических прав, ключевых законодательных актах и механизмах защиты природы',
      'Изучите виды ответственности за экологические правонарушения и способы защиты своих экологических прав',
      'Материал основан на действующем законодательстве РФ и международных нормах экологического права',
      'Курс будет полезен студентам, юристам, экологам и всем, кто интересуется охраной окружающей среды'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 2,
    title: 'Что такое экологическое право?',
    content: [
      'Экологическое право — это комплексная отрасль права, представляющая собой систему правовых норм, регулирующих общественные отношения в сфере взаимодействия общества и природы',
      'Предмет регулирования: отношения по охране окружающей среды, рациональному использованию природных ресурсов, обеспечению экологической безопасности',
      'Основная цель: достижение гармоничных отношений между обществом и природой, сохранение природных систем для нынешнего и будущих поколений',
      'Метод правового регулирования включает императивные (запреты, предписания) и диспозитивные (дозволения) способы воздействия',
      'Экологическое право тесно связано с конституционным, административным, гражданским и уголовным правом',
      'Особенность: сочетание публично-правовых и частноправовых начал в регулировании экологических отношений',
      'Включает нормы о предупреждении экологического вреда, экологическом контроле, экспертизе и мониторинге состояния окружающей среды'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/d1337243-ca92-4ef6-b02c-1e7470ebcfc8.jpg'
  },
  {
    id: 3,
    title: 'Источники экологического права',
    content: [
      'Конституция РФ (принята 12.12.1993) — высший источник, закрепляет право на благоприятную окружающую среду (ст. 42), обязанность охраны природы (ст. 58)',
      'Федеральный закон №7-ФЗ "Об охране окружающей среды" (от 10.01.2002) — базовый закон, определяющий правовые основы государственной политики в области охраны природы',
      'ФЗ-96 "Об охране атмосферного воздуха" (от 04.05.1999), ФЗ-174 "Об экологической экспертизе" (от 23.11.1995), ФЗ-52 "О животном мире" (от 24.04.1995), ФЗ-33 "Об особо охраняемых природных территориях" (от 14.03.1995)',
      'Кодифицированные акты: Земельный кодекс РФ (от 25.10.2001), Водный кодекс РФ (от 03.06.2006), Лесной кодекс РФ (от 04.12.2006), Градостроительный кодекс РФ (от 29.12.2004)',
      'Указы Президента РФ и постановления Правительства РФ (например, о государственных программах охраны окружающей среды)',
      'Международные договоры РФ: Конвенция о биологическом разнообразии (1992), Киотский протокол (1997), Парижское соглашение по климату (2015)',
      'Региональные законы субъектов РФ и муниципальные правовые акты в пределах их компетенции',
      'Нормативные акты федеральных органов исполнительной власти (Минприроды, Росприроднадзор, Ростехнадзор)'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/d1337243-ca92-4ef6-b02c-1e7470ebcfc8.jpg'
  },
  {
    id: 4,
    title: 'Конституционные основы',
    content: [
      'Статья 42 Конституции РФ: каждый имеет право на благоприятную окружающую среду, достоверную информацию о её состоянии и на возмещение ущерба здоровью или имуществу экологическим правонарушением',
      'Статья 58 Конституции РФ: каждый обязан сохранять природу и окружающую среду, бережно относиться к природным богатствам',
      'Статья 9: земля и другие природные ресурсы используются и охраняются как основа жизни и деятельности народов, проживающих на соответствующей территории',
      'Статья 36: владение, пользование и распоряжение землёй и природными ресурсами осуществляется свободно, если это не наносит ущерба окружающей среде',
      'Статья 71-72: разграничение полномочий между РФ и субъектами в области природопользования и охраны окружающей среды',
      'Конституционные нормы имеют прямое действие и высшую юридическую силу по отношению ко всем другим правовым актам',
      'Конституционный Суд РФ в своих постановлениях неоднократно подтверждал приоритет конституционных экологических прав граждан'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/d1337243-ca92-4ef6-b02c-1e7470ebcfc8.jpg'
  },
  {
    id: 5,
    title: 'Ключевые федеральные законы',
    content: [
      'ФЗ-7 "Об охране окружающей среды" (от 10.01.2002) — устанавливает правовые основы государственной политики, принципы охраны природы, права и обязанности граждан и организаций',
      'ФЗ-96 "Об охране атмосферного воздуха" (от 04.05.1999) — регулирует отношения по предотвращению и снижению вредных воздействий на атмосферу, устанавливает нормативы выбросов',
      'Водный кодекс РФ (от 03.06.2006) — определяет порядок использования водных объектов, охрану водных ресурсов, водоохранные зоны',
      'Лесной кодекс РФ (от 04.12.2006) — регулирует лесные отношения, устанавливает виды использования лесов, меры по их охране и защите',
      'ФЗ-52 "О животном мире" (от 24.04.1995) — устанавливает правовой режим охраны и использования объектов животного мира и среды их обитания',
      'ФЗ-174 "Об экологической экспертизе" (от 23.11.1995) — закрепляет обязательность проведения государственной экологической экспертизы для определённых видов деятельности',
      'ФЗ-33 "Об особо охраняемых природных территориях" (от 14.03.1995) — устанавливает категории ООПТ (заповедники, национальные парки, заказники)',
      'ФЗ-89 "Об отходах производства и потребления" (от 24.06.1998) — регулирует обращение с отходами всех классов опасности'
    ],
    updates: [
      'ФЗ-7: последние изменения от 08.08.2024 — усилена ответственность за экологические правонарушения, введены новые требования к экологическому мониторингу',
      'ФЗ-89: изменения от 24.06.2023 — введена расширенная ответственность производителей (РОП) для всех категорий товаров, новые нормативы утилизации',
      'Водный кодекс: изменения от 04.08.2023 — ужесточены требования к сбросам сточных вод, расширены водоохранные зоны',
      'Лесной кодекс: изменения от 19.12.2023 — усилен контроль за использованием лесов, новые правила лесовосстановления'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 6,
    title: 'Принципы экологического права',
    content: [
      'Соблюдение права человека на благоприятную окружающую среду — основополагающий принцип, закреплённый в Конституции РФ',
      'Обеспечение благоприятных условий жизнедеятельности человека — государство гарантирует создание экологически безопасной среды обитания',
      'Научно обоснованное сочетание экологических, экономических и социальных интересов — принцип устойчивого развития',
      'Платность природопользования — установление платы за использование природных ресурсов и негативное воздействие на окружающую среду',
      'Презумпция экологической опасности планируемой хозяйственной деятельности — любая деятельность потенциально опасна, пока не доказано обратное',
      'Обязательность оценки воздействия на окружающую среду (ОВОС) и государственной экологической экспертизы — предупредительный механизм',
      'Обязательность возмещения вреда окружающей среде — принцип "загрязнитель платит"',
      'Независимость государственного экологического контроля (надзора) от экономических интересов',
      'Участие граждан и общественных объединений в решении задач охраны окружающей среды',
      'Международное сотрудничество в области охраны окружающей среды'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 7,
    title: 'Объекты охраны окружающей среды',
    content: [
      'Земли всех категорий, недра, почвы — защита от деградации, эрозии, загрязнения, истощения, необоснованного изъятия из оборота',
      'Поверхностные и подземные воды — охрана водных объектов от загрязнения, засорения, истощения, установление водоохранных зон',
      'Леса и иная растительность — защита от незаконных рубок, пожаров, вредителей, сохранение биологического разнообразия лесных экосистем',
      'Животные и другие организмы, их генетический фонд — охрана редких и находящихся под угрозой исчезновения видов, мест обитания',
      'Атмосферный воздух, озоновый слой атмосферы — предотвращение загрязнения, установление нормативов выбросов, защита озонового слоя',
      'Природные ландшафты и комплексы — сохранение естественных экологических систем, природных ландшафтов и природных комплексов',
      'Особо охраняемые природные территории (ООПТ) — заповедники, национальные парки, заказники, памятники природы с особым правовым режимом',
      'Континентальный шельф и исключительная экономическая зона РФ — морские биоресурсы, минеральные ресурсы, защита морской среды',
      'Объекты, имеющие особое природоохранное, научное, историко-культурное, эстетическое, рекреационное значение'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/12e4acb4-11f8-4859-8fc1-221d4ce9a219.jpg'
  },
  {
    id: 8,
    title: 'Экологические права граждан',
    content: [
      'Право на благоприятную окружающую среду (ст. 42 Конституции) — основное экологическое право, включающее право на чистый воздух, воду, безопасную среду обитания',
      'Право на достоверную информацию о состоянии окружающей среды — доступ к данным мониторинга, результатам проверок, экологическим паспортам предприятий',
      'Право на возмещение ущерба, причинённого здоровью или имуществу экологическим правонарушением — через суд или в добровольном порядке',
      'Право создавать общественные объединения для охраны окружающей среды — экологические организации, движения, фонды',
      'Право направлять обращения в органы государственной власти по вопросам охраны природы — письменные и устные обращения, петиции',
      'Право принимать участие в собраниях, митингах, демонстрациях, шествиях по экологическим вопросам — реализация права на мирные собрания',
      'Право принимать участие в общественных обсуждениях проектов, которые могут оказать негативное воздействие на окружающую среду',
      'Право на участие в проведении общественной экологической экспертизы — альтернатива государственной экспертизе',
      'Право обращаться в суд за защитой экологических прав — индивидуально или через общественные организации',
      'Право на экологическое образование — получение знаний об окружающей среде, экологической безопасности, устойчивом развитии'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/12e4acb4-11f8-4859-8fc1-221d4ce9a219.jpg'
  },
  {
    id: 9,
    title: 'Ответственность за экологические правонарушения',
    content: [
      'Административная ответственность (КоАП РФ, глава 8) — за нарушение правил охраны окружающей среды. Санкции: предупреждение, штрафы (от 2 тыс. до 1 млн руб. для организаций), конфискация орудий правонарушения, приостановление деятельности до 90 суток',
      'Уголовная ответственность (УК РФ, глава 26) — за экологические преступления: загрязнение вод (ст. 250), атмосферы (ст. 251), морской среды (ст. 252), незаконную рубку лесов (ст. 260), незаконную охоту (ст. 258). Наказания: штрафы, исправительные работы, лишение свободы до 8 лет',
      'Гражданско-правовая ответственность — возмещение вреда окружающей среде в полном объёме, включая упущенную выгоду. Вред возмещается добровольно или по решению суда. Исковая давность — 20 лет',
      'Дисциплинарная ответственность работников — за нарушение экологических требований при исполнении трудовых обязанностей (замечание, выговор, увольнение)',
      'Принцип "загрязнитель платит" — основа экономического механизма охраны природы. Лицо, причинившее вред, обязано его возместить',
      'Специальная ответственность за вред, причинённый источником повышенной опасности — независимо от вины владельца',
      'Материальная ответственность за экологический вред определяется по таксам, методикам исчисления ущерба или фактическим затратам на восстановление',
      'Солидарная ответственность нескольких причинителей вреда — каждый отвечает перед потерпевшим за весь причинённый вред',
      'Регресс — право лица, возместившего вред, потребовать возмещения с непосредственного причинителя'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/b3252498-16e6-4289-8b3b-1ca75c32d5d5.jpg'
  },
  {
    id: 10,
    title: 'Заключение и выводы',
    content: [
      'Экологическое право РФ представляет собой развитую систему правовых норм, обеспечивающих защиту окружающей среды и экологических прав граждан',
      'Конституционное закрепление права на благоприятную окружающую среду и обязанности её охранять создаёт правовую основу для экологической деятельности государства и общества',
      'Система экологического законодательства постоянно совершенствуется с учётом новых экологических вызовов и международного опыта',
      'Знание экологического законодательства позволяет гражданам эффективно защищать свои права, участвовать в принятии экологически значимых решений',
      'Экологическая грамотность и правовая культура населения — необходимое условие реализации концепции устойчивого развития',
      'Эффективная охрана окружающей среды возможна только при активном участии граждан, общественных организаций, бизнеса и государства',
      'Будущее планеты зависит от того, насколько ответственно мы относимся к природе сегодня, соблюдаем экологическое законодательство и передаём экологические ценности следующим поколениям',
      'Экологическое право — это не только система запретов, но и механизм обеспечения баланса между экономическим развитием и сохранением природы для будущих поколений'
    ],
    image: 'https://cdn.poehali.dev/projects/f54f90fb-f631-4b4c-8d3c-81cb244567ef/files/12e4acb4-11f8-4859-8fc1-221d4ce9a219.jpg'
  }
];

const quizzes: Quiz[] = [
  {
    slideId: 2,
    questions: [
      {
        id: 1,
        question: 'Что является предметом экологического права?',
        options: [
          'Только отношения по охране окружающей среды',
          'Отношения по охране окружающей среды, рациональному использованию природных ресурсов и обеспечению экологической безопасности',
          'Только использование природных ресурсов',
          'Отношения между государствами по охране природы'
        ],
        correctAnswer: 1,
        explanation: 'Экологическое право регулирует весь комплекс отношений: охрану окружающей среды, рациональное использование природных ресурсов и обеспечение экологической безопасности.'
      },
      {
        id: 2,
        question: 'Какая основная цель экологического права?',
        options: [
          'Максимальная эксплуатация природных ресурсов',
          'Достижение гармоничных отношений между обществом и природой',
          'Запрет хозяйственной деятельности',
          'Получение прибыли от природопользования'
        ],
        correctAnswer: 1,
        explanation: 'Основная цель — достижение гармоничных отношений между обществом и природой, сохранение природных систем для нынешнего и будущих поколений.'
      }
    ]
  },
  {
    slideId: 3,
    questions: [
      {
        id: 1,
        question: 'Когда была принята Конституция РФ?',
        options: ['10.01.2002', '12.12.1993', '04.05.1999', '24.04.1995'],
        correctAnswer: 1,
        explanation: 'Конституция РФ была принята 12 декабря 1993 года на всенародном референдуме.'
      },
      {
        id: 2,
        question: 'Какой ФЗ является базовым законом в области охраны окружающей среды?',
        options: [
          'ФЗ-96 "Об охране атмосферного воздуха"',
          'ФЗ-7 "Об охране окружающей среды"',
          'ФЗ-174 "Об экологической экспертизе"',
          'ФЗ-89 "Об отходах производства и потребления"'
        ],
        correctAnswer: 1,
        explanation: 'ФЗ-7 "Об охране окружающей среды" от 10.01.2002 — базовый закон, определяющий правовые основы государственной политики в области охраны природы.'
      }
    ]
  },
  {
    slideId: 4,
    questions: [
      {
        id: 1,
        question: 'Какая статья Конституции РФ закрепляет право на благоприятную окружающую среду?',
        options: ['Статья 9', 'Статья 36', 'Статья 42', 'Статья 58'],
        correctAnswer: 2,
        explanation: 'Статья 42 Конституции РФ: каждый имеет право на благоприятную окружающую среду, достоверную информацию о её состоянии и на возмещение ущерба.'
      },
      {
        id: 2,
        question: 'Что устанавливает статья 58 Конституции РФ?',
        options: [
          'Право на природопользование',
          'Обязанность сохранять природу и окружающую среду',
          'Право собственности на природные ресурсы',
          'Разграничение полномочий между РФ и субъектами'
        ],
        correctAnswer: 1,
        explanation: 'Статья 58 Конституции РФ устанавливает обязанность каждого сохранять природу и окружающую среду, бережно относиться к природным богатствам.'
      }
    ]
  },
  {
    slideId: 6,
    questions: [
      {
        id: 1,
        question: 'Что означает принцип "загрязнитель платит"?',
        options: [
          'Штраф за загрязнение окружающей среды',
          'Обязательность возмещения вреда окружающей среде',
          'Платность природопользования',
          'Экологический налог'
        ],
        correctAnswer: 1,
        explanation: 'Принцип "загрязнитель платит" означает обязательность возмещения вреда окружающей среде лицом, причинившим этот вред.'
      },
      {
        id: 2,
        question: 'Что такое презумпция экологической опасности?',
        options: [
          'Любая деятельность запрещена',
          'Любая деятельность потенциально опасна, пока не доказано обратное',
          'Деятельность разрешена без ограничений',
          'Только промышленная деятельность опасна'
        ],
        correctAnswer: 1,
        explanation: 'Презумпция экологической опасности означает, что любая планируемая хозяйственная деятельность считается потенциально опасной, пока не доказано обратное.'
      }
    ]
  },
  {
    slideId: 8,
    questions: [
      {
        id: 1,
        question: 'Какое право закреплено в статье 42 Конституции РФ?',
        options: [
          'Право на природопользование',
          'Право на благоприятную окружающую среду',
          'Право на участие в экологических организациях',
          'Право на экологическое образование'
        ],
        correctAnswer: 1,
        explanation: 'Статья 42 закрепляет право на благоприятную окружающую среду — основное экологическое право граждан.'
      },
      {
        id: 2,
        question: 'Имеют ли граждане право на участие в общественной экологической экспертизе?',
        options: [
          'Нет, это право только государственных органов',
          'Да, это право закреплено законом',
          'Только через общественные организации',
          'Только для специалистов-экологов'
        ],
        correctAnswer: 1,
        explanation: 'Граждане имеют право на участие в проведении общественной экологической экспертизы как альтернативы государственной.'
      }
    ]
  },
  {
    slideId: 9,
    questions: [
      {
        id: 1,
        question: 'Какая глава КоАП РФ содержит составы административных правонарушений в области охраны окружающей среды?',
        options: ['Глава 6', 'Глава 7', 'Глава 8', 'Глава 9'],
        correctAnswer: 2,
        explanation: 'Глава 8 КоАП РФ содержит административные правонарушения в области охраны окружающей среды и природопользования.'
      },
      {
        id: 2,
        question: 'Какова исковая давность для возмещения вреда окружающей среде?',
        options: ['3 года', '10 лет', '20 лет', 'Не ограничена'],
        correctAnswer: 2,
        explanation: 'Исковая давность для возмещения вреда окружающей среде составляет 20 лет, что позволяет привлечь к ответственности даже спустя значительное время.'
      }
    ]
  }
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizResults, setQuizResults] = useState<{ [key: number]: number }>({});

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
    setShowQuiz(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const currentQuiz = quizzes.find(q => q.slideId === slides[currentSlide].id);
  const hasQuiz = currentQuiz !== undefined;

  const handleStartQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleCheckAnswer = () => {
    setShowExplanation(true);
    if (currentQuiz && selectedAnswer === currentQuiz.questions[currentQuestionIndex].correctAnswer) {
      setQuizResults(prev => ({
        ...prev,
        [slides[currentSlide].id]: (prev[slides[currentSlide].id] || 0) + 1
      }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuiz && currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setShowQuiz(false);
      setCurrentQuestionIndex(0);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
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

              {slides[currentSlide].updates && slides[currentSlide].updates!.length > 0 && (
                <div className="mt-8 p-6 bg-accent/10 rounded-lg border-l-4 border-accent">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="AlertCircle" className="text-accent" size={24} />
                    <h3 className="text-xl font-semibold text-accent">
                      Последние изменения в законодательстве
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {slides[currentSlide].updates!.map((update, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-base text-foreground"
                      >
                        <Icon
                          name="Calendar"
                          className="text-accent flex-shrink-0 mt-0.5"
                          size={18}
                        />
                        <span>{update}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {hasQuiz && !showQuiz && (
                <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border-2 border-primary/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Icon name="BookOpen" className="text-primary" size={32} />
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">Проверьте свои знания</h3>
                        <p className="text-sm text-muted-foreground">Пройдите тест по материалу модуля</p>
                      </div>
                    </div>
                    <Button onClick={handleStartQuiz} size="lg" className="gap-2">
                      <Icon name="Play" size={20} />
                      Начать тест
                    </Button>
                  </div>
                </div>
              )}

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

          {showQuiz && currentQuiz && (
            <Card className="mt-8 p-8 bg-white shadow-2xl animate-fade-in">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground">Тест по модулю</h3>
                  <Button variant="ghost" size="icon" onClick={() => setShowQuiz(false)}>
                    <Icon name="X" size={20} />
                  </Button>
                </div>
                <Progress value={((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100} className="h-2" />
                <p className="text-sm text-muted-foreground mt-2">
                  Вопрос {currentQuestionIndex + 1} из {currentQuiz.questions.length}
                </p>
              </div>

              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-foreground">
                  {currentQuiz.questions[currentQuestionIndex].question}
                </h4>

                <div className="space-y-3">
                  {currentQuiz.questions[currentQuestionIndex].options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQuiz.questions[currentQuestionIndex].correctAnswer;
                    const showResult = showExplanation;

                    return (
                      <button
                        key={index}
                        onClick={() => !showExplanation && handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                          showResult
                            ? isCorrect
                              ? 'border-green-500 bg-green-50'
                              : isSelected
                              ? 'border-red-500 bg-red-50'
                              : 'border-gray-200 bg-gray-50'
                            : isSelected
                            ? 'border-primary bg-primary/10'
                            : 'border-gray-200 hover:border-primary/50 hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold ${
                              showResult
                                ? isCorrect
                                  ? 'bg-green-500 text-white'
                                  : isSelected
                                  ? 'bg-red-500 text-white'
                                  : 'bg-gray-300 text-gray-600'
                                : isSelected
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-gray-200 text-gray-600'
                            }`}
                          >
                            {showResult && isCorrect ? (
                              <Icon name="Check" size={16} />
                            ) : showResult && isSelected ? (
                              <Icon name="X" size={16} />
                            ) : (
                              String.fromCharCode(65 + index)
                            )}
                          </div>
                          <span className="text-base">{option}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg animate-fade-in">
                    <div className="flex items-start gap-2">
                      <Icon name="Info" className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="font-semibold text-blue-900 mb-1">Пояснение:</p>
                        <p className="text-blue-800">{currentQuiz.questions[currentQuestionIndex].explanation}</p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center pt-4">
                  {!showExplanation ? (
                    <Button
                      onClick={handleCheckAnswer}
                      disabled={selectedAnswer === null}
                      size="lg"
                      className="ml-auto gap-2"
                    >
                      Проверить
                      <Icon name="CheckCircle2" size={20} />
                    </Button>
                  ) : (
                    <Button onClick={handleNextQuestion} size="lg" className="ml-auto gap-2">
                      {currentQuestionIndex < currentQuiz.questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
                      <Icon name="ArrowRight" size={20} />
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          )}

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