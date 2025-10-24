import "./Product.css";
//product details component that accepts an item and list it's informations inside the modal
export const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.title}
        className="product-detail-image"
      />
      <h1 className="product-detail-title">{product.title}</h1>
      <p className="product-detail-desription">{product.description}</p>
      <p className="product-detail-category">{product.category}</p>
      <div className="bottom-details">
        <p className="product-detail-price">Price: ${product.price}</p>
        <p className="product-rating">⭐{product.rating.rate}/5</p>
      </div>
    </div>
  );
};
