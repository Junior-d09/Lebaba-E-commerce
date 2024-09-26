import  { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"

import products from'../../data/products.json'
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
    const {categoryName} = useParams(); 
    const [fiteredProducts, setFilteredProducts] = useState([]);
    
    useEffect(() => {
        const filtired = products.filter((product) => product.category === categoryName.toLowerCase());

        setFilteredProducts(filtired);  
    }, [categoryName])

    useEffect(() =>{
        window.scrollTo(0,0)
    })

  return (
    <>
    <section className='section__container bg-primary-light'>
        <h2 className='section__header capitalize'>{categoryName} </h2>
        <p className='section__subheader'>Browse a diverse range of categories, from chic dresses to versatile accessories. Elevate your style today!</p>
    </section>

    {/*products cards*/}
    <div className='section__container'>
        <ProductCards products={fiteredProducts} />
    </div>
    </>
  )
}

export default CategoryPage