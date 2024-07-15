import { InterfaceCard } from "../data/interface";
import Card from "../Card/Card";
import './Search.css';


/**
 * каточка Card представляет все элементы которые будут входить в News
 * @param {Object} props - свойства переданные компоненту
 * @param {InterfaceCard[]} props.productsData - Массив ссылок на другое разделы яндекса
 * @returns {JSX.Element} - JSX элемент, представляющий все элементы
 */

function Search({ productsData }: { productsData: InterfaceCard[] }): JSX.Element {
    /**
     * Обрабатывает отправку формы.
     * @param {React.FormEvent} event - Событие отправки формы.
     */
    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
    }

    return (
        <section className='search'>
            <img className='search-logo' src='https://upload.wikimedia.org/wikipedia/commons/6/65/Yandex_official_logo.svg' alt='Яндекс' />
            <div className='search-body'>
                <div className="search-links">
                    {productsData.map((item, index) => (
                        <Card {...item} key={index} />
                    ))}
                </div>

                <form className="search-form" onSubmit={onSubmit}>
                    <label htmlFor="" className='search-label'>
                        {/* Поле ввода для поискового запроса */}
                        <input
                            className='search-input'
                        />
                        {/* Иконка клавиатуры для поиска */}
                        <img className='search-keyboard' src='https://img.icons8.com/?size=64&id=4SwYc4bT5t3x&format=png' alt='search keyboard' />
                    </label>
                    <button type='submit'>{'Найти'}</button>
                </form>

                <div className='search-footer'>
                    <span>{'Найдется всё. Например, '}</span>
                    <span className='grey'>{'фаза луны сегодня'}</span>
                </div>
            </div>
        </section>
    )
}

export default Search;