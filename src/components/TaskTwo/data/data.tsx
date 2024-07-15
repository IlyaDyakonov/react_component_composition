import { InterfaceCard } from "./interface";


/**
 * новости
 * папка News
 * @type {CardInterface[]}
 * @property {string} img - URL изображения новости
 * @property {string} text - Текст новости
 */
export const newsToday: InterfaceCard[] = [
    {
        img: 'https://avatars.dzeninfra.ru/get-ynews-logo/135513/1002-1544074003449-square/logo-square',
        text: 'Эксперт рассказал, как мгновенный поворот головы спас Трампу жизнь при покушении',
    },
    {
        img: 'https://avatars.dzeninfra.ru/get-ynews-logo/28627/254083361-1516267195536-square/logo-square',
        text: 'Мэр Кравченко: в Новороссийске ввели режим ЧС из-за лесных пожаров',
    },
    {
        img: 'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1027-1530099491421-square/logo-square',
        text: 'Politico: сторонники Трампа выпустили футболки с его фото после покушения',
    },
    {
        img: 'https://avatars.dzeninfra.ru/get-ynews-logo/117671/1013-1664459456543-square/logo-square',
        text: 'Конгрессмен Майк Уолтц: власти отказались усилить охрану Трампа перед покушением',
    },
    {
        img: 'https://avatars.dzeninfra.ru/get-ynews-logo/26056/1116-1478692904205-square/logo-square',
        text: 'NBC: демократы приостановили попытки вывести Байдена из предвыборной гонки',
    },
];


/**
 * курс валют сегодня
 * папка 
 * @property {string} text - Текст курса валют
 * @property {string} textSecond - Изменение курса
 */
export const currenciesToday: InterfaceCard[] = [
    { text: 'USD MOEX 87,74', textSecond: '+0.09' },
    { text: 'EUR MOEX 95,76', textSecond: '+0.14' },
    { text: 'НЕФТЬ 85,35', textSecond: '+1,63%' },
    { textSecond: '...' },
];


/** 
 * доп разделы яндекса
 * папка 
 * @property {string} title - вид доп разделов
 * @property {string} href - ссылка на этот раздел
*/
export const productsData: InterfaceCard[] = [
    { title: 'Видео', href: '#' },
    { title: 'Картинки', href: '#' },
    { title: 'Новости', href: '#' },
    { title: 'Карты', href: '#' },
    { title: 'Маркет', href: '#' },
    { title: 'Переводчик', href: '#' },
    { title: 'Эфир', href: '#' },
    { title: 'еще', href: '#' },
];


/**
 * банер с рекламой фильма
 * папка 
 * @property {string} img - Постер фильма
 * @property {string} alt - альтернативное описание фильма
 * @property {string} href - ссылка на фильм
 */
export const banerData: InterfaceCard =
    {
        img: 'https://xage.ru/media/uploads/2018/05/aiw/aiw_04.jpg',
        alt: 'Movie',
        href: '#',
    };


/** 
 * раздел в самом низу страницы
 * папка 
 * @property {string} title - Назвение раздела
 * @property {string} childrenData - Внутренее составляющие
 * @property {string} img - картинка
 * @property {string} text - текст раздела
 * @property {string} textSecond - доп информация
 */
export const foterNews: InterfaceCard[] = [
    {
        title: 'Погода',
        childrenData: [
            {
                img: 'https://www.svgrepo.com/download/212082/rain.svg',
                text: '+17°',
                textSecond: 'Утром +17\nднём +20',
            },
        ],
    },
    {
        title: 'Посещаемость',
        childrenData: [
            { text: 'Недвижимость', textSecond: '— о сталинках' },
            { text: 'Маркет', textSecond: '— люстры и светильники' },
            { text: 'Автор.ру', textSecond: '— привод 4х4 до 500 000' },
        ]
    },
    {
        title: 'Карта германии',
        text: 'расписания',
    },
    {
        title: 'Телепрограмма',
        childrenData: [
            { text: '02:00 ТНТ. Best', textSecond: 'ТНТ International' },
            { text: '02:15 Джинглики', textSecond: 'Карусель INT' },
            { text: '02:25 Наедине со всеми', textSecond: 'Первый' },
        ]
    },
    {
        title: 'Эфир',
        childrenData: [
            { text: '▶️ Управление как искуство', textSecond: 'Успех' },
            { text: '▶️ Ночь. Мир в это время', textSecond: 'earthTV' },
            { text: '▶️ Андрей Возн...', textSecond: 'Совершенно секретно' },
        ]
    },
];