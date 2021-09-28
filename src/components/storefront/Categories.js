'use strict';

import React from 'react';

import { connect } from 'react-redux';

import { activeCategory } from '../../store/Active';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';




function Categories(props) {


  return (
    <>
      <h3 style={{fontFamily:'cursive' }} >

        {' '}
        Browse Our Store Categories :
      </h3>

      {props.categories.map(category => {
        return (

          <ButtonBase

            key={category.name}

            onClick={() => props.activeCategory(category.name)}

            style={{ marginLeft: '30px'}}
          >
            <Typography>{category.categoriesName}</Typography>

            <img

              src={category.url}

              alt={category.categoriesName}

              width='300px'
              height='300px'
             
            ></img>

          </ButtonBase>
        );
      })}


    </>
  );
}






const mapStateToProps = state => {
  return {
    categories:state.categories.categories,
    active:state.categories.active,
  };
};



const mapDispatchToProps ={activeCategory};

















export default connect (mapStateToProps, mapDispatchToProps)(Categories);



































