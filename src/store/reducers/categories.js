'use strict'; 

const initialState = {
  categories: [
    {
      name: 'food',
      displayName: <h3 style={{fontFamily:'cursive' }}> Food categories</h3>,
      description: 'Food description',
      url: 'https://www.helpguide.org/wp-content/uploads/table-with-grains-vegetables-fruit-768.jpg',
    },
    {
      name: 'electronics',
      displayName: <h3 style={{fontFamily:'cursive' }}> Electronics categories</h3>,
      description: 'Electronics description',
      url: 'https://c.stocksy.com/a/Gfn000/z9/190914.jpg',
    },
    {
      name: 'clothing',
      displayName: <h3 style={{fontFamily:'cursive' }}> Clothing categories</h3>,
      description: 'Clothing description',
      url: 'https://assets.weforum.org/article/image/YlqprZMVrDcJUXbdjc5rAP6uqoO_YT1xZNby3HjH_KM.jpg',
    },

  ],
  active: '',
};

const categoriesReducer = (state = initialState, action) => {


  const { type, payload } = action;

  switch (type) {
    case 'ACTIVE':
    
    

      state.active = payload;
      return state;
    default :
      return state;
  }
};

export default categoriesReducer;
