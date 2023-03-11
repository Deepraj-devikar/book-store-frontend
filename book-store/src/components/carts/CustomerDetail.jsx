import { Button, FormControlLabel, Paper, Radio, RadioGroup, TextField } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import AddressNotSelected from "../addresses/AddressNotSelected";
import AddressSelected from "../addresses/AddressSelected";
import './CustomerDetail.css';

export default function CustomerDetail() {
    return (
        <div className="cart-customer-detail-box">
            <Paper style={{
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                border: '1px solid #DCDCDC',
                borderRadius: '1px',
                opacity: 1
            }}>
                <div className="cart-customer-detail-content">
                    <div className="cart-customer-detail-title-n-add-new">
                        <div className="cart-customer-detail-title">
                            Customer Details
                        </div>
                        <div className="cart-customer-detail-add-new">
                            <Button variant="outlined" sx={{
                                textTransform: 'none', 
                                color: '#A03037', 
                                borderColor: '#A03037'
                            }}>
                                Add New Address
                            </Button>
                        </div>
                    </div>
                    <div className="cart-customer-detail-addresses">
                        <div className="cart-customer-detail-user-detail">
                            <TextField size="small" fullWidth={true} label="Full Name" name="name" />
                            <TextField size="small" fullWidth={true} label="Mobile Number" name="phoneNumber" />
                        </div>
                        <RadioGroup
                            aria-labelledby="cart-customer-detail-address-radio-buttons-group-label"
                            defaultValue="female"
                            name="address"
                        >
                            <FormControlLabel value="check_1" 
                                control={<Radio sx={{'&.Mui-checked': {color: deepOrange[900]}}} />} 
                                label={<AddressSelected />} 
                            />
                                
                            <FormControlLabel value="check_2" 
                                control={<Radio sx={{'&.Mui-checked': {color: deepOrange[900]}}} />} 
                                label={<AddressNotSelected />} 
                            />
                                
                        </RadioGroup>
                    </div>
                    <div className="cart-customer-detail-continue-button">
                        <Button variant="contained">
                            CONTINUE
                        </Button>
                    </div>
                </div>
            </Paper>
        </div>
    );
}