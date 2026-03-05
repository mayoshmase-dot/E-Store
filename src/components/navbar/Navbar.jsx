import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Link } from '@mui/material';
import { Link as RouterLink, useNavigate } from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import useAuthStore from '../../store/useAuthStore';

export default function Navbar() {
  const token = useAuthStore((state) => state.token)
    const logout = useAuthStore ((state)=>state.logout)
    const navigate = useNavigate()
    const handleLogout = ()=>{
      logout();
     navigate('/login');
    }

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "rgb(255, 255, 255)", boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ color: "rgb(0, 0, 0)" }}>
            Store
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 5 }}>
            <Link component={RouterLink} to={'/'} underline='none' sx={{ color: 'rgb(144, 151, 155)' }}>Home</Link>
            {token ?
              (
                <>
                  <Link component={RouterLink} to={'/cart'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Cart</Link>
                  <Link component={'button'} onClick={handleLogout} to={'/cart'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Logout</Link>
                </>
              ) :
              (
                <>
                  <Link component={RouterLink} to={'/login'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Login</Link>
                  <Link component={RouterLink} to={'/register'} underline='none' sx={{ color: 'rgb(144, 151, 155) ' }}>Register</Link>
                </>
              )
            }
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            <IconButton sx={{ color: 'rgb(0, 0, 0)' }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: 'rgb(0, 0, 0)' }}>
              <ShoppingCartOutlinedIcon />
            </IconButton>
            <IconButton sx={{ color: 'rgb(0, 0, 0)' }}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
          </Box>
          <IconButton sx={{ color: 'rgb(0, 0, 0)', display: { xs: 'flex', sm: 'none' } }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
