'use strict';

import React from 'react';
import { connect } from 'react-redux';


import { activeCategory } from '../../store/Active';


import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles'
import CardActionArea from '@material-ui/core/CardActionArea';



const useStyles = makeStyles({

  root: {

    maxWidth: 400,
    padding: '2rem',
    margin: '1rem',
    border: 'solid',
    display: 'inline-block',
    textAlign: 'center'
  },

});

export function Categories(props) {

  const classes = useStyles();

  return (
    <>

      <h3 style={{ fontSize: "2rem",fontFamily: 'cursive' }}>
        {' '}

        Browse Our Store Categories :

      </h3>


      {props.categories.map(category => {
        return (


          <Card stayle={{ height: '50rem' }} className={classes.root}>


            <CardActionArea>

              <CardMedia
                component='img'
                alt={props.alt}
                height='250px'


                width='300px'
                src={category.url}

                title={category.displayName}
                onClick={() => props.activeCategory(category.name)}
              />
              <Typography gutterBottom variant='h6' component='h2'>

              <h3 style={{ fontFamily: 'cursive' }}> {category.displayName} </h3>

              </Typography>
            </CardActionArea>
          </Card>
        );
      })}

    </>
  );
}



const mapStateToProps = state => {

  return {
    categories: state.categories.categories,

    active: state.categories.active,
  };
};

const mapDispatchToProps = { activeCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);























