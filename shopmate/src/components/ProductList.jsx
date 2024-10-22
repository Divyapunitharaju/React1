
import React, { useCallback, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetch } from '../hooks/useFetch';

export const ProductList = () => {
  // const [products, setProducts] = useState([])
  const [url,setUrl]=useState('http://localhost:3000/products')
         const {data}=useFetch(url) 



  return (
    <div>
          <div className='container m-2' >
            <button className='btn btn-primary m-2'
            onClick={()=>setUrl('http://localhost:3000/products')}>All</button>
            <button className='btn btn-primary m-2'
            onClick={()=>setUrl('http://localhost:3000/products?in_stock=true')}>In Stock Only</button>
          </div>
      {
        data &&  data.map((product) => (
           
          <div className="card m-2" key={product.id}>
            <div className='card-body ' >
              <p>{product.name}</p>
              <p>${product.price}</p>
              <div className="d-flex justify-content-end">
              <p className={product.in_stock?'btn bg-success  ':'btn bg-danger'}>{product.in_stock ? "instock" : "unavailable"}</p>
              </div>
            </div>
          </div>

        ))
      }
    </div>
  )
}
