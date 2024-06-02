import { TextField as MuiTextField, Button as MuiButton, Box as MuiBox } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CreateModalWapper = styled(MuiBox)(({ theme}) => ({
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-70%, -50%)',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: 24,
    padding: '20px 50px 50px 50px'
}));

export const TextField = styled(MuiTextField)({
    marginTop: '10px'
});

export const Button = styled(MuiButton)({
    marginTop: '10px'
});