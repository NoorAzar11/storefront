'use strict'; 

import React,{useEffect} from "react";
import { connect } from "react-redux";
import {getData} from '../../store/actions/action';


import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

import { addCart } from "../../store/actions/addCart";

import Button  from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";


import CardActions from "@material-ui/core/CardActions";




function Products(props) {
  useEffect (() => {
   
    

    props.getData();
  },[props]);


  



  return (
    <>


      <p style={{ marginLeft: "46%", fontSize: "25px" }}>{props.active}</p>


      <Grid
        item
        sm={5}
        style={{


          display: "grid",


          gridColumnGap: "150px",


          gridTemplateColumns: "auto auto auto",
        }}
      >
        {props.products.activeProducts.map((product) => {
     



          if (props.active === product.category) {
            return (
              <Card

                style={{

                  borderRadius: "10px",
                  width: "20rem",
                  height: '30rem',
                  marginTop: "5px",
                  marginLeft: "20%",
                  marginBottom: "60px",
                  border: "5px solid gray",
                }}
                className={`cards ${product.name}`}
                key={product.id}
              >
                <CardActionArea>


                  <CardMedia className={"img"} image={product.url} />
                  <img


                    alt={product.name}
                    src={product.url}
                    width="200px"


                    height="100px"


                    style={{ marginLeft: "50px", marginTop: "10px" }}
                  ></img>
                  <CardContent>


                  <h3 style={{fontFamily:'cursive' }}>{product.name}</h3>
                    
                  </CardContent>


                  <CardContent> <h3 style={{fontFamily:'cursive' }}> Price : {product.price}$</h3></CardContent>



                  <CardContent>  <h3 style={{fontFamily:'cursive' }}> In Stock : {product.inStock}</h3>  </CardContent>


                </CardActionArea>


                <section className="btnn">
                  <CardActions>
                    <Button


                      variant="light"


                      style={{ border: "1px solid gray" }}
                      onClick={(count) => {

                        
                       
              
                        if (product.inStock) props.addCart(product);
                        else alert("OUT OF STOCK");
                      }}
                    >
                    <h3 style={{fontFamily:'cursive' }}> ADD TO CART</h3>  

                    </Button>
                    <Button
                      variant="light"
                      style={{ border: "1px solid gray" }}
                    >
                      <h3 style={{fontFamily:'cursive' }}>  VIEW DETAILS</h3>  
                  
                    </Button>
                  </CardActions>
                </section>
              </Card>
            );
          } else {
            return "";


          }
        })}
      </Grid>
    </>
  );
}



const mapStateToProps = (state) => {


  return { active: state.categories.active, products: state.products};


};


const mapDispatchToProps = { addCart,getData };



export default connect(mapStateToProps, mapDispatchToProps)(Products);










































