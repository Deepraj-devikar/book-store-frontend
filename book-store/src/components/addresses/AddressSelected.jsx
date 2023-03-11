import Textarea from '@mui/joy/Textarea';
import { TextField } from '@mui/material';
import { connect } from 'react-redux';
import { ADDRESS } from '../../redux/constants';
import './AddressSelected.css';

function AddressSelected(props) {
    const handleUserInput = (e) => {
        props.dispatch({
            type: ADDRESS,
            key: e.target.name,
            value: e.target.value
        })
    };

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
                <Textarea name="fullAddress" placeholder="Address" lable="Address" variant="outlined" fullWidth={true} onChange={handleUserInput}/>
            </div>
            <div className='cart-address-selected-city-n-state'>
                <TextField size="small" fullWidth={true} label="City/Town" name="city" onChange={handleUserInput}/>
                <TextField size="small" fullWidth={true} label="State" name="state" onChange={handleUserInput}/>
            </div>
        </div>
    );
}

export default connect() (AddressSelected);