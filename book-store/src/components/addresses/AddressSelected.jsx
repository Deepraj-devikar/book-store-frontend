import Textarea from '@mui/joy/Textarea';
import { TextField } from '@mui/material';
import './AddressSelected.css';

export default function AddressSelected() {
    return (
        <div className="cart-address-selected-box">
            <div className='cart-address-selected-title-n-edit'>
                <div className='cart-address-selected-title'>
                    1.WORK
                </div>
                <div className='cart-address-selected-edit'>
                    Edit
                </div>
            </div>
            <div className='cart-address-selected-address-textarea'>
                <Textarea name="address" placeholder="Address" lable="Address" variant="outlined" fullWidth={true}/>
            </div>
            <div className='cart-address-selected-city-n-state'>
                <TextField size="small" fullWidth={true} label="City/Town" name="city" />
                <TextField size="small" fullWidth={true} label="State" name="state" />
            </div>
        </div>
    );
}