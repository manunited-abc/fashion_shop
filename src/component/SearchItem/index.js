import './SearchItem.scss';
function SearchItem({ data }) {
    return (
        <a href={`/products/${data.id}`}>
            <div className="wrapper-search">
                <img className="image" src={'../img/products/' + data.images[0]}></img>
                <div className="info">
                    <p className="name">{data.name}</p>
                    <span className="price">
                        {' '}
                        {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(data.price)}{' '}
                    </span>
                </div>
            </div>
        </a>
    );
}

export default SearchItem;
