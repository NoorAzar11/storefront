'use strict'

const initialState = {



  products: [
    {
id:1,
      name: 'MACBOOK AIR (LATE 2020)',
      category: 'Electronics',
      price: 100000,
      count: 50,
      image:
        'https://ipcdigital.com/wp-content/uploads/2021/06/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero.jpg',
    },

    {
      id:2,
      name: ' HP SPECTRE X360 14',
      category: 'Electronics',
      price: 6666,
      count: 222,
      image:
        'https://images.prismic.io/frameworkmarketplace/5d87bd50-8e78-4a7a-ade9-4356e3693416_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    },

    {
      id:3,
      name: ' LG GRAM 17 (2021)',
      category: 'Electronics',
      price: 10300,
      count: 30,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLENbxhrGMP4I6uCBexxzb8bVOLeqD09eKw&usqp=CAU',
    },

    {
      id:4,
      name: 'HP ENVY X360 (2020)',
      category: 'Electronics',
      price: 900,
      count: 25,
      image:
        'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6428/6428997_sd.jpg',
    },


    {
      id:5,
      name: 'MACBOOK PRO 13 (LATE 2020)',
      category: 'Electronics',
      price: 1000,
      count:1000,
      image:
        'https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format',

    },


    {
      id:6,
      name: 'DELL XPS 13 2-IN-1',
      category: 'Electronics',
      price: 4444,
      count: 236,
      image:
        'https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/l/a/langkawirebak_15_ffplus_naturalsilver_t_hdcam_nonodd_fpr_freedos_coreset_frontright.png',
    },















    {
      id:7,
      name: 'bell pepper',
      category: 'Food',
      price: 60,
      count: 415,
      image:
        'https://static.euronews.com/articles/stories/05/46/11/34/1440x810_cmsv2_f54fdc9f-16b4-5eda-be02-37d88540662c-5461134.jpg',
    },


    {

      id:8,
      name: 'tomato',
      category: 'Food',
      price: 30,
      count: 844,
      image:'https://www.olivado.com/wp-content/uploads/2020/07/78_organic-food-700.jpg',
    },


    {

      id:9,
      name: 'kiwi',
      category: 'Food',
      price: 40,
      count: 141,
      image:
        'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/15/e7/47c9886840b299bd24b6e48fca6e/7.Certified-Organic-Grocery-Store_2280x1282.jpg',
    },


    {
      id:10,
      name: 'avacodo',
      category: 'Food',
      price: 90,
      count: 47,
      image:
        'https://cdn.britannica.com/20/191620-050-161F6867/fingerling-potatoes.jpg',


    },
    {
      id:11,
      name: 'Cauliflour',
      category: 'Food',
      price: 60,
      count: 164,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPeFZxH2NfsU_1o452ApPRk3tWd4-v4Hxeaw&usqp=CAU',
    },

    {
      id:12,

      name: 'pototto',
      category: 'Food',
      price:300,
      count: 100,
      image:
        'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/249848-organic-food.jpg?w=1155&h=417',

    },
  ],
  activeProducts:[],
};
const productsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      state.activeProducts= state.products.filter (product => 
         product.category === payload 
      );
      
      return { ...state, activeProducts : state.activeProducts };

    case 'ADD':
      state.activeProducts=state.activeProducts.map (product => {
        if(product.name === payload.name){
          if (product.count>0){
            product.count = product.count -1;
          }
          return product;
        }
        return product;
      });
      return {...state, ...state.activeProducts};
      
    default :
      return state;
  }
};

export default productsReducer;




































