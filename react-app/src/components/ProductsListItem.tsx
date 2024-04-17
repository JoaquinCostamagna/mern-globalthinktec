import { Product } from '../models/products'

function ProductsListItem({ product }: { product: Product }) {
    return (
        <div>Producto: {product.name}</div>
    )
}

export default ProductsListItem