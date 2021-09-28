
'use strict';




const initialState = {

  categories: [
    {


      name: 'Food',
      categoriesName:<h3 style={{fontFamily:'cursive' }}> Food categories</h3>,

      description: 'Food description',
      url: 'https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg',

    },


    {
      name:  'Electronics' ,

      categoriesName:<h3 style={{fontFamily:'cursive' }}> Electronics categories</h3>,
      
      description: 'Electronics description',

      url: 'https://c.stocksy.com/a/Gfn000/z9/190914.jpg',
    },
  ],


  active: '',
};

















const categoriesReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {

    case 'ACTIVE':

      const categories = state.categories;

      const active = payload;



      return { categories, active };
    default :
      return state;
  }
};














export default categoriesReducer;


























































