import { useEffect, useState, createContext } from "react"
import Box from "@mui/material/Box"
import axios from "axios";
import { Product } from "../models/products";
import ProductsList from "../components/products/ProductsList";
import LoadingListPlaceholder from "../components/LoadingListPlaceholder";

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

    /**
     * Fetches products from the server.
     * 
     * @param {boolean} silent - Indicates whether to show loading indicator or not. Default is false.
     * @returns {Promise<void>} - A promise that resolves when the products are fetched successfully.
     */
    const fetchProducts = async (silent: boolean = false): Promise<void> => {
        if (!silent) setLoading(prev => prev + 1);
        try {
            const res = await axios.get('/products');
            setProducts(res.data);
        } catch (error) {
            // Generic error handling in interceptors
        }
        if (!silent) setLoading(prev => prev - 1);
    }

    return (
        // ContextProvider to avoid props drilling when using fetchProducts callback for successfull product update
        <UpdateProductsContext.Provider value={{ refreshProducts: () => fetchProducts(true) }}>
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