import React, { useEffect, useState } from 'react'
import Navbarr from './Navbarr'

function Cart() {

    const [cp, sCp] = useState([])
    const [totalcount, setTotal] = useState(0)
    const [Totalamount, setAmout] = useState(0)

    function getdata() {
        let json_cart_products = localStorage.getItem('products')
        let cart_products = (json_cart_products) ? JSON.parse(json_cart_products) : []
        if (cart_products) {
            cart_products.map((arr, id) => {
                arr['amount'] = 1
            })
        }
        sCp(cart_products)
    }


    

    const [count_products, setCountproducts] = useState(0)

    useEffect(() => {
        getdata()
        console.log(cp);
    }, [])

    useEffect(() => {
        setCountproducts(cp.length)
    }, [cp])

    async function removeitem(index) {
        let getdata = localStorage.getItem('products');
        let c_data = getdata ? JSON.parse(getdata) : [];
        c_data.splice(index, 1)
        localStorage.setItem("products", JSON.stringify(c_data))
        sCp(c_data)
    }

    function updateQuantity(index, increment) {
        let updatedProducts = [...cp];
        if (increment) {
            updatedProducts[index].amount += 1;  // Increase the amount
        } else {
            updatedProducts[index].amount = Math.max(1, updatedProducts[index].amount - 1);  // Decrease but not below 1
        }
        localStorage.setItem('products', JSON.stringify(updatedProducts));  // Save updated data to local storage
        sCp(updatedProducts);  // Update state   

    }

    function countt() {
        let ccc = 0;
        for (let i in cp) {
            ccc += cp[i].amount
            // setTotal(parseInt(cp[i].amount)  )
            setTotal(ccc)
        }
    }

    function costt() {
        let aaa = 0;
        for (let i in cp) {
            aaa += cp[i].amount * cp[i].price
            setAmout(aaa)
        }
    }
    useEffect(() => {
        countt()
        costt()
    }, [cp])

    function cleancart(){
        localStorage.clear();
        setTotal(0)
        sCp([])
        setAmout(0)
    }



    return (
        <>
            <Navbarr count={count_products} />
            <div className='container'>

                <div className='row  p-4'>
                    <div className='col-lg-12 d-flex justify-content-end' >
                        <button className='btn btn-outline-danger' onClick={cleancart}> Clear cart</button>
                    </div>

                </div>

                <div className='row'>
                    {cp.map((value, kid) => {
                        return (
                            <>
                                {console.log(value)}
                                <div className="card col-lg-4 me-5 my-3" style={{ width: '18rem' }} key={value.id}>
                                    <img src={value.image} className="card-img-top " height={200} alt="..." />
                                    <div className="card-body">
                                        {/* <h5 className="card-title">{value.title.slice(0, 11)}</h5> */}
                                        <h5 className="card-title">
                                              {value.title ? value.title.slice(0, 11) : "Product Title"} </h5>
                                        <h5>Price: ${value.price}</h5>
                                        <button className=" badge  text-bg-warning " onClick={() => updateQuantity(kid, true)}  >
                                            + </button> {value.amount} <button className="badge  text-bg-success " onClick={() => updateQuantity(kid, false)}> - </button>
                                        <h6 className='mt-3'> Total price :<span className='text-danger'>${value.price * value.amount}</span> </h6>
                                        <button className="btn btn-primary d-block mt-3" onClick={() => removeitem(kid)}> Tap to remove </button>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>



                <div className='row my-5'>
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title"> Total Items :{totalcount}</h5>
                                <p className="card-text">Total Amount : {Totalamount}</p>
                                <button className="btn btn-danger" > Tap to Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart;