'use strict';


import React from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import { Button } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";

import CardContent from "@material-ui/core/CardContent";

import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import { addProduct } from "../../store/actions/addProduct";




function Products(props) {


  return (


    <>
      <p style={{ marginLeft: "46%", fontSize: "25px" }}>{props.active}</p>



      <Grid



        item
        sm={5}
        style={{
          display: "grid",
          gridColumnGap: "50px",


          gridTemplateColumns: "auto auto auto",
        }}
      >
        {props.products.map((product) => {



          if (props.active === product.category) {
            return (
              <Card
                style={{




                  borderRadius: "10px",
                  width: "20rem",
                  height: "500px",
                  marginTop: "5px",
                  marginLeft: "90%",



                  marginBottom: "200px",
                  border: "1px solid gray",
                }}
                className={`cards ${product.name}`}
                key={product.name}
              >
                <CardActionArea>



                  <CardMedia className={"img"} image={product.img} />
                  <img
                    alt={product.name}
                    src={product.image}
                    width="120px"
                    height="100px"
                    style={{ marginLeft: "80px", marginTop: "10px" }}
                  ></img>
                  <CardContent>
                    <h2  style={{fontFamily:'cursive' }}>{product.name}</h2>
                  </CardContent>
                  <CardContent> <h2 style={{fontFamily:'cursive' }}>Price : {product.price}$</h2></CardContent>
                </CardActionArea>



                <section className="btnn">
                  <CardActions>
                    <Button



                      variant="light"
                      style={{ border: "1px solid gray" }}
                      onClick={(count) => {
                     
              
                        if (product.count) props.addProduct(product);
                        else alert("OUT OF STOCK");
                      }}
                    >
                      <h3  style={{fontFamily:'cursive' }}>ADD TO CART</h3>
                    </Button>
                    <Button
                      variant="light"
                      style={{ border: "1px solid gray" }}
                    >
                      <h3  style={{fontFamily:'cursive' }}>VIEW DETAILS</h3>
                      
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
  return { active: state.categories.active, products: state.products.products };
};
const mapDispatchToProps = { addProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);


































