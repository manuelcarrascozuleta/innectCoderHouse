import { createMuiTheme } from "@material-ui/core/styles";


const theme = createMuiTheme ({
    palette: {
        primary: {
            light: '#0277bd',
            main: '#039be5',
            dark: '#0277bd',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f06292'
        },
      },
})

export default theme