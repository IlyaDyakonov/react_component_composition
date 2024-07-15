import Item from './items';
import Tags from './tags';


interface WidgetProps {
    item: Item;
}

export default function Widget({ item }: WidgetProps) {

    return (
        <div className="card-body">
            <Tags {...item} />
        </div>
    )
};