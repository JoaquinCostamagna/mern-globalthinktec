import { useEffect, useState, createContext } from "react"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import axios from "axios";
import { Product } from "../models/products";
import ProductsList from "../components/products/ProductsList";
import LoadingListPlaceholder from "../components/LoadingListPlaceholder";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export const UpdateProductsContext = createContext<{ refreshProducts?: () => void }>({});

/**
 * Renders the Products page.
 */
function Products() {

    const [loading, setLoading] = useState<number>(0);
    const [products, setProducts] = useState<Product[] | undefined>();

    useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = async () => {
        setLoading(prev => prev + 1);
        try {
            const res = await axios.get('/products');
            setProducts(res.data);
        } catch (error) {
            // Generic error handling in interceptors
        }
        setLoading(prev => prev - 1);
    }

    return (
        // ContextProvider to avoid props drilling when using fetchProducts callback for successfull product update
        <UpdateProductsContext.Provider value={{ refreshProducts: fetchProducts }}>
            {/* Conditional rendering of loading placeholder or products list */}
            <Box className='py-5 w-full'>
                {loading > 0 ?
                    <LoadingListPlaceholder count={5} />
                    :
                    <ProductsList products={products} />
                }
            </Box>

        </UpdateProductsContext.Provider>
    )
}

export default Products