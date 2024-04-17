import { useEffect, useState } from "react"
import Typography  from "@mui/material/Typography"
import Box from "@mui/material/Box"
import axios from "axios";
import { Product } from "../../models/products";
import ProductsList from "../../components/ProductsList";

function Products() {

    const [products, setProducts] = useState<Product[] | undefined>();

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        const res = await axios.get('/products');   
        setProducts(res.data);
    }

    return (
        <>
            <Box className='flex justify-center p-3 bg-skin-secondary w-full'>
                <Typography variant='h5'>Productos</Typography>
            </Box>
            <ProductsList products={products}/>
        </>
    )
}

export default Products