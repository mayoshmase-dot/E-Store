import { createTheme } from "@mui/material"

const getTheme = (mode)=>{
return createTheme({
        palette: {
    mode:mode,
        primary: {
            main: '#000000',
        },
        secondary: {
            main: 'rgba(205, 207, 207, 0.34)',
            dark: 'rgb(144, 151, 155)'
        }
    }
})
}

export default getTheme;