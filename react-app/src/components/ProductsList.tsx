import List from '@mui/material/List'
import { Product } from '../models/products'
import ProductsListItem from './ProductsListItem'

function ProductsList({ products }: { products: Product[] | undefined }) {
    return (
        <>
            <List className='gap-3'>
                {products?.map((product: Product) => (
                    <ProductsListItem key={product.id} product={product} />
                ))}
            </List>
        </>
    )
}

export default ProductsList