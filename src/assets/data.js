let id = 0;

//     Меню

const linksMenu = [
  // {
  //   id: id++,
  //   text: 'Для кого',
  //   url: '#',
  // },
  {
    id: id++,
    text: "О курсе",
    url: "#kyrs",
  },
  {
    id: id++,
    text: "Мини-курс",
    url: "#minikyrs",
  },
  {
    id: id++,
    text: "Программа",
    url: "#programma",
  },
  {
    id: id++,
    text: "О нас",
    url: "#onas",
  },
  // {
  //   id: id++,
  //   text: 'Уроки',
  //   url: '#yroki',
  // },
  {
    id: id++,
    text: "Отзывы",
    url: "#otzivi",
  },
];

//     Слайдеры  Эксперты

const slideExpert = [
  {
    id: id++,
    image: "/media/slideExpert1.png",
    title: "Филимонова Оксана Сергеевна",
    subtitle:
      'Директор центра, кандидат педагогических наук, доцент по специальности "Теория и методика физического воспитания, спортивной тренировки, оздоровительной и адаптивной физической культуры"',
    listText: [
      "Автор 52\u00A0научных работ, из них 10\u00A0учебно-методических пособий и 2\u00A0монографии",
      "Опыт преподавания в Кубанском государственном университете физической культуры, спорта и туризма 14\u00A0лет, в том числе 5\u00A0лет в должности доцента",
      'Опыт работы в сфере фитнеса 20\u00A0лет, в том числе в должности зам. директора фитнес-клуба "Fit Line" - 10\u00A0лет',
      "Преподавание курсов по подготовке инструкторов по фитнесу с 2010\u00A0года",
      'Автор курсов по подготовке инструкторов по фитнесу "Детский фитнес", "Фитнес в перинатальном периоде", "Фитнес-йога", "Стретчинг", "Диагностика физического состояния в фитнесе"',
    ],
    listMobileText: [
      'Директор центра, кандидат педагогических наук, доцент по специальности "Теория и методика физического воспитания, спортивной тренировки, оздоровительной и адаптивной физической культуры"',
      'Опыт работы в сфере фитнеса 20\u00A0лет, в том числе в должности зам. директора фитнес-клуба "Fit Line" - 10\u00A0лет',
      "Преподавание курсов по подготовке инструкторов по фитнесу с 2010\u00A0года",
    ],
  },
  {
    id: id++,
    image: "/media/slideExpert2.png",
    title: "Марина Сергеевна Мирошниченко",
    subtitle: "Врач-терапевт, диетолог, кардиолог",
    listText: [
      "Закончила Кубанскую государственную медицинскую академию в 2005 году, интернатура по терапии, специализации - диетология и кардиология. ",
      "Является диетологом проекта Fitness Baby.",
      "Большой опыт составления индивидуальных и групповых программ питания.",
    ],
    listMobileText: [
      "Врач-терапевт, диетолог, кардиолог",
      "Закончила Кубанскую государственную медицинскую академию в 2005 году, интернатура по терапии, специализации - диетология и кардиология. ",
      "Является диетологом проекта Fitness Baby.",
      "Большой опыт составления индивидуальных и групповых программ питания.",
    ],
  },
  {
    id: id++,
    image: "/media/slideExpert3.png",
    title: "Саида Адамовна Евтых",
    subtitle:
      "Специалист по физической культуре и спорту, педагог-психолог, фитнес-тренер",
    listText: [
      "Выпускница кафедры физкультурно-оздоровительных технологий Кубанского государственного университета физической культуры, спорта и туризма - квалификация специалист по физической культуре и спорту (2007)",
      "Кандидат педагогических наук (2012)",
      "Сертифицированный тренер по фитнес-йоге, аэройоге, аэробике, силовому тренингу, аквааэробике, системе Пилатес.",
      "Автор 30 научных работ и публикаций.",
      'Переподготовка по программе "Психолого-педагогическое образование" (2015)',
      "Психолог по направлениям: телесно-ориентированная терапия, арт-терапия психосоматических расстройств, архетипическая психотерапия, психотерапия с применением карт Таро, перинатальная психотерапия",
    ],
    listMobileText: [
      "Специалист по физической культуре и спорту, педагог-психолог, фитнес-тренер",
      "Кандидат педагогических наук (2012)",
      "Психолог по направлениям: телесно-ориентированная терапия, арт-терапия психосоматических расстройств, архетипическая психотерапия, психотерапия с применением карт Таро, перинатальная психотерапия",
    ],
  },
  {
    id: id++,
    image: "/media/slideExpert4.png",
    title: "Анастасия Сергеевна Королева",
    subtitle: "SMM-маркетолог, графический дизайнер",
    listText: [
      "Выпускница кафедры физкультурно-оздоровительных технологий Кубанского государственного университета физической культуры, спорта и туризма - квалификация специалист по физической культуре и спорту (2013)",
      "Сертифицированный тренер по фитнес-йоге, стретчингу, степ-аэробике, силовому тренингу, детскому фитнесу и персональный тренер тренажерного зала, опыт работы фитнес-тренером 5 лет",
      "Сертифицированный специалист в области маркетинга в социальных сетях (2021)",
      "Графический дизайнер с 2021 г.",
    ],
    listMobileText: [
      "Выпускница кафедры физкультурно-оздоровительных технологий КГУФКСТ (2013)",
      "Сертифицированный тренер по фитнесу",
      "Сертифицированный специалист в области маркетинга в социальных сетях (2021)",
      "Графический дизайнер с 2021 г.",
    ],
  },
];

