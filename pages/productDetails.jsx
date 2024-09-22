import { useContext, useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import HeaderUser from "./headerUser";
import { Button } from "@nextui-org/button";
import { onAuthStateChanged } from "firebase/auth";
import { addItemToLocalStorage, getItemsFromLocalStorage } from "../firebase/localstorage";
import { CartContext } from "../context/cartContext";
function Productdetails() {
    const [data, setData] = useState([]);
    const { setProducts } = useContext(CartContext)
    const { id } = useParams('')
    console.log(data);

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()).then((data) => {
            setData(data)

        })
    }, [])

    const addToCart = () => {
        addItemToLocalStorage({ ...data, quantity: 1 });
        const allProducts = getItemsFromLocalStorage();
        setProducts([...allProducts]);
    };








    return (
        <>

            <section className="mt-2 flex h-200 w-60 justify-center items-center">

                <div className="card">
                    <div className="flex justify-center items-center object-fill image_container">
                        <img width='60%' src={data.images} alt="" />
                    </div>
                    <div className="nameBrand ">
                        <span className="text-blue-400-500">{data.brand}</span>
                    </div>
                    <div className="title">
                        <span>{data.category}</span>
                    </div>
                    <div className="title">
                        <span>{data.title}</span>
                    </div>
                    <div className="size">
                        <span>{data.description}</span>
                    </div>
                    <div className="action">
                        <div className="price">
                            <span>${data.price}</span>
                        </div>
                        <Button onClick={addToCart} className="cart-button">
                            <svg
                                className="cart-icon"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                ></path>
                            </svg>
                            <span>Add to cart</span>
                        </Button>
                    </div>
                </div>
            </section>




        </>
    )

}
export default Productdetails;