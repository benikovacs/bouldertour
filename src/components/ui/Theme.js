import { createMuiTheme } from '@material-ui/core/styles';

const btBlue = "#142745"
const btOrange = "#fdbc7d"
const btRed = "#ea7162"


export default createMuiTheme({
    palette: {
        common: {
            blue: `${btBlue}`,
            orange:`${btOrange}`,
            red: `${btRed}`
        },
        primary: {
            main: `${btBlue}`
        },
        secondary: {
            main: `${btRed}`
        }
    },
    typography: {
        tab: {
            fontFamily: 'Akaya Telivigala',
            textTransform: 'none',
            fontSize: '2.2rem',
            color: '#fdbc7d',
                     }
            }
})