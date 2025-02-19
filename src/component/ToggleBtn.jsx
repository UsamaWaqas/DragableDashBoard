import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const ToggleBtn = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 50,
  height: 30,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)', // Moves the thumb to the right
      color: '#fff', // White thumb color
      '& + .MuiSwitch-track': {
        backgroundColor: '#65C466', // Green when checked (on)
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d', // Green thumb when focused
      border: '6px solid #fff', // White border on focus
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.grey[100], // Light grey for disabled thumb
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7, // Dimmed track when disabled
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 25,
    height: 25,
    borderRadius: 5, // Rounded thumb
  },
  '& .MuiSwitch-track': {
    borderRadius: 5, // Rounded track
    backgroundColor: '#E9E9EA', // Light grey when unchecked (off state)
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));

export default ToggleBtn;
