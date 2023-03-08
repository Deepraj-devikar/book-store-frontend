import { Button, TextField } from '@mui/material';
import './Login.css';

export default function Login() {
    return (
        <div className='login-form'>
            <div className='login-form-email-text-field'>
                <TextField variant="outlined" label="Email ID" fullWidth={true}/>
            </div>
            <div className='login-form-password-text-field'>
                <TextField variant="outlined" label="Password" fullWidth={true}/>
            </div>
            <div className='login-form-login-btn'>
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
                    Login
                </Button>
            </div>
            <div className='login-form-or'>OR</div>
            <div className='login-form-social-media'>
                <Button variant="contained">
                    Facebook
                </Button>
                <Button variant='text'>
                    Google
                </Button>
            </div>
        </div>
    );
}