import{useState,useEffect} from "react"
import"./Products.css"
import { Layout } from "../../Components/Layout/Layout.jsx"
import{ProductCard} from "../../Components/ProductCard/ProductCard.jsx"

const Products=()=>{
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch("https://api.mercadolibre.com/sites/MLA/search?q=auriculares")
        .then((response)=>response.json())
        .then((data)=>setProducts(data.results))
    },[])
    

    return(
        <Layout>
        <div className="section-products">
        <h1>Nuestros productos</h1>
        <p>Explora nuestra selección de auriculares diseñados para ofrecer el mejor sonido.</p>
      </div>
        <article className="container-products">
            {
            products.map((product)=>{
                return(
                   <ProductCard product={product} />
                )
            })
            }
        </article>
        </Layout>
    )
    
}

export {Products}