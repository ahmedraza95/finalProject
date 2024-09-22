import { useContext, useEffect, useState } from "react";
import { addItemToLocalStorage,  getItemsFromLocalStorage, minuslocaleStorage } from "../firebase/localstorage";
import { CartContext } from "../context/cartContext";
import { div } from "framer-motion/client";
import { Button } from "@nextui-org/button";




function CartDetails() {
    const [abc, setABC] = useState(0)
    const [products2, setCartProducts2] = useState([]);
    let numberss = 5;
    const { products } = useContext(CartContext);
    const [number, setNumber] = useState(0)
    useEffect(() => {
        console.log("use effect on delete==>");
        let arr = getItemsFromLocalStorage();
        setNumber(arr.length)
        if (arr.length) {
            setCartProducts2([...arr]);

        }
    }, [abc]);

    const totalPrice = products2.reduce(
        (total, products2) => total + products2.quantity * products2.price,
        0
    );
    const totalQuantity = products2.reduce(
        (total, products2) => total + products2.quantity,
        0
    );

    return (
        <>
            <Button id="btnCheckOut">Check Out Now </Button>
            <div className="cartMain">
                <div className="topDetailsCart">
                    <span className="firstBox">
                        <span><h1><b>Totla Price</b></h1></span>
                        <span><h5>${Math.round(totalPrice)}</h5></span>
                    </span>
                    <span>
                        <span><h1><b>Total Items</b></h1></span>
                        <span><p>{number}</p></span>
                    </span>
                    <span>
                        <span><h1><b>Total Quantity</b></h1></span>
                        <span><p>{totalQuantity}</p></span>
                    </span>
                </div>
            </div>
            <div className="parentFinal">
                {
                    products2.map((docs) => (

                        <div className="itemsarr">
                            <div><img width={100} src={docs.images} alt="" /></div>
                            <div className="detailss">
                                <div className="typeFont">
                                    <h3><b>{docs.title}</b></h3>
                                </div>
                                <div><h1>price = ${docs.price}</h1></div>
                                <div className="minusParent">
                                    <Button onClick={(e) => {
                                        setABC(numberss--)
                                        minuslocaleStorage({ ...docs, quantity: 1 })
                                        setABC(numberss--)
                                        console.log("cala")
                                    }} id="btn" className="w-10">-</Button><span className="number"><h1 className="mb-30">Quantity</h1><h5>{docs.quantity}</h5></span><Button onClick={(e) => {
                                        setABC(numberss++)
                                        addItemToLocalStorage({ ...docs, quantity: 1 });
                                        setABC(numberss++)
                                        console.log("cala")

                                    }} className="plus">+</Button></div>
                            </div>
                            <div className="lastDiv"><div><h3><b>Total Price</b></h3></div>${Math.round(docs.price * docs.quantity)}</div>
                            <Button>Delete</Button>

                        </div>

                    ))
                }
            </div >



        </>
    )

}

export default CartDetails;