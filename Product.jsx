import React, { useState ,useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbarr from './Navbarr'

function Product() {
    let nav =useNavigate()
    const[count_products , setCountproducts] = useState(0)
   
        let json_cart_products = localStorage.getItem('products')
        let cart_products = (json_cart_products) ? JSON.parse(json_cart_products) : []

        function fun1(){
            setCountproducts(cart_products.length)
        }
        console.log(count_products);
    
    useEffect(()=>{
        fun1()
    },[json_cart_products])

    const { pdid } = useParams()
    const [productt, setProductt] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${pdid}`)
            .then((alldata) => alldata.json())
            .then((setdata) => setProductt(setdata))
    }, [pdid]);

   
    
    if (!productt) {
        return <div>Loading...</div>;  // Loading state
    }



    function addtocart(){
        alert("added to cart successfully!!")
        console.log('item added')
        let getdata = localStorage.getItem('products')
        let array_products = (getdata)? JSON.parse(getdata):[]
        array_products.push(productt)
        localStorage.setItem('products',JSON.stringify(array_products))
        // {<Navbarr count={count_products}/>}
        nav('/cartitems')
    }



    return (
        <>
        {/* <Navbarr count={count_products}/> */}
        <div className='container'>
            <div className="card mt-3  show_productt" style={{maxWidth:'1140px'}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={productt.image} className="img-fluid rounded-start" alt={productt.title} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <p>{productt.description}</p>
                            <h2>Price: ${productt.price}</h2>
                            <h3>Category: {productt.category}</h3>
                            {/* <h4>Rate: <span className='text-danger'>{productt.rating.rate}</span> </h4> 
                            <p>Rating: {productt.rating.rate} / 5 ({productt.rating.count} reviews)</p> */}
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                            <button className='btn btn-warning'onClick={addtocart}> Add to cart </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Product;

