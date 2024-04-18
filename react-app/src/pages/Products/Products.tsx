import { useEffect, useState } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import axios from "axios";
import { Product } from "../../models/products";
import ProductsList from "../../components/ProductsList";
import LoadingListPlaceholder from "../../components/LoadingListPlaceholder";
import { sleep } from "../../utils/sharedMethods";

function Products() {

    const [loading, setLoading] = useState<number>(0);
    const [products, setProducts] = useState<Product[] | undefined>();


    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        setLoading(prev => prev + 1);
        try {
            await sleep(1000);
            const res = await axios.get('/products');
            setProducts(res.data);
        } catch (error) {
            // Generic error handling in interceptors
        }
        setLoading(prev => prev - 1);
    }

    return (
        <>
            <Box className='flex justify-center p-3
                bg-skin-card border-b-2 border-b-[var(--bg-primary)] w-full'>
                <Typography variant='h5'>Productos</Typography>
            </Box>
            {loading > 0 ?
                <LoadingListPlaceholder count={10} itemHeight={10}/>
                :
                <ProductsList products={products} />
            }

        </>
    )
}

export default Products