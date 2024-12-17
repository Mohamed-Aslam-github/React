import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Badge } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbarr(props) {
  const[cart_items_count , setCount] = useState(0)
  // let cart_items_count = props.count

 
  useEffect(()=>{
    setCount(props.count)
  },[props.count])
  return (
    <>
    <nav className='sticky-top'>
      <div className='bg-body-tertiary'>
        <div className='container '>
          <div className='row  d-flex align-items-center '>
            <div className='col-lg-8'>
              <nav className="navbar  bg-body-tertiary ">
                <div className="container">
                  <a className="navbar-brand fs-2 font-monospace fw-bold"> <img src={logo} alt="" className='img-fluid'  width="50" height="54" />FlipFlop</a>
                  <form className='d-flex' role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                  </form>
                </div>
              </nav>
            </div>
            <div className='col-lg-4 d-flex justify-content-end '>
              <Link to='/cartitems' className='linkk'>
                <h4 className="">Cart <FontAwesomeIcon icon={faCartShopping}/>  <Badge bg="secondary">{cart_items_count}</Badge>  </h4>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-body-tertiary'>
        <div className='container   '>
          <ul className="nav justify-content-center">


            
           
            <li className="nav-item">
              <Link to='/' className="nav-link fs-5" > Fashions</Link>
            </li>
            

            
            <li className="nav-item">
              <Link to='/Hardwares' className="nav-link fs-5" >Hardwares</Link>
            </li>
            

            
            <li className="nav-item">
              <Link to='/jwels' className="nav-link fs-5" >Jwels </Link>
            </li>
           
          </ul>
        </div>
      </div>
      </nav>
    </>


  )
}

export default Navbarr;