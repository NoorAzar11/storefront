
'use strict'; 


import React from "react";
import SimpleCart from '../cart/SimpleCart'
import { withStyles } from '@material-ui/core/styles';
import Toolbar from "@material-ui/core/Toolbar";


import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

import AppBar from "@material-ui/core/AppBar";


const StyledBadge = withStyles(theme => ({


  badge: {


      right: -3,
      top: 13,
      border: `1px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
  },
}))(Badge);


const useStyle = makeStyles(theme => ({


  root: {
      flexGrow: 1,
  },
  space: {
      justifyContent: 'space-between',
  },
}));
function Header() {

  
  
  
    const style = useStyle();



    return (
        <AppBar  position='static' style={{ backgroundColor: '#5c85d6', color :'black' }}>
            <Toolbar variant="dense" className={style.space}>
         


                <Typography variant="h6" color="inherit">
<h3 style={{fontSize: "2rem",fontFamily:'cursive' }}> OUR STORE </h3>
                   
                </Typography>

                <IconButton aria-label='cart' style={{ fontSize: "5rem",fontFamily:'cursive' }}>
                    <SimpleCart />


                    <StyledBadge  color='secondary'>
                        <ShoppingCartIcon />
                    </StyledBadge>
                
                

                </IconButton>

            </Toolbar>
            
        </AppBar>
    );
  
}
export default Header;














































