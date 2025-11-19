const jobs = [
  {
    id: 'factory-worker-pl',
    title: {
      ua: 'Заводський працівник',
      en: 'Factory Worker',
    },
    country: {
      ua: 'Польща',
      en: 'Poland',
    },
    category: {
      ua: 'Виробництво',
      en: 'Manufacturing',
    },
    experienceLevel: 'entry', // entry | mid | senior
    type: {
      ua: 'Повна зайнятість',
      en: 'Full-time',
    },
    shortDescription: {
      ua: 'Робота на виробничій лінії: сортування, пакування, контроль якості продукції.',
      en: 'Work on production line: sorting, packing, quality control of products.',
    },
    fullDescription: {
      ua: 'Робота на сучасному заводі в Польщі. Основні обов’язки: сортування продукції, пакування, контроль якості, підтримка чистоти робочого місця. Підходить для кандидатів без досвіду, є навчання на місці.',
      en: 'Work at a modern factory in Poland. Main duties: sorting products, packing, quality control, keeping the workplace clean. Suitable for candidates without experience, on-site training is provided.',
    },
    requirements: {
      ua: [
        'Готовність до фізичної праці на ногах',
        'Відповідальність та уважність',
        'Бажання працювати в Європі мінімум 6-12 місяців',
      ],
      en: [
        'Willingness to do physical work on feet',
        'Responsibility and attention to detail',
        'Willingness to work in Europe for at least 6-12 months',
      ],
    },
    offers: {
      ua: [
        'Офіційне працевлаштування та медичне страхування',
        'Оплачуване житло або доплата до оренди',
        'Стабільний графік та можливість понаднормових годин',
      ],
      en: [
        'Official employment and medical insurance',
        'Provided accommodation or housing allowance',
        'Stable schedule and possibility of overtime',
      ],
    },
  },
  {
    id: 'warehouse-de',
    title: {
      ua: 'Складський працівник',
      en: 'Warehouse Worker',
    },
    country: {
      ua: 'Німеччина',
      en: 'Germany',
    },
    category: {
      ua: 'Логістика та склади',
      en: 'Logistics & Warehousing',
    },
    experienceLevel: 'entry',
    type: {
      ua: 'Змінний графік',
      en: 'Shift work',
    },
    shortDescription: {
      ua: 'Комплектація замовлень, робота зі сканером, пакування товарів на складі.',
      en: 'Order picking, scanning, packing goods in a modern warehouse.',
    },
    fullDescription: {
      ua: 'Великий логістичний центр у Німеччині. Ви будете відповідати за комплектацію замовлень, сканування товарів, пакування та підготовку до відправки. Робота підходить як чоловікам, так і жінкам.',
      en: 'Large logistics center in Germany. You will be responsible for order picking, scanning goods, packing and preparing shipments. Suitable for both men and women.',
    },
    requirements: {
      ua: [
        'Базові навички роботи з технікою (сканер, термінал)',
        'Відсутність серйозних проблем зі здоров’ям',
      ],
      en: [
        'Basic ability to work with devices (scanner, terminal)',
        'No serious health issues',
      ],
    },
    offers: {
      ua: [
        'Сучасний склад, безпечні умови праці',
        'Премії за продуктивність',
      ],
      en: [
        'Modern warehouse, safe working conditions',
        'Productivity bonuses',
      ],
    },
  },
  {
    id: 'construction-helper-cz',
    title: {
      ua: 'Будівельний помічник',
      en: 'Construction Helper',
    },
    country: {
      ua: 'Чехія',
      en: 'Czech Republic',
    },
    category: {
      ua: 'Будівництво',
      en: 'Construction',
    },
    experienceLevel: 'entry',
    type: {
      ua: 'Повна зайнятість',
      en: 'Full-time',
    },
    shortDescription: {
      ua: 'Допоміжні роботи на будівельному майданчику: прибирання, подача матеріалів, демонтаж.',
      en: 'Helper tasks on construction site: cleaning, carrying materials, demolition assistance.',
    },
    fullDescription: {
      ua: 'Робота на будівельних об’єктах у Чехії. Ви будете допомагати майстрам, готувати робочі місця, виконувати прості фізичні роботи. Підходить тим, хто хоче стабільну та довгострокову зайнятість.',
      en: 'Work on construction sites in Czech Republic. You will support skilled workers, prepare workplaces and perform simple physical tasks. Good option for those looking for stable, long-term work.',
    },
    requirements: {
      ua: [
        'Готовність до фізично важкої праці',
        'Перевага — досвід у будівництві, але не обов’язково',
      ],
      en: [
        'Willingness to do physically demanding work',
        'Experience in construction is a plus but not required',
      ],
    },
    offers: {
      ua: [
        'Стабільна кількість робочих годин',
        'Робочий одяг та взуття надаються',
      ],
      en: [
        'Stable number of working hours',
        'Work clothes and shoes provided',
      ],
    },
  },
  {
    id: 'line-operator-sk',
    title: {
      ua: 'Оператор виробничої лінії',
      en: 'Production Line Operator',
    },
    country: {
      ua: 'Словаччина',
      en: 'Slovakia',
    },
    category: {
      ua: 'Виробництво',
      en: 'Manufacturing',
    },
    experienceLevel: 'mid',
    type: {
      ua: 'Змінний графік',
      en: 'Shift work',
    },
    shortDescription: {
      ua: 'Робота на автоматизованих лініях (авто, електроніка, харчова промисловість).',
      en: 'Operating automated lines (automotive, electronics, food industry).',
    },
    fullDescription: {
      ua: 'Сучасні заводи у Словаччині. Ви будете запускати та контролювати виробничі лінії, стежити за безперебійною роботою обладнання, реагувати на збої. Необхідна мінімальна технічна грамотність.',
      en: 'Modern factories in Slovakia. You will start and control production lines, monitor equipment and react to issues. Basic technical understanding is required.',
    },
    requirements: {
      ua: [
        'Базове розуміння техніки та процесів',
        'Уважність до деталей',
      ],
      en: [
        'Basic understanding of machinery and processes',
        'Attention to detail',
      ],
    },
    offers: {
      ua: [
        'Навчання на виробництві',
        'Можливість кар’єрного росту до бригадира',
      ],
      en: [
        'On-the-job training',
        'Career growth opportunities to team leader',
      ],
    },
  },
  {
    id: 'cleaner-nl',
    title: {
      ua: 'Прибиральник / Клінер',
      en: 'Cleaning Staff',
    },
    country: {
      ua: 'Нідерланди',
      en: 'Netherlands',
    },
    category: {
      ua: 'HoReCa та обслуговування',
      en: 'HoReCa & Services',
    },
    experienceLevel: 'entry',
    type: {
      ua: 'Гнучкий графік',
      en: 'Flexible schedule',
    },
    shortDescription: {
      ua: 'Прибирання готелів, офісів, складських та промислових приміщень.',
      en: 'Cleaning of hotels, offices, warehouses and industrial spaces.',
    },
    fullDescription: {
      ua: 'Робота у сервісних компаніях Нідерландів. Залежно від об’єкта — прибирання номерів, офісних приміщень чи складів. Є можливість працювати у кількох локаціях.',
      en: 'Work in service companies in the Netherlands. Depending on site – cleaning hotel rooms, offices or warehouses. Possible to work at several locations.',
    },
    requirements: {
      ua: [
        'Охайність та відповідальність',
        'Готовність працювати у змінному графіку',
      ],
      en: [
        'Neatness and responsibility',
        'Readiness to work flexible/shift schedule',
      ],
    },
    offers: {
      ua: [
        'Стабільний дохід та можливість додаткових годин',
        'Робота у відомих готельних та офісних мережах',
      ],
      en: [
        'Stable income and possibility of extra hours',
        'Work with well-known hotel and office chains',
      ],
    },
  },
  {
    id: 'packer-hu',
    title: {
      ua: 'Пакувальник / Сортувальник',
      en: 'Packer / Sorter',
    },
    country: {
      ua: 'Угорщина',
      en: 'Hungary',
    },
    category: {
      ua: 'Логістика та склади',
      en: 'Logistics & Warehousing',
    },
    experienceLevel: 'entry',
    type: {
      ua: 'Повна зайнятість',
      en: 'Full-time',
    },
    shortDescription: {
      ua: 'Пакування та сортування товарів на харчових фабриках і складах.',
      en: 'Packing and sorting goods at food factories and warehouses.',
    },
    fullDescription: {
      ua: 'Робота на великих харчових та логістичних підприємствах. Ви будете сортувати та пакувати товари, готувати їх до відвантаження. Підійде кандидатам без досвіду та знання мови.',
      en: 'Work at large food and logistics companies. You will sort and pack goods, prepare them for shipment. Suitable for candidates without experience and language knowledge.',
    },
    requirements: {
      ua: [
        'Уважність до маркування та термінів придатності',
        'Робота в швидкому темпі',
      ],
      en: [
        'Attention to labels and expiry dates',
        'Ability to work in fast pace',
      ],
    },
    offers: {
      ua: [
        'Навчання на робочому місці',
        'Дружній міжнародний колектив',
      ],
      en: [
        'Training on the job',
        'Friendly international team',
      ],
    },
  },
  // Додаткові приклади для фільтрів
  {
    id: 'forklift-operator-pl',
    title: {
      ua: 'Оператор навантажувача',
      en: 'Forklift Operator',
    },
    country: {
      ua: 'Польща',
      en: 'Poland',
    },
    category: {
      ua: 'Логістика та склади',
      en: 'Logistics & Warehousing',
    },
    experienceLevel: 'mid',
    type: {
      ua: 'Змінний графік',
      en: 'Shift work',
    },
    shortDescription: {
      ua: 'Робота на електричних та дизельних навантажувачах на великому складі.',
      en: 'Operating electric and diesel forklifts in a large warehouse.',
    },
    fullDescription: {
      ua: 'Переміщення палет, завантаження та розвантаження вантажівок, робота з висотними стелажами. Потрібні права на навантажувач або готовність пройти навчання.',
      en: 'Moving pallets, loading/unloading trucks, working with high racks. Forklift license or readiness to obtain one is required.',
    },
    requirements: {
      ua: [
        'Досвід роботи на навантажувачі буде перевагою',
        'Відповідальне ставлення до техніки та безпеки',
      ],
      en: [
        'Experience with forklifts is an advantage',
        'Responsible attitude to equipment and safety',
      ],
    },
    offers: {
      ua: [
        'Вища ставка ніж у звичайних складських працівників',
        'Навчання та сертифікація за рахунок роботодавця',
      ],
      en: [
        'Higher salary than regular warehouse workers',
        'Training and certification paid by employer',
      ],
    },
  },
];

export default jobs;
