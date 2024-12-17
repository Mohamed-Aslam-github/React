import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import Navbarr from './Navbarr'

function Jwels() {
    const redirect = useNavigate()
    const[jwel ,setJwels] = useState([])

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((alldata) => alldata.json())
        .then((setdata) => setJwels(setdata))
    },[])

    function show_jwels(pid){
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
    <section className='jwels'>
      <section className='container mt-10'>
        <div className='row border '>
            <div className='py-3 fs-4  text-success '> Jwels <span className='text-danger fs-6'>(Trending now)</span> </div>
            <div className='px-5 row'>
            {jwel.map((value,ky)=>{
               const jwel_products = [5,6,7,8] 
               if(jwel_products.includes(value.id)){
                return(
                    <div className='col-lg-4 col-md-4 linkkk' key={value.id}>
                               
                                    <Card style={{ marginBottom: '25px', maxHeight: '400px' }} className='cardd img-fluid'>
                                        <Card.Img variant="top"  src={value.image} height="250px" width='150px' />
                                        <Card.Body>
                                            <Card.Title>{value.title.slice(0,31)}</Card.Title>
                                 
                                            <Button variant="primary" onClick={()=> show_jwels(value.id)}> View More</Button>
                                        </Card.Body>
                                    </Card>
                            
                            </div>
           
                )

               }
            })}
            </div>
        </div>
       </section>

      </section>
    </>
  )
}

export default Jwels;