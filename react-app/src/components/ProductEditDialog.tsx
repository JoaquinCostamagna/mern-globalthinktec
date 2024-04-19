import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { Product } from "../models/products"
import { useContext, useState } from "react"
import { useForm, Controller } from "react-hook-form"
import { NumericFormat } from 'react-number-format'
import Stack from "@mui/material/Stack"
import TextField from "@mui/material/TextField"
import { Autocomplete } from "@mui/material"
import { toast } from 'react-toastify';
import { getFloatValue } from "../utils/sharedMethods"
import axios from 'axios';
import { UpdateProductsContext } from "../pages/Products/Products"

const currencyOptions = ['Dollar', 'Peso Argentino']

type ProductEditDialogProps = {
    open: boolean,
    product: Product,
    onClose: () => void,
}

function ProductEditDialog({ open, onClose, product }: ProductEditDialogProps) {

    const [loading, setLoading] = useState<number>(0);
    const { register, handleSubmit, formState: { errors }, watch, reset, control } = useForm({ mode: 'onChange', defaultValues: { ...product } });
    const refreshProducts = useContext(UpdateProductsContext).refreshProducts;

    const onSubmit = async (data: any) => {
        setLoading(prev => prev + 1);
        toast.loading('Cargando...', { toastId: 'postProduct'})
        try {
            console.log(data);
            const params: Product = {...data, price_ammount: getFloatValue(data.price_ammount)}
            await axios.post(`/products/updateProduct`, params);
            onClose();
            if (refreshProducts) refreshProducts();
            toast.update('postProduct', { render: 'Producto actualizado con éxito', type: 'success', isLoading: false, autoClose: 2000, closeOnClick: true});
        } catch (error) {
            console.log(error)
            toast.update('postProduct', { render: 'Error al actualizar el producto', type: 'error', isLoading: false, autoClose: 2000, closeOnClick: true});
            // Generic error handling in interceptors
        }
        setLoading(prev => prev - 1);
    }

    const handleClose = () => {
        onClose();
        reset({ ...product });
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            // className='z-[10000]'
            scroll="body"
        >
            <DialogTitle>Editar Producto</DialogTitle>
            <DialogContent>
                <img src={product.image_url} alt={product.name} className='w-full object-cover aspect-square' />
                <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        margin="normal"
                        autoFocus
                        type="text"
                        inputProps={{ maxLength: 101 }}
                        fullWidth
                        id="name"
                        label="Nombre de producto"
                        error={!!errors.name}
                        helperText={errors.name?.message as any}
                        {...register('name', {
                            required: "Este campo es requerido",
                            maxLength: { value: 100, message: "El nombre no puede superar los 100 caracteres" },
                            minLength: { value: 3, message: "El nombre debe tener al menos 3 caracteres" }
                        })}
                    />
                    <TextField
                        margin="normal"
                        type="text"
                        inputProps={{ maxLength: 500 }}
                        multiline
                        fullWidth
                        id="description"
                        label="Descripción"
                        error={!!errors.description}
                        helperText={errors.description?.message as any}
                        {...register('description', {
                            maxLength: { value: 500, message: "La descripción no puede superar los 500 caracteres" },
                        })}
                    />
                    <span className='text-right text-sm mb-2'>{watch('description')?.length || 0} de 500</span>
                    <Stack className='flex-row gap-2'>
                        <Controller
                            name="price_currency"
                            control={control}
                            rules={{
                                required: "Debes seleccionar una moneda",
                            }}
                            render={({ fieldState: { error }, field: field }) => (
                                <Autocomplete
                                    {...field}
                                    options={currencyOptions}
                                    fullWidth
                                    getOptionLabel={(option) => option}
                                    renderInput={(params) =>
                                        <TextField
                                            {...params}
                                            inputRef={field.ref}
                                            label="Moneda"
                                            error={!!error}
                                            helperText={error?.message}
                                        />
                                    }
                                    onChange={(_, value) => field.onChange(value)}
                                />
                            )}
                        />
                        <Controller
                            name="price_ammount"
                            control={control}
                            rules={{
                                required: "Debes ingresar un monto",
                            }}
                            render={({ fieldState: { error }, field: field }) => (
                                <NumericFormat
                                    {...field}
                                    // inputRef={field.ref}
                                    name={field.name}
                                    customInput={TextField}
                                    thousandSeparator='.'
                                    decimalSeparator=','
                                    decimalScale={2}
                                    fullWidth
                                    prefix={watch('price_currency') === 'Dollar' ? 'US$ ' : '$ '}
                                    sx={{
                                        input: { textAlign: "right" },
                                    }}
                                    inputProps={{ min: 0, pattern: "[0-9]*" }}
                                    label="Precio"
                                    autoComplete="false"
                                    autoFocus
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Stack>
                </Stack>
            </DialogContent>
            <DialogActions className='p-5'>
                <Button 
                    onClick={handleClose}
                    color='secondary'
                >
                    Cancelar
                </Button>
                <Button 
                    type="submit" 
                    onClick={handleSubmit(onSubmit)}
                    variant='contained'
                    color='primary'
                    disabled={loading > 0}
                >
                    Guardar
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ProductEditDialog