import Item from './items';
import Widget from './widget';
import './card.css';


interface CardProps {
    item: Item;
}

function Card({ item }: CardProps){
    return (
        <div className="card">
            <Widget item={item} />
        </div>
    )
}


export default Card;