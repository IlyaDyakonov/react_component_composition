import Card from "../Card/Card";
import News from "../News/News";
import Search from "../Search/Search";
import './General.css';
import {
    newsToday,
    currenciesToday,
    productsData,
    banerData,
    foterNews
} from '../data/data';


/**
 * Компонент объединяющий все элементы воедино
 * @param props - Свойства компонента.
 * @returns {JSX.Element} - JSX компонента Decomposition.
 */
function General(): JSX.Element {
    return (
        <div className="container2">
            {/* раздел новостей */}
            <div className="news">
                <News {...{ newsToday, currenciesToday }} />
            </div>

            {/* раздел доп разделов яндекса и поиск  */}
            <div className="products">
                <Search {...{ productsData }} />
            </div>

            {/* раздел банера с рекламой фильма */}
            <div className="banner">
                <Card {...banerData} />
            </div>

            {/* раздел в самом низу страницы */}
            <div className="foter">
                { foterNews && foterNews.map((item, index) => 
                    <Card {...item} key={index} >
                        { item.childrenData && item.childrenData.map((item2, index2) => 
                            <Card {...item2} key={index2} />
                    )}
                    </Card>
                )}
            </div> 
        </div>
    )
}

export default General;