import { Button, TextField } from "@mui/material";
import './SignUp.css';

export default function SignUp() {
    return (
        <div className='signup-form'>
            <div className='signup-form-full-name-text-field'>
                <TextField variant="outlined" label="Full Name" fullWidth={true}/>
            </div>
            <div className='signup-form-email-text-field'>
                <TextField variant="outlined" label="Email ID" fullWidth={true}/>
            </div>
            <div className='signup-form-password-text-field'>
                <TextField variant="outlined" label="Password" fullWidth={true}/>
            </div>
            <div className='signup-form-mobile-number-text-field'>
                <TextField variant="outlined" label="Mobile Number" fullWidth={true}/>
            </div>
            <div className='signup-form-signup-btn'>
                <Button variant="contained" size="small" sx={{
                    width: '100%',
                    background: '#A03037 0% 0% no-repeat padding-box',
                    textTransform: 'none',
                    '&:hover': {
                        backgroundColor: '#A03037',
                        borderColor: '#A03037',
                        boxShadow: 'none',
                    },
                    '&:active': {
                        boxShadow: 'none',
                        backgroundColor: '#A03037',
                        borderColor: '#005cbf',
                    },
                    '&:focus': {
                        boxShadow: '0 0 0 0.2rem #A03037',
                    }
                }}>
                    Signup
                </Button>
            </div>
        </div>
    );
}