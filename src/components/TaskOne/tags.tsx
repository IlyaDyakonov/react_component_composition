import Item from './items';


function Tags({ title, url, nameImg, text, link }: Item) {
    return (
        <>
        {url && nameImg && (
            <img src={url} className="card-img-top" alt={nameImg} />
        )}
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            <a href={link} className="btn btn-primary">Go somewhere</a>
        </div>
        </>
    )
}

export default Tags;