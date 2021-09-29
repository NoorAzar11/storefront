'use strict'; 


import React, { useState } from "react";
import { connect } from "react-redux";


import Menu from "@material-ui/core/Menu";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";


import { deleteProduct } from "../../store/actions/deleteProduct";


const useStyle = makeStyles((theme) => ({

  space: {

    justifyContent: "space-between",

  },
}));



function SimpleCart(props) {

  const style = useStyle();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {

    setAnchorEl(null);
  };

  return (


    <div  className={style.space}>
       <IconButton aria-label="CART" 

       onClick={handleClick}

       style={{display:'flex'}}
       >

<h3 style={{ fontFamily: 'cursive' }}>  CART ({props.cart.num}) </h3>


        </IconButton>

      <Menu


        id="simple-menu"


        anchorEl={anchorEl}
        keepMounted
        
        open={Boolean(anchorEl)}
        onClose={handleClose}

      >


        {props.cart.cart.map((product, idx) => {



         
          return (
            <MenuItem key={product.id} onClick={handleClose}>


              <Chip
                label={`${product.name} Item: ${product.item}`}


                onDelete={() => {
                  props.deleteProduct(product);
                }}
              />
            </MenuItem>

          );
        })}
      </Menu>
    </div>
  );
}
const mapStateToProps = (state) => {


  return { cart: state.cart };


};


const mapDispatchToProps = { deleteProduct };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
















































