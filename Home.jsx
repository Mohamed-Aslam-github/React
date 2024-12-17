import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import Navbarr from './Navbarr'

function Home() {
    const redirect = useNavigate()
    const[product_data , setProduct_data] = useState([]);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
         .then((alldata)=>alldata.json())
         .then((setdata)=>setProduct_data(setdata));
    },[])

    function show_details(pid){
        redirect(`/productdetails/${pid}`)
    }

   

    let json_cart_products = localStorage.getItem('products')
    let cart_products = (json_cart_products) ? JSON.parse(json_cart_products) : []
    
    const[count_products , setCountproducts] = useState(0)

    useEffect(()=>{
     
        setCountproducts(cart_products.length)
        console.log(count_products);
    },[json_cart_products])
  
    
  return (
    <>
    {/* <Navbarr count={count_products}/> */}
       <section className='container'>
        <div className='row border mt-10'>
            <div className='py-3 fs-4  text-success '> Fashions <span className='text-danger fs-6'>(Trending now)</span> </div>
            <div className='px-5 row'>
            {product_data.map((value,ky)=>{
               const fashion_products = [2,3,4,15,16,17,18,19,20] 
               if(fashion_products.includes(value.id)){
                return(

                   
                    <div className='col-lg-4 col-md-4 linkkk' key={value.id}>
                               
                                    <Card style={{ marginBottom: '30px', maxHeight: '400px' }} className='cardd img-fluid'>
                                        <Card.Img variant="top"   src={value.image} height="250px" width='200px' />
                                        <Card.Body>
                                            <Card.Title>{value.title.slice(0,31)}</Card.Title>
                                 
                                            <Button variant="primary" onClick={()=>show_details(value.id)}> View More</Button>
                                        </Card.Body>
                                    </Card>
                            
                    </div>
                    
           
                )

               }
            })}
            </div>
        </div>
       </section>
    </>
  )
}

export default Home;