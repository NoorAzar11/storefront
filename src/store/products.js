'use strict'

const initialState = {



  products: [
    {

      name: 'MACBOOK AIR (LATE 2020)',
      category: 'Electronics',
      price: 100000,
      counter: 50,
      image:
        'https://ipcdigital.com/wp-content/uploads/2021/06/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero.jpg',
    },

    {
      name: ' HP SPECTRE X360 14',
      category: 'Electronics',
      price: 6666,
      counter: 222,
      image:
        'https://images.prismic.io/frameworkmarketplace/5d87bd50-8e78-4a7a-ade9-4356e3693416_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    },

    {
      name: ' LG GRAM 17 (2021)',
      category: 'Electronics',
      price: 10300,
      counter: 30,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLENbxhrGMP4I6uCBexxzb8bVOLeqD09eKw&usqp=CAU',
    },

    {
      name: 'HP ENVY X360 (2020)',
      category: 'Electronics',
      price: 900,
      counter: 25,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428997_sd.jpg',
    },


    {

      name: 'MACBOOK PRO 13 (LATE 2020)',
      category: 'Electronics',
      price: 1000,
      counter:1000,
      image:
        'https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format',

    },


    {

      name: 'DELL XPS 13 2-IN-1',
      category: 'Electronics',
      price: 4444,
      counter: 236,
      image:
        'https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/l/a/langkawirebak_15_ffplus_naturalsilver_t_hdcam_nonodd_fpr_freedos_coreset_frontright.png',
    },















    {

      name: 'bell pepper',
      category: 'Food',
      price: 60,
      counter: 415,
      image:
        'https://static.euronews.com/articles/stories/05/46/11/34/1440x810_cmsv2_f54fdc9f-16b4-5eda-be02-37d88540662c-5461134.jpg',
    },


    {
      name: 'tomato',
      category: 'Food',
      price: 30,
      counter: 844,
      image:'https://www.olivado.com/wp-content/uploads/2020/07/78_organic-food-700.jpg',
    },


    {


      name: 'kiwi',
      category: 'Food',
      price: 40,
      counter: 141,
      image:
        'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/15/e7/47c9886840b299bd24b6e48fca6e/7.Certified-Organic-Grocery-Store_2280x1282.jpg',
    },


    {
      name: 'avacodo',
      category: 'Food',
      price: 90,
      counter: 47,
      image:
        'https://cdn.britannica.com/20/191620-050-161F6867/fingerling-potatoes.jpg',


    },
    {

      name: 'Cauliflour',
      category: 'Food',
      price: 60,
      counter: 164,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeFZxH2NfsU_1o452ApPRk3tWd4-v4Hxeaw&usqp=CAU',
    },

    {

      name: 'pototto',
      category: 'Food',
      price:300,
      counter: 100,
      image:
        'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/249848-organic-food.jpg?w=1155&h=417',

    },
  ],
};

const productsReducer = (state = initialState, action) => {

  const { type, payload } = action;

  switch (type) {

    case 'ACTIVE':

      let product= state.products.filter (product => 

         product.category === payload ? product.category : null

      );
      
      return { ...state, product : product };

    default :

      return state;
  }
};













export default productsReducer;






































