import { useState, useEffect } from "react";
// this function fetches the data from the api
export default function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const savedOrder = sessionStorage.getItem("productOrder"); //save the order to session

    if (savedOrder) {
      setProducts(JSON.parse(savedOrder));
    } else {
        //connect to api
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json()) //get the response as json
        .then((data) => {
          setProducts(data);
          sessionStorage.setItem("productOrder", JSON.stringify(data)); //set the data into products variable and update them to session stringifiying it
        })
        .catch((error) => console.error("Error fetching products:", error)); //catch in case of error
    }
  }, []);

  return [products, setProducts];
}
