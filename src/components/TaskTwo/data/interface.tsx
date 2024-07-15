/**
 * @interface
 * интерфейс для основных компонентов
 */

export interface InterfaceCard {
    img?: string;  // ссылка на изображение
    text?: string;  // основное описание
    textSecond?: string;  // доп описание
    title?: string;  // оглавление
    href?: string;  // ссылка
    alt?: string;  // альтернативный текст для изображений
    childrenData?: InterfaceCard[];  // интерфейс для дочерних карточек
}

export interface InterfaceNews {
    newsToday: InterfaceCard[];  // Данные для секций новостей
    currenciesToday: InterfaceCard[];  // Данные для карточек с валютами
}