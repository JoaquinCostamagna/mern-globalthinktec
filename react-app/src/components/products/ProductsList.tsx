import Box from '@mui/material/Box'
import { Product } from '../../models/products'
import ProductsListItem from './ProductsListItem'
import Stack from '@mui/material/Stack'
import Alert from '@mui/material/Alert'
import { PRODUCTS_INFO_MESSAGES } from '../../constants/infoMessages'

/**
 * Renders a list of products.
 *
 * @param {Object} props - The component props.
 * @param {Product[]} props.products - The array of products to display.
 * @returns {JSX.Element} The rendered component.
 */
function ProductsList({ products }: { products: Product[] | undefined }) {
    return (
        <>
            <Box className='w-full'>
                {/* Conditional rending of products list or info message where the list is empty */}
                {products?.length ?
                    <Stack className='divide-y-4 rounded-lg overflow-hidden'>
                        {
                            products?.map((product: Product) => (
                                <ProductsListItem key={product._id} product={product} />
                            ))
                        }
                    </Stack>
                    :
                    <Alert severity="info">
                        {PRODUCTS_INFO_MESSAGES.NO_RECORDS}
                    </Alert>
                }
            </Box>
        </>
    )
}

export default ProductsList