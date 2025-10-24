//utilities
import { useState } from "react";
import useProducts from "@utils/ProductsReq";
import { ProductDetails } from "@components/ProductDetails/Product";

//styles
import "@styles/Home.css";
import "@styles/Modal.css";

const Home = () => {
  const [products, setProducts] = useProducts(); //the products fetched from the costum hook are stored in products variable
  const [modalOpen, setModalOpen] = useState(false); //condition to handle opening and closing the modal (popup)
  const [selectedProduct, setSelectedProduct] = useState(null); //selected item to show details in the popup
  
  // handling the drag of item to transfer the data from an index to another
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("Index", index);
  };

  //this function do the pivot index mechanism and change the item position
  const handleDrop = (e, target) => { 
    e.preventDefault();
    const draggedIndex = e.dataTransfer.getData("Index");
    const updatedProducts = [...products];
    const draggedProduct = updatedProducts.splice(draggedIndex, 1)[0];
    updatedProducts.splice(target, 0, draggedProduct);
    setProducts(updatedProducts);
    sessionStorage.setItem("productOrder", JSON.stringify(updatedProducts)); //update the new sorting to the user's session
  };

  // open modal and show detail of the clicked item
  const showDetails = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  return (
    <div className="Container">
      <h1 className="title">Platzi Store</h1>
      <div className="products-grid">

        {/* if there is no product the items will not appear */}
        {products &&
          products.map((item, index) => {
            return (
              <div
                className="item-card"
                key={item.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => handleDrop(e, index)}
                onClick={() => showDetails(item)}
              >
                <img className="item-image" src={item.image} alt={item.title} />
                <p className="item-title">{item.title}</p>
                <p className="item-price">{item.price}$</p>
              </div>
            );
          })}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </Modal>
    </div>
  );
};

//this is the modal component that accepts children and handles closing. 
export const Modal = ({ isOpen, onClose, children }) => {
  if (isOpen === false) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Home;
