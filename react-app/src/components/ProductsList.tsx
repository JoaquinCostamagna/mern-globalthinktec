import Box from '@mui/material/Box'
import { Product } from '../models/products'
import ProductsListItem from './ProductsListItem'
import Stack from '@mui/material/Stack'

function ProductsList({ products }: { products: Product[] | undefined }) {
    return (
        <>
            <Box className='p-5'>
                <Stack className='divide-y-4 rounded-lg overflow-hidden'>
                    {products?.map((product: Product) => (
                        <ProductsListItem key={product.id} product={product} />
                    ))}
                </Stack>
            </Box> 
        </>
    )
}

export default ProductsList