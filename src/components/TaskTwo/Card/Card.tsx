import { InterfaceCard } from "../data/interface";
import { ReactNode } from 'react';
import './Card.css';

/**
 * Свойства для компонента Card.
 * @interface CardProps
 * @extends {InterfaceCard}
 */
interface CardProps extends InterfaceCard {
    index?: number;
    children?: ReactNode;
}

/**
 * каточка Card представляет все элементы которые будут входить в News
 * @param {CardProps} props - свойства компонента Card
 * @returns {JSX.Element} - JSX элемент, представляющий все элементы
 */

function Card(props: CardProps): JSX.Element {
    const {
        img,        // ссылка на изображение
        text,       // основное описание
        textSecond, // доп описание
        title,      // оглавление
        href,       // ссылка
        children,   // Дочерние элементы React.
        alt,        // альтернативный текст для изображений
    } = props;


    /** 
    * @param {string} url - ссылка для перехода
    * @returns {void}
    */
    const onClick = (url?: string): void => {
        if (!url) return;
        window.location.href = url;
    };

    return (
        <div className="card-origin2" onClick={() => { onClick(href) }}>
            { img && <img className='card-image2' src={img} alt={alt} /> }
            { title && <div className="card-title2"> {title} </div> }
            { text && <div className="card-text2"> {text} </div> }
            { textSecond && <div className="card-text-second2"> {textSecond} </div> }
            {children}
        </div>
    )
}

export default Card;