'use strict'; 



const initialState = {
  products: [
    {
      id:1,
      name: 'MACBOOK AIR (LATE 2020)',
      category: 'Electronics',
      description:'Electronics',
      price: 1100,
      count: 9,
      image:
        'https://ipcdigital.com/wp-content/uploads/2021/06/3319-m0014-m007-m050-asym-m008-m022-laptop-guide-248175189-hero.jpg',
    },
    {
      id:2,
      name: 'HP SPECTRE X360 14',
      category: 'Electronics',
      description:'HP SPECTRE X360 14',
      price: 600,
      count: 221,
      image:
        'https://images.prismic.io/frameworkmarketplace/5d87bd50-8e78-4a7a-ade9-4356e3693416_Pre-Marketplace+-+image_02.jpg?auto=compress,format',
    },
    {
      id:3,
      name: 'LG GRAM 17 (2021)',
      category: 'Electronics',
      description:'LLG GRAM 17 (2021)',
      price: 10000,
      count: 16,
      image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvLENbxhrGMP4I6uCBexxzb8bVOLeqD09eKw&usqp=CAU',

    },
    {
      id:4,
      name: 'MACBOOK PRO 13 (LATE 2020)',
      category: 'Electronics',
      description:'MACBOOK PRO 13 (LATE 2020)',
      price: 7000,
      count: 25,
      image:
      'https://images.prismic.io/frameworkmarketplace/cca31de3-3b75-4932-af96-7646b7eba6c7__DSC3630-Edit-cropped.jpg?auto=compress,format',

    },
    {
      id:5,
      name: 'Apple iPhone 11 Pro',
      category: 'Electronics',
      description:'Apple iPhone 11 Description',
      price: 800,
      count: 8,
      image:
        'https://i.guim.co.uk/img/media/fafda794e7f84de992bc9d36260da92150c4031c/373_518_4075_2445/master/4075.jpg?width=620&quality=85&auto=format&fit=max&s=2a1e90c78ba947283b9737eb6606ec7e',
    },
    {
      id:6,
      name: 'DELL XPS 13 2-IN-1',
      category: 'Electronics',
      description:'Samsung Galaxy S10 Description',
      price: 650,
      count: 12,
      image:
      'https://th-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/l/a/langkawirebak_15_ffplus_naturalsilver_t_hdcam_nonodd_fpr_freedos_coreset_frontright.png',

    },
    {













      id:7,
      name: 'Single-Serve Pot Pies',
      category: 'Food',
      description:'  Single-Serve Pot Pies Description',
      price: 6,
      count: 15,
      image:
        'https://cdn.trendhunterstatic.com/thumbs/frozen-pot-pies.jpeg',
    },
    {
      id:8,
      name: 'bell pepper',
      category: 'Food',
      description:'bell pepper',
      price: 120,
      count: 8,
      image:
      'https://static.euronews.com/articles/stories/05/46/11/34/1440x810_cmsv2_f54fdc9f-16b4-5eda-be02-37d88540662c-5461134.jpg',

    },
    {
      id:9,
      name: 'tomato',
      category: 'Food',
      description:'tomato',
      price: 80,
      count: 11,
      image:
      'https://www.olivado.com/wp-content/uploads/2020/07/78_organic-food-700.jpg',
    },
    {
      id:10,
      name: 'kiwi',
      category: 'Food',
      description:'Prepackaged Deep-Fried Snack Cakes Description',
      price: 26,
      count: 7,
      image:
      'https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com//content/15/e7/47c9886840b299bd24b6e48fca6e/7.Certified-Organic-Grocery-Store_2280x1282.jpg',

    },
    {
      id:11,
      name: 'avacodo',
      category: 'Food',
      description:'avacodo',
      price: 10,
      count: 16,
      image:
        'https://cdn.britannica.com/20/191620-050-161F6867/fingerling-potatoes.jpg',
    },
    {
      id:12,
      name: 'pototto',
      category: 'Food',
      description:'pototto',
      price: 8,
      count: 11,
      image:
      'https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/249848-organic-food.jpg?w=1155&h=417',

    },
  ],
  activeProducts:[],
};



const productsReducer = (state = initialState, action) => {
  console.log('===================>proudect',state);
  const { type, payload } = action;
  switch (type) {


    case 'ACTIVE':
      state.activeProducts= state.products.filter (product => 
         product.category === payload 
      );
      
      return { ...state, activeProducts : state.activeProducts };

    case 'ADD':

      state.activeProducts=state.activeProducts.map ((product) => {
        if(product.name === payload.name){
          
          if(product.inStock >0){
            product.inStock = product.inStock -1;

          } else{
        return product;
          }
            
          }
          return product;
        
          
      });
      console.log(state.activeProducts);
      return {...state, ...state.activeProducts};

    case'GET':
    {   console.log('getttttttttttttttttttttttttttttttttttttttttttttt',payload)
       return {...state,products:payload}}
 
      //  return {...state,products:payload}
      
    default :
      return state;
  }
};

export default productsReducer;











































