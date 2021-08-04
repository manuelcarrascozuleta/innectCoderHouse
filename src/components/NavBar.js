import React from "react"
import { AppBar, Toolbar, Typography, makeStyles, IconButton, Button} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartWidget from "./CartWidget.js";



const useStyle = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
      },
    title: {
        flexGrow: 1
    },
    margin: {
        marginRight: 10
    }
}))

function NavBar() {
    const classes = useStyle()
    return (
        
        <div>
            <AppBar position="fixed" color="transparent" >
                <Toolbar>
                    <IconButton color="inherit" arial-label="menu" className={classes.menuButton}>
                      <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Innect
                    </Typography>
                    <Button variant="text" color="inherit" className={classes.margin}>
                        Servicios
                    </Button>
                    <Button variant="text" color="inherit" className={classes.margin}>
                        Nosotros
                    </Button>
                    <Button variant="text" color="inherit" className={classes.margin}>
                        Contacto
                    </Button>
                    <CartWidget />
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>

    )
}    

export default NavBar