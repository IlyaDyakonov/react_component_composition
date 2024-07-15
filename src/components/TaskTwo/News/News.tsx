import { InterfaceNews } from "../data/interface";
import Card from "../Card/Card";
import './News.css';


/**
 * Функция News это блок с новостями и кусом валют
 * @param {Object} props - Свойства компонента
 * @param {Array} props.newsToday - Массив новостей на сегодня
 * @param {Array} props.currenciesToday - Массив курсов валют на сегодня
 * @returns {JSX.Element} JSX элемент, представляющий блок с новостями и курсами валют
 */

function News({ newsToday, currenciesToday }: InterfaceNews): JSX.Element {

    return (
        <section className="news-section">
            {/* блок новости */}
            <div className="news-block">
                { newsToday.map((item, index) => <Card {...item} key={index} />
                )}
            </div>

            {/* блок курс валют */}
            <div className="news-currencies">
                { currenciesToday.map((item, index) => <Card {...item} key={index} />
                    )}
            </div>
        </section>
    )
};

export default News;