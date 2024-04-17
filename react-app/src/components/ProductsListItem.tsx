import { Product } from '../models/products';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';    
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

function ProductsListItem({ product }: { product: Product }) {

    const priceFormater: Intl.NumberFormat = new Intl.NumberFormat('es-AR', {
        style: 'currency', 
        currency: product.price_currency === 'Dollar' ? 'USD' : 'ARS'
    });

    return (
        <HtmlTooltip title={<EditIconTooltip/>}>
            <Card className='rounded-none flex'>
                <CardMedia component="img" className='max-w-[10rem] aspect-[4/3] object-cover'
                    image={product.image_url} alt={product.name} />
                <CardContent className=' w-full flex flex-col md:flex-row justify-between'>
                    <Stack>
                        <Typography variant='h5'>{product.name}</Typography>
                        <Typography variant='body2'>{product.description}</Typography>
                    </Stack>
                    <Typography variant='h5'>{priceFormater.format(product.price_ammount)}</Typography>
                </CardContent> 
            </Card>    
        </HtmlTooltip>
    )
}

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} 
        placement='bottom-end'
        slotProps={{popper: {modifiers: [{name: 'offset', options: {offset: [-10, -70]}}]}}}
    />
))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#ff6138',
    },
}));

const EditIconTooltip = () => {
    return (
        <IconButton size='small'>
            <EditIcon className='m-0 text-skin-light' onClick={()=> alert('click1')}/>
        </IconButton>
    )
}

export default ProductsListItem