//     Слайдер  Примеры уроков Йога
const sliderLessonYougaMobile = [
  {
    id: id++,
    src: "https://kinescope.io/embed/5ZTzcqjxSXFP3Mz5t2JJMA?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/hjsQjxTK7B2faBw8p9HkoQ?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/tEfDGJfkbikepWgF7GnZ9R?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/v6Mo8c5tuEbWCnAp28b8Bh?preload=0",
  },
];

const sliderLessonYouga = [
  {
    id: id++,
    src: "https://kinescope.io/embed/8mqUyr5BTDC5zsmHAHUVJG?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/tEfDGJfkbikepWgF7GnZ9R?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/vSxieF2F3dM8xrnvQkpNzX?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/hjsQjxTK7B2faBw8p9HkoQ?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/12Qu6X5e7PPsRYCQwwbVEN?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/gKgNoVi7eEC53r3bkJF55X?preload=0",
  },
  {
    id: id++,
    src: "https://kinescope.io/embed/jWXLmutK13nFLEYXKX9m3D?preload=0",
  },
];

//     Слайдер  Отзывы
const sliderReviewYouga = [
  {
    id: id++,
    image: "/media/Yoga/slide-review1.jpg",
    listText: [
      'Закончила в "Эксперте" обучение по направлению "Тренер психорегулирующих фитнес-программ" и осталась полностью довольна полученными знаниями в теоретической и практической частях. А самое главное, что уже через месяц обучения я устроилась на работу тренером по своему направлению и начала исполнять свою давнешнюю мечту ✨',
      "Хочу выразить благодарность Оксане Сергеевне за каждую минуту времени, которое она вложила в нас. Её профессионализм в сочетании с доброжелательностью и позитивом создали наилучшие условия для развития и совершенствования в данном центре. Благодарю.",
    ],
    name: "Милина Мещерякова",
    date: "21 июня 2024г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review2-1.jpg",
    listText: [
      "Это были потрясающие 3 месяца обучения 🔥🔥🔥 Все занятия проходили на высшем уровне и с индивидуальным грамотным подходом к каждому ученику. Углублённое изучение теории и практики: анатомия и физиология 🤍, фитнес-йога и стретчинг ❤️‍🔥  Отдельно спасибо моей группе, которая собралась из хороших, понимающих и позитивных людей!  Хочу выразить благодарность нашему видео и фото оператору Олегу, который всегда присутствовал на наших занятиях и делал классные кадры!  И, огромное спасибо моему преподавателю Оксане Сергеевне! ❤️❤️❤️ Ваш позитивный настрой, бесконечно большой объём теоретических и практических знаний, способность сложные вещи показать и объяснить простым языком - дают понять, что вы лучший преподаватель! Я на самом деле рада, что пришла за знаниями именно к вам ☀️☀️☀️",
    ],
    name: "Анастасия Шевченко",
    date: "22 января 2024г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review3-1.jpg",
    listText: [
      "Обучение по всем критериям на высшем уровне. Качество обучения, отношение к людям, атмосфера, учебные пособия, помещение и, конечно, самое главное - преподаватель от Бога. Все просто 10 из 5! Большинство из полученных знаний уже применила в работе в своих тренировках, много нового, много полезной информации из практического реального опыта педагога Оксаны Сергеевны (кстати она преподавала в институте физкультуры долгое время, так что человек всю жизнь в спорте, профессионал и в теории, и в практике). Программы есть и для тех, кто повышает квалификацию, и для тех, кто хочет получить переподготовку в области спорта и сменить профессию работать в спорте. Диплом о проф.переподготовке тут официальный!!! Регистрируется в гос.реестре. Это дает право ведения новой деятельности, то есть новую профессию. И с таким дипломом вас возьмут в хороший крупный фитнес-клуб.",
    ],
    name: "Ирина Башлыкова",
    date: "28 апреля 2022г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review4-1.jpg",
    listText: [
      "Благодарна от всего сердца Оксане Сергеевне за три месяца обучения!!!Было очень продуктивно! Я очень рада , что попала именно к ней , все выстроено грамотно , доступно и очень интересно! Много важного матерьяла , курс организован потрясающе ! Не ожидала , что будет и психологический взгляд на работу тренера с клиентами , как выстраивать конструктивные отношения , чтобы выигрывали все . Плюс практика очень много дала . Оксана Сергеевна показывала и объясняла каждое упражнение , на какие влияет мышцы и какой дает результат. Очень насыщенная программа , кто хочет стать хорошим тренером, рекомендую идти в Эксперт. Не пожалеете !!!",
    ],
    name: "Светлана Перешеина",
    date: "27 июня 2024г.",
  },

  {
    id: id++,
    image: "/media/Yoga/slide-review5.jpg",
    listText: [
      "Я выбирала из многих школ йоги, и рада, что остановилась на этой! Теперь я точно знаю, что такое НАСТОЯЩИЙ преподаватель по йоге— такую высокую планку задала нам Оксана Сергеевна — наш ментор, наставник, Преподаватель и Тренер с большой буквы. Даже не представляла, что смогу получить столько знаний за такой короткий срок. Оксана Сергеевна от занятия к занятию разжевывала нам анатомию, физиологию, теорию и методику преподавания, спортивную медицину! А какие грамотные методические пособия нам выдали: не просто для зубрежки, а для освоения материала через обдумывание, записи и практику.  Очень рекомендую обучение именно здесь. Даже если вы не хотите преподавать, а просто хотите углубить личную практику — уверена, что пойдет на пользу! Знаний получила в разы больше, чем заплатила денег. За демократичные цены — отдельная благодарность.",
    ],
    name: "Светлана Перешеина",
    date: "27 июня 2024г.",
  },

  {
    id: id++,
    image: "/media/Yoga/slide-review6.jpg",
    listText: [
      "Подошли к концу 3 месяца нашего обучения Оксана Сергеевна - лучший проводник в мир тренерской деятельности. Программа превзошла все мои ожидания. Анатомия, несмотря на всю сложность ее изучения, стала любимой дисциплиной. И это благодаря нашему замечательному преподавателю. Оксана Сергеевна доносит информацию максимально просто, чтобы она не только легко воспринималась, но и хорошо запоминалась. Также прошли и все остальные теоретические дисциплины.Практические занятия тоже прошли на высоте. Все упражнения разобрали досконально, учитывая всевозможные варианты модификаций в связи с особенностями занимающихся.Вернусь за новыми занятиями только в «Эксперт»",
    ],
    name: "Вероника Потанина",
    date: "23 января 2024г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review7.jpg",
    listText: [
      "Добрый день! Спешу оставь отзыв по обучению в ЦДО Эксперт Не разу не пожалела что пришла именно сюда! Подход, педагоги, организация и самое главное материал и знания которые были получены просто неоценимы  Оксана Сергеевна профессионал своего дела, спасибо вам за вашу работу и поддержку!  Здесь вы получите знания и стартовый опыт, который что процентов сможете использовать далее в своей работе",
    ],
    name: "Юлия Лимова",
    date: "21 июня 2024г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review8.jpg",
    listText: [
      "Хочу выразить огромную благодарность всему педагогическому составу ЦДО «Эксперт», проходила обучение по направлению тренер «психорегулирующих фитнес-программ», материал изложен доступным языком, нет ни одного вопроса который бы оставили без содержательного ответа. Отдельная благодарность Оксане Сергеевне за ее труд, за бесценный опыт которым она делится! Я очень рада что выбрала именно вас!",
    ],
    name: "Альбина Кошегу",
    date: "25 января 2023г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review9.jpg",
    listText: [
      "Если вы хотите получить знания , а не просто корочки - то вам сюда! Ни разу не пожалела, что выбрала именно этот обучающий центр. За 3 месяца увлекательного пути обучения, получила хороший фундамент знаний! Все структурированно, грамотно и логично. Много теории и практики. Все преподаватели - мастера в своём деле. Однозначно рекомендую этот обучающий центр! Спасибо огромное Оксане Сергеевне за индивидуальный подход и чуткое сопровождение на всех этапах.",
    ],
    name: "Анна Городилова",
    date: "15 июня 2022г.",
  },
  {
    id: id++,
    image: "/media/Yoga/slide-review10.jpg",
    listText: [
      'Проходила обучение на тренера групповых программ. ( Фитнес-Йога,Пилатес,Стрейчинг.)Хочу выразить свою благодарность педогогическому составу ,центру дополнительного образования "Эксперт" обучение прошло на одном дыхании, вся информация подовалась структурно ,вслушивалась в каждое слово. На все вопросы, которые появлялись в процессе обучения ,сразу следовал полный ответ . Желаю, дальнейших успехов в обучении професиональных тренеров.',
    ],
    name: "Светлана Кутоманова",
    date: "24 января 2023г.",
  },
];

//    Слайдер Преимущества мобилка

const sliderAdvantages = [
  {
    id: id++,
    image: "/media/Yoga/preim2.jpg",
    text: "Наш центр имеет лицензию на образователь-ную деятельность, после обучения вы можете получить налоговый вычет",
  },
  {
    id: id++,
    image: "/media/Yoga/preim3.jpg",
    text: "Вы получаете официальный документ, и компетенцию, которая позволит эффективно работать фитнес-тренером",
  },
  {
    id: id++,
    image: "/media/Yoga/preim4.jpg",
    text: "Учитесь только у экспертов со стажем более 20 лет в сфере фитнеса и образования",
  },
  {
    id: id++,
    image: "/media/Yoga/preim5.jpg",
    text: "Учитесь сейчас - платите потом!Доступна рассрочка на 3, 6 или 10 месяцев",
  },
];

//        Программы курсов

//      ЙОГА

const programmYoga = [
  {
    id: id++,
    isOpen: false,
    title: "Анатомия человека",
    text: [
      "1. Общие данные о структуре тела человека. Функциональная анатомия опорно-двигательного аппарата.",
      "2. Строение скелета туловища и черепа.",
      "3. Строение скелета верхних и нижних конечностей",
      "4. Мышечная система. Мышцы головы и шеи",
      "5. Мышцы верхних конечностей.",
      "6. Мышцы нижних конечностей.",
      "7. Сердечно-сосудистая система.",
      "8. Дыхательная система.",
      "9. Пищеварительная система.",
      "10. Нервная система и органы чувств.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Физиология человека",
    text: [
      "1. Введение о общую физиологию человека.",
      "2. Физиология центральной нервной системы.",
      "3. Физиология сердечно-сосудистой системы.",
      "4. Физиология дыхательной системы.",
      "5. Физиология желез внутренней секреции.",
      "6. Физиология сенсорных систем.",
      "7. Физиология высшей нервной деятельности.",
      "8. Физиология мышечной деятельности.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Спортивная медицина",
    text: [
      "1. Введение в курс спортивной медицины. Клинические и параклинические методы исследования.",
      "2. Принципы тестирования физического состояния общей физической работоспособности лиц, занимающихся физической культурой.",
      "3. Врачебно-педагогический контроль и самоконтроль при занятиях оздоровительной физической культурой.",
      "4. Острые травмы и повреждения опорно-двигательного аппарата у занимающихся ФКиС.",
      "5. Неотложные состояния при нерациональном использовании физических упражнений и первая помощь при них.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Теория и методика ФК",
    text: [
      "1. ТМФК как наука и учебный предмет.",
      "2. Система, средства и методы физического воспитания.",
      "3. Обучение двигательным действиям",
      "4. Общее понятие, развитие физических качеств.",
      "5. Планирование физического воспитания.",
      "6. Контроль в физическом воспитании.",
      "7. Оздоровительная физическая культура. Фитнес. Классификация средств фитнеса.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Психология физической культуры",
    text: [
      "1. Личные границы в работе фитнес-инструктора, тренера. Понятие личных границ, особенности их построения с клиентами, коллегами, руководством. Особенности конструктивного и неконструктивного общения. Треугольник Карпмана. Эго-состояния.",
      "2. Особенности работы с телом клиента с точки зрения телесно-ориентированного подхода.",
      "3. Эмоциональное выгорание фитнес-инструктора, тренера. Способы и средства восстановления. Особенности поддержания психического здоровья.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Фитнес-йога",
    text: [
      "1. Общее понятие о психофизической тренировке.",
      "2. Асаны, виньясы - классификация, терапевтическое действие.",
      "3. Виды асан в положении стоя: техника выполнения, методические рекомендации.",
      "4. Виды асан в упоре на кисти и стопы: техника выполнения, методические рекомендации.",
      "5. Виды асан в положении сидя: техника выполнения, методические рекомендации.",
      "6. Виды асан в положении лежа на спине: техника выполнения, методические рекомендации.",
      "7. Виды асан в положении лежа на животе: техника выполнения, методические рекомендации.",
      "8. Перевернутые асаны: показания, противопоказания, техника выполнения.",
      "9. Дыхательные упражнения.",
      "10. Психо-мышечная релаксация.",
      "11. Структурное построение занятий по фитнес-йоге.",
      "12. Методика обучения занимающихся различного уровня подготовленности.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Система Пилатес",
    text: [
      "1. История и принципы системы Пилатес.",
      "2. Разновидности и техника исходных положений.",
      "3. Техника упражнений системы Пилатес.",
      "4. Модификация упражнений под различный уровень подготовленности занимающихся.",
      "5. Разбор базовых связок упражнений.",
      "6. Мастер-классы уроков системы Пилатес.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Стретчинг",
    text: [
      "1. Общая теория развития гибкости.",
      "2. Разбор упражнений по отдельным мышцам и мышечным группам.",
      "3. Разбор методов стретчинга: активный, пассивный динамический; активный, пассивный статический; прогрессивный, агонистический, антагонистический, РNF.",
      "4. Упражнения для работы с суставами.",
      "5. Тестирование гибкости.",
      "6. Мастер-класс динамического стретчинга.",
      "7. Мастер-класс статического стретчинга.",
      "8. Мастер-класс комбинированного стретчинга.",
      "9. Пищеварительная система.",
      "10. Нервная система и органы чувств.",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Нутрициология в фитнесе",
    text: [
      "1. Белки, их роль в организме. Азотистый баланс. Потребность при разных видах физической нагрузки.",
      "2. Жиры, их роль в организме. Жирные кислоты, их соотношение. Роль Карнитина в транспорте жирных кислот. Разбор препаратов группы Омега-3 и 6.",
      "3. Углеводы, их роль в организме. Подходы к расчету углеводов при разных принципах диетотерапии (на примере LCHF).",
      "4. Определение энергопотребностей. Расчёт суточных энерготрат (практическая часть). ",
      "5. Витамины, их дефицит. Коррекция. Разбор препаратов.",
      "6. Спортивные добавки.",
      "7. Индивидуальный расчёт потребностей в белках, жирах, углеводах. Составление меню (практическая часть).",
    ],
  },
  {
    id: id++,
    isOpen: false,
    title: "Маркетинг в фитнесе",
    text: [
      "1. Общие понятия о маркетинге. Особенности маркетинга в фитнес-индустрии.",
      "2. Маркетинговая стратегия развития в социальных сетях для фитнес-тренера. Воронка продаж.",
      "3. Обзор актуальных социальных сетей. Их особенности, аудитория, интересы пользователей.",
      "4. Правила позиционирования в социальных сетях. Примеры хорошего и плохого позиционирования.",
      "5. Контент-стратегия. Виды и форматы контента. Генерация и планирование контента для фитнес-тренера.",
      "6. Оформление страницы. Правила работы с текстом и хештегами.",
      "7. Способы привлечения аудитории: таргетированная реклама, контекстная реклама, мессенджер-маркетинг (рассылки, чат-боты). Инфлюенс-маркетинг.",
      "8. Комьюнити-маркетинг. Стратегия выстраивания отношений с подписчиками, клиентами. Работа с негативом.",
    ],
  },
];

export {
  linksMenu,
  programmYoga,
  slideExpert,
  sliderAdvantages,
  sliderLessonYouga,
  sliderLessonYougaMobile,
  sliderReviewYouga,
};
