import "./ProductCard.css"
const ProductCard = ({ product }) => {
    const { id,title, thumbnail, price } = product
    return (
        <div className="product-card" key={id}>
            <h2>{title}</h2>
            <img src={thumbnail} alt={title} />
            <p>{price}</p>
            <button>comprar</button>
        </div>
    )
}
export { ProductCard }