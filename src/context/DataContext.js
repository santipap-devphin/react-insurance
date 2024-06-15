import { createContext } from 'react'
import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import images from '../assets/image/main-image2.jpg';
import imageOther from '../assets/image/breadcrumbsimg.jpg';

const DataContext = createContext({});

export const DataProvider = ({children}) => { 

        const theme = createTheme({
            root: {
            margin: "0px",
            padding: "0px"
            }
            , palette: {
            primary: {
                main: "#006F70",
            },
            action: {
                disabledBackground: '#696969',
                disabled: '#696969'
            },
            fontFamily: "Kanit"
            
            },
            typography: {
            fontFamily: "Kanit",
            fontWeightBold:100,
            fontWeightLight: 300,
            }
        
        });
        const styles = {
            paperContainer: {
                backgroundImage: `url(${images})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: useMediaQuery('(min-width:768px)') ? '100vh' : "60vh",
                transition: "all 150ms linear 0.3s",
               
            },
            paperOther: {
                backgroundImage: `url(${imageOther})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '305px',
                transition: "all 150ms linear 0.3s",
               
            },
          
        }

        const scaleTablet = useMediaQuery('(min-width:768px)');
        const matches = useMediaQuery('(max-width:899px)');


        return (
            <DataContext.Provider value={{theme , styles , scaleTablet , matches}}>
                {children}
            </DataContext.Provider>
        )


}

export default DataContext