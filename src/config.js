import {createTheme} from '@material-ui/core/styles';

const theme = createTheme({
	palette: {
		type: 'light',
        primary: {
            main: '#CE053C',
            contrastText: '#FFF',
            light: '#CE053C',
            dark: '#CE053C',
        },
        secondary: {
            main: '#FFF',
            contrastText: '#FFF',
            light: '#FFF',
            dark: '#FFF',
        }
	},
});

export {theme